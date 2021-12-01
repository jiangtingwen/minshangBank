export default [
  {
    path: '/bank',
    name: 'bank',
    component: () => import(/* webpackChunkName: "article" */ 'views/bank.vue'),
    meta: {
      auth: true,
      title: '银行',
      keepAlive: true
    }
  }
]
