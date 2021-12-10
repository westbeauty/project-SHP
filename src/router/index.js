import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/pages/Home/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },

        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
         
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        
        {
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            name:'search',
            // 4.路由组件能不能传递props数据？
            // 1.布尔值写法，只能传params参数
            // props:true
            // 2.对象写法
            // props:{a:1,b:2},
            // 3.函数写法
            props($route) {
                 return {keyword:$route.params.keyword,k:$route.query.k}
            }
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})