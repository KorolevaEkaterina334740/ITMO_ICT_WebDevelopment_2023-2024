<script>
    import axios from 'axios';
    export default {
    data() {
        return {
            classes: [],
            lessons: [],
            subjects: [],
            school_class: 0,
            day_of_week: 0,
            subject: 0,
            teacher: 0,
            lesson_number: 0,
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
        },
        async addLesson() {
            try {
                const response = await axios.post('http://localhost:8000/api/lessons/', {school_class: this.school_class, subject: this.subject, teacher: this.teacher, day_of_week: this.day_of_week, lesson_number: this.lesson_number});
                console.log(response)
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
}
</script>

<template>
    <div class="studentContainer">
        <h2>Add new lesson</h2>
        <p class="title">Day of weak</p>
        <input v-model="day_of_week" class="inp" type="number">
        <p class="title">Classes</p>
        <select v-model="school_class" class="select">
            <option v-for="class_ in classes" :value="class_.id">{{ class_.name }}</option>
        </select>
        <p class="title">Teacher</p>
        <input v-model="teacher" class="inp" type="number">
        <p class="title">Subject</p>
        <select v-model="subject" class="select">
            <option v-for="subject in subjects" :value="subject.id">{{ subject.name }}</option>
        </select>
        <p class="title">Lessons Number</p>
        <input v-model="lesson_number" class="inp" type="number">
        <button class="btn" @click="addLesson">Add Lesson</button>
    </div>
</template>