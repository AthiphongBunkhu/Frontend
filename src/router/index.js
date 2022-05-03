import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Overview from '../views/Overview.vue'
import Auth from '../middlewares/auth'
import About from '../views/About.vue'
import Dormbooking from '../views/Dormbooking.vue'
import Room01 from '../views/allroom/room01.vue'
import Room02 from '../views/allroom/room02.vue'
import Room03 from '../views/allroom/room03.vue'
import Room04 from '../views/allroom/room04.vue'
import Room05 from '../views/allroom/room05.vue'
import Room06 from '../views/allroom/room06.vue'
import Room07 from '../views/allroom/room07.vue'
import Room08 from '../views/allroom/room08.vue'
import Room09 from '../views/allroom/room09.vue'
import Room10 from '../views/allroom/room10.vue'
import Room11 from '../views/allroom/room11.vue'
import Room12 from '../views/allroom/room12.vue'
import addPD from '../components/addPD.vue'
import Croom01 from '../views/check/croom01.vue'
import Croom02 from '../views/check/croom02.vue'
import Croom03 from '../views/check/croom03.vue'
import Croom04 from '../views/check/croom04.vue'
import Croom05 from '../views/check/croom05.vue'
import Croom06 from '../views/check/croom06.vue'
import Croom07 from '../views/check/croom07.vue'
import Croom08 from '../views/check/croom08.vue'
import Croom09 from '../views/check/croom09.vue'
import Croom10 from '../views/check/croom10.vue'
import Croom11 from '../views/check/croom11.vue'
import Croom12 from '../views/check/croom12.vue'
import deletePD from '../components/deletePD.vue'
import editPD from '../components/editPD.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview,
    beforeEnter: Auth
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter: Auth
  },
  {
    path: '/dormbooking',
    name: 'Dormbooking',
    component: Dormbooking,
    beforeEnter: Auth
  },
  {
    path: '/room01',
    name: 'Room01',
    component: Room01,
    beforeEnter: Auth
  },
  {
    path: '/room02',
    name: 'Room02',
    component: Room02,
    beforeEnter: Auth
  },
  {
    path: '/room03',
    name: 'Room03',
    component: Room03,
    beforeEnter: Auth
  },
  {
    path: '/room04',
    name: 'Room04',
    component: Room04,
    beforeEnter: Auth
  },
  {
    path: '/room05',
    name: 'Room05',
    component: Room05,
    beforeEnter: Auth
  },
  {
    path: '/room06',
    name: 'Room06',
    component: Room06,
    beforeEnter: Auth
  },
  {
    path: '/room07',
    name: 'Room07',
    component: Room07,
    beforeEnter: Auth
  },
  {
    path: '/room08',
    name: 'Room08',
    component: Room08,
    beforeEnter: Auth
  },
  {
    path: '/room09',
    name: 'Room09',
    component: Room09,
    beforeEnter: Auth
  },
  {
    path: '/room10',
    name: 'Room10',
    component: Room10,
    beforeEnter: Auth
  },
  {
    path: '/room11',
    name: 'Room11',
    component: Room11,
    beforeEnter: Auth
  },
  {
    path: '/room12',
    name: 'Room12',
    component: Room12,
    beforeEnter: Auth
  },
  {
    path: '/addpd',
    name: 'addPD',
    component: addPD,
  },
  {
    path: '/croom01',
    name: 'Croom01',
    component: Croom01,
  },
  {
    path: '/croom02',
    name: 'Croom02',
    component: Croom02,
  },
  {
    path: '/croom03',
    name: 'Croom03',
    component: Croom03,
  },
  {
    path: '/croom04',
    name: 'Croom04',
    component: Croom04,
  },
  {
    path: '/croom05',
    name: 'Croom05',
    component: Croom05,
  },
  {
    path: '/croom06',
    name: 'Croom06',
    component: Croom06,
  },
  {
    path: '/croom07',
    name: 'Croom07',
    component: Croom07,
  },
  {
    path: '/croom08',
    name: 'Croom08',
    component: Croom08,
  },
  {
    path: '/croom09',
    name: 'Croom09',
    component: Croom09,
  },
  {
    path: '/croom10',
    name: 'Croom10',
    component: Croom10,
  },
  {
    path: '/croom11',
    name: 'Croom11',
    component: Croom11,
  },
  {
    path: '/croom12',
    name: 'Croom12',
    component: Croom12,
  },
  {
    path: '/deletepd',
    name: 'deletePD',
    component: deletePD,
  },
  {
    path: '/editpd',
    name: 'editPD',
    component: editPD,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
