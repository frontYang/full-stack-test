
const Loader = (view) => import(/* webpackChunkName: "chunk-[request][index]" */`@/views/sys/${view}.vue`)

export default {
  path: '/sys/category/:id',
  name: 'category',
  meta: {
    title: '分类列表'
  },
  component: () => Loader('Category')
}
