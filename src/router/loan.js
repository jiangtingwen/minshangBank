export default [
    {
      path: '/loan',
      name: 'loan',
      component: () => import('views/personal/financialAssistant/loan.vue'),
      meta: {
        auth: true,
        title: '贷款计算器',
        // keepAlive: true
      },

    }
  ]