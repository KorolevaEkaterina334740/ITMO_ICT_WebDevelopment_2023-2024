import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Students from '../views/Students.vue'
import Teachers from '../views/Teachers.vue'
import StudentEdit from '../views/StudentEdit.vue'
import  StudentCreate from '../views/StudentCreate.vue'
import AddShedule from '../views/AddShedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shedule',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers
    },
    {
      path: '/students_edit/:id',
      name: 'students_edit',
      component: StudentEdit,
      props: true,
    },
    {
      path: '/student_create',
      name: 'student_create',
      component: StudentCreate
    },
    {
      path: '/add_shedule',
      name: 'add_shedulw',
      component: AddShedule
    }
  ]
})

export default router
