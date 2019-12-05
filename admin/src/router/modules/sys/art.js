
const Loader = (view) => import(/* webpackChunkName: "chunk-[request][index]" */`@/views/sys/${view}.vue`)

export default {
  path: '/sys/art/:id',
  name: 'art',
  meta: {
    title: '分类列表'
  },
  component: () => Loader('Art')
}
