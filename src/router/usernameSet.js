export default [
    {
      path: '/usernameSet',
      name: 'usernameSet',
      component: () => import('views/personal/personalSet/usernameSet.vue'),
      meta: {
        auth: true,
        title: '个人设置',
        // keepAlive: true
      },

    }
  ]