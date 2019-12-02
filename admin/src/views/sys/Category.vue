<template>
  <div class="page">
    <h2>分类列表</h2>
    <el-button type="primary" @click="add">新建分类</el-button>

    <el-table :data="categoryData">
      <el-table-column label="ID" type="index"></el-table-column>
      <el-table-column label="父级" prop="parent.name"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click.native.prevent="del(scope.row, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="新建分类" :visible.sync="addParams.visible" :id="id">
      <AddCategory v-model="addParams" @updateData="fetchData"/>
    </el-dialog>
  </div>
</template>

<script>
import AddCategory from '@/components/sys/AddCategory'
export default {
  data() {
    return {
      id: '',
      addParams: {
        visible: false,
        model: {
          parent: '',
          name: ''
        }
      },
      categoryData: []
    }
  },
  components: {
    AddCategory
  },
  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const res = await this.$request.getCategoryList()
      this.categoryData = res.data.list
      console.log(this.categoryData)
    },

    add() {
      this.addParams = {
        visible: true,
        model: {}
      }
    },
    edit(row) {
      this.id = row._id
      this.addParams = {
        visible: true,
        model: {
          name: row.name,
          parent: row.parent._id
        }
      }

      /* this.visible = true
      this.model = {
        name: row.name,
        parent: row.parent
      } */
    },
    del(row, index) {
      console.log(index)
      this.$alert('确定要删除此分类', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        callback: async action => {
          const data = await this.$request.delCategory({
            id: row._id
          })
          console.log(data)
          this.fetchData()
          // this.categoryData.splice(index, 1)
        }

      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
