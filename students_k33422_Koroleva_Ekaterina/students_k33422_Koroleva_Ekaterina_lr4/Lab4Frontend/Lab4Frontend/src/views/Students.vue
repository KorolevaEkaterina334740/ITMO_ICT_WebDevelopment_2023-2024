<script>
    import { RouterLink } from "vue-router";
import Student from "../components/Student.vue"
    // import TheWelcome from '../components/TheWelcome.vue'
    import axios from "axios";
    export default{
    data() {
        return {
            todos: [], // Массив данных (передается в компонент WarriorList, получает данные средствами функции fetchWarriors
        };
    },
    methods: {
        async fetchStudents() {
            try {
                const response = await axios.get('http://localhost:8000/api/students/'); // Выполнение GET-запроса Backend-серверу. Запрос вернет JSON.
                console.log(response.data);
                this.todos = response.data;
            }
            catch (e) {
                alert('Ошибка');
                console.log(e);
            }
        }
    },
    mounted() {
        this.fetchStudents(); // Vue вызывает хук mount(), когда компонент добавляется в DOM.  В данном примере это позволяет вызвать fetchWarriors для получения списка воинов до отрисовки страницы в браузере, благодаря этому страница загружается с уже полученными ранее данными.
    },
    components: { Student, RouterLink }
}
</script>

<template>
  <main>
    <h2>Students Table</h2>
    <div class="studentsTable">
        <Student class="title" :title="true" id="ID" first_name="First name" last_name="Last name" school_class="School class"/>
        <Student v-for="todo in todos" :title="false" :id="todo.id" :first_name="todo.first_name" :last_name="todo.last_name" :school_class="todo.school_class"/>
        <RouterLink to="/student_create">Create new</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.studentsTable {
    margin: 20px 10px 0px;
}

.title {
    font-weight: 600;
}
</style>