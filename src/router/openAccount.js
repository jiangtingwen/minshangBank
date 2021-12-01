export default [
    {
      path: '/openAccount',
      name: 'openAccount',
      component: () => import(/* webpackChunkName: "article" */ 'views/openAccount/openAccount.vue'),
      meta: {
        auth: true,
        title: '网上开户',
        // keepAlive: true
      }
    }
  ]