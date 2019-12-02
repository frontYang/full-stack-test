
import { CONFIG } from '@/utils/config'
import https from '@/utils/https'

const INTF = CONFIG.intf

// 新增分类
export function addCategory(params = {}) {
  return https.post(INTF.category, params)
}

// 删除分类
export function delCategory(params = {}) {
  return https.post(`${INTF.category_del}/${params.id}`)
}

// 编辑分类
export function editCategory(params = {}) {
  return https.post(`${INTF.category}/${params.id}`, params.model)
}

// 获取列表
export function getCategoryList() {
  return https.get(`${INTF.category_list}`)
}
