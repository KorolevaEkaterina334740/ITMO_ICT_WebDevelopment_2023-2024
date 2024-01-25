<script>
    import router from "@/router";
    import axios from "axios";

    export default{
        data() {
            return {
                todos: [], 
                fname: "",
                lname: "",
                class_: "",
                classes: [],
            };
        },
        methods: {
            async fetchStudents() {
                try {
                    const response = await axios.post('http://localhost:8000/api/students/', {first_name: this.fname, last_name: this.lname, school_class: +this.class_}); 
                    this.todos = response.data;
                    router.push("/students")
                }
                catch (e) {
                    alert('Ошибка');
                    console.log(e);
                }
            },
            async getClasses() {
                try {
                    const response = await axios.get('http://localhost:8000/api/classes/'); 
                    this.classes = response.data;
                }
                catch (e) {
                    alert('Ошибка');
                    console.log(e);
                }
            }
        },
        mounted() {
        this.getClasses()
        },
    }
</script>

<template>
    <div class="studentContainer">
        <h2>Add new student</h2>
        <p class="title">First name</p>
        <input v-model='fname' class="inp" type="text" name="" id="">
        <p class="title">Last name</p>
        <input v-model='lname' class="inp" type="text" name="" id="">
        <p class="title">Classes</p>
        <select v-model='class_' class="select" name="" id="">
            <option v-for="class_ in classes" :value="class_.id">{{ class_.name }}</option>
        </select>
        <button @click='fetchStudents' class="btn">Add Student</button>
    </div>
</template>

<style>
    .studentContainer {
        margin: 50px auto;
        width: max-content;
        display: flex;
        align-items: center;
        padding: 10px 30px;
        flex-direction: column;
        border: 2px solid rgb(41, 173, 56);
        border-radius: 10px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.499);
    }

    .inp, .select {
        margin: 10px 5px;
        width: 200px;
        font-size: 20px;
        padding: 5px;
    }

    .title {
        font-size: 16px;
    }

    .btn {
        padding: 10px;
        background-color: rgba(41, 173, 56, 0.3);
        border: 0px;
        border-radius: 5px;
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