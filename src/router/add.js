export default [
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "article" */ 'components/menuList.vue'),
      meta: {
        auth: true,
        title: '添加',
        // keepAlive: true
      }
    }
  ]