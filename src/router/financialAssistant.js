export default [
    {
      path: '/financialAssistant',
      name: 'financialAssistant',
      component: () => import('views/personal/financialAssistant/financialAssistant.vue'),
      meta: {
        auth: true,
        title: '个人设置',
        // keepAlive: true
      },

    }
  ]