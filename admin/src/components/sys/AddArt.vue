<template>
  <div class="ui-category-add">
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="value.model.categories">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="value.model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <el-input v-model="value.model.body"></el-input>
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
    }
  },
  data() {
    return {
      categories: []
    }
  },
  components: {

  },
  mounted() {
    this.fetchParents()
  },
  methods: {
    async save() {
      this.value.id
        ? await this.$request.editArt({
          id: this.value.id,
          model: this.value.model
        })
        : await this.$request.addArt(this.value.model)

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
    async fetchParents() {
      const res = await this.$request.getCategoryList()
      this.categories = res.data.list
    }
  }
}
</script>

<style scoped lang="scss">
</style>
