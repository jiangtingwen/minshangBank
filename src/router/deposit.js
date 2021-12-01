export default [
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('views/personal/financialAssistant/deposit.vue'),
      meta: {
        auth: true,
        title: '存款计算器',
        // keepAlive: true
      },

    }
  ]