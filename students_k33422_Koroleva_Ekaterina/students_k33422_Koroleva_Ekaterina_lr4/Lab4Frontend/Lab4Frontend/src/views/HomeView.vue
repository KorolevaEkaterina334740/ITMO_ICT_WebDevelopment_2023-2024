<script>
  import Leson from '@/components/Leson.vue';
  import axios from 'axios';
  export default{
    data() {
        return {
            classes: [],
            lessons: [],
            subjects: [],
        };
    },
    methods: {
        async getClasses() {
            try {
                const response = await axios.get('http://localhost:8000/api/classes/');
                this.classes = response.data;
            }
            catch (e) {
                alert('Ошибка');
                console.log(e);
            }
        },
        async getLessons() {
            try {
                const response = await axios.get('http://localhost:8000/api/lessons/');
                this.lessons = response.data;
            }
            catch (e) {
                alert('Ошибка');
                console.log(e);
            }
        },
        async getSubjects() {
            try {
                const response = await axios.get('http://localhost:8000/api/subjects/');
                this.subjects = response.data;
            }
            catch (e) {
                alert('Ошибка');
                console.log(e);
            }
        }
    },
    mounted() {
        this.getClasses();
        this.getLessons();
        this.getSubjects();
    },
    components: { Leson }
}
</script>

<template>
  <main class="main">
    <h2>Shedule</h2>
    <div class="table">
        <Leson v-for="lesson in lessons" 
          :class_="classes.filter((value) => {return value.id == lesson.school_class})[0].name"
          :teacher="lesson.teacher"
          :subject="subjects.filter((value) => {return value.id == lesson.subject})[0].name"
          :date="lesson.day_of_week"
          :lessonsNum="lesson.lesson_number"
        ></Leson>
    </div>
    <RouterLink class="btn" to="/add_shedule">Add new</RouterLink>
  </main>
</template>

<style>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.table {
    margin: 10px;
    border-radius: 10px;
    border: 1px black solid;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
}

.leson {
    margin: 5px 50px;
    border: 2px solid rgb(41, 173, 56);
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.499);
    padding: 5px 30px;
}

.btn {
    padding: 10px;
    background-color: rgba(41, 173, 56, 0.3);
    border: 0px;
    border-radius: 5px;
    width: 50%;
}
.btn:hover {
    background-color: rgba(41, 173, 56, 0.7);
    transition: 0.5s;
    cursor: pointer;
} 

.btn:active {
    background-color: rgba(41, 173, 56, 1);
    transition: 0.1s;
}
</style>
