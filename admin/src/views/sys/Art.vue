<template>
  <div class="page">
    <h2>文章列表</h2>
    <el-button type="primary" @click="add">新建文章</el-button>

    <el-table :data="artData">
      <el-table-column label="ID" type="index"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
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

    <el-dialog title="新建文章" :visible.sync="addParams.visible">
      <add-art v-model="addParams" @updateData="fetchData"/>
    </el-dialog>
  </div>
</template>

<script>
import AddArt from '@/components/sys/AddArt'
export default {
  data() {
    return {
      addParams: {
        id: '',
        visible: false,
        model: {
          categories: '',
          title: '',
          body: ''
        }
      },
      artData: []
    }
  },
  components: {
    AddArt
  },
  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const res = await this.$request.getArtList()
      this.artData = res.data.list
    },

    add() {
      this.addParams = {
        visible: true,
        id: '',
        model: {}
      }
    },
    edit(row) {
      this.addParams = {
        visible: true,
        id: row._id,
        model: {
          title: row.title,
          body: row.body,
          categories: row.categories._id || ''
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
      this.$alert('确定要删除此文章', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        callback: async action => {
          const data = await this.$request.delArt({
            id: row._id
          })
          console.log(data)
          this.fetchData()
          // this.artData.splice(index, 1)
        }

      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
