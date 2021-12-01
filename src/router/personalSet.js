export default [
    {
      path: '/personalSet',
      name: 'personalSet',
      component: () => import('views/personal/personalSet/personalSet.vue'),
      meta: {
        auth: true,
        title: '个人设置',
        // keepAlive: true
      },

    }
  ]