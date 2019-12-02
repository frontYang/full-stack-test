<template>
  <div class="ui-category-add">
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="value.model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="value.model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default() {
        return {
        }
      }
    },
    value: {
      type: Object,
      default() {
        return {
          visible: true,
          model: {}
        }
      }
      /* type: Boolean,
      default: true */
    }
  },
  data() {
    return {
      parents: []
    }
  },
  components: {

  },
  mounted() {
    console.log(this.model)
    this.fetchParents()
  },
  methods: {
    async save() {
      this.id
        ? await this.$request.editCategory({
          id: this.id,
          model: this.value.model
        })
        : await this.$request.addCategory(this.value.model)

      this.$message({
        type: 'success',
        message: '保存成功'
      })

      // 跟父组件同步数据
      // this.$emit('input', false)
      this.$emit('input', {
        visible: false,
        model: this.value.model
      })
      this.$emit('updateData')
    },
    async fetch() {
      const res = await this.$https.get(`/api/admin/category_list/${this.id}`)
      this.value.model = res.data
    },
    async fetchParents() {
      const res = await this.$request.getCategoryList()
      this.parents = res.data.list
    }
  }
}
</script>

<style scoped lang="scss">
</style>
