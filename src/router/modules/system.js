import Layout from '@/layout'

const systemRouter = {
  path: '/system',
  component: Layout,
  name: 'System',
  meta: {
    title: '系统管理',
  },
  children: [
    // 机构设施标签
    {
      path: 'people',
      component: () => import('@/views/system/people/peopleList.vue'),
      name: 'FacilityLabelManagement',
      meta: { title: '人员管理'},
    },
    // 部门管理
    {
      path: 'departmentList',
      component: () => import('@/views/system/departmentList'),
      name: 'DepartmentList',
      meta: { title: '部门管理', noCache: true}
    },
  ]
}

export default systemRouter
