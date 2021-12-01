export default [
    {
      path: '/personal',
      name: 'personal',
      component: () => import('views/personal/personal.vue'),
      meta: {
        auth: true,
        title: '个人中心',
        // keepAlive: true
      },
 

    }
  ]