
import Sys from '@/views/Sys'

// 子路由
import Category from './sys/category'
import Art from './sys/art'

export default {
  path: '/sys/:id',
  name: 'sys',
  component: Sys,
  meta: {
    title: '系统一'
  },
  children: [
    Category,
    Art
  ]
}
