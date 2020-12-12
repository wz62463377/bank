import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import a from '@/components/a'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/a',
          name: 'a',
          component: a
        },
      ]
    }
  ]
})
