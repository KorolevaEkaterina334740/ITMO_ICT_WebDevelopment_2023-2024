<script>
    import router from "@/router";
    import axios from "axios";

    export default{
        props: ['id'],
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
                    const response = await axios.get(`http://localhost:8000/api/students/${this.id}/`); 
                    this.todos = response.data;
                    this.fname = this.todos.first_name
                    this.lname = this.todos.last_name
                    this.class_ = this.todos.school_class,
                    console.log(this.todos)
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
            },
            async editStudent() {
                try {
                    const response = await axios.put(`http://localhost:8000/api/students/${this.id}/`, {first_name: this.fname, last_name: this.lname, school_class: +this.class_}); 
                    router.push("/students")
                }
                catch (e) {
                    alert('Ошибка');
                    console.log(e);
                }
            }
        },
        mounted() {
        this.fetchStudents()
        this.getClasses()
        },
    }
</script>

<template>
    <div class="container" >
        <div class="studentContainer">
            <h2>Edit student *name*</h2>
            <p class="title">First name</p>
            <input v-model="fname" class="inp" type="text" name="" id="">
            <p class="title">Last name</p>
            <input v-model="lname" class="inp" type="text" name="" id="">
            <p class="title">Classes</p>
            <select v-model="class_" class="select" name="" id="">
                <option v-for="class_ in classes" :value="class_.id">{{ class_.name }}</option>
            </select>
            <button class="btn" @click="editStudent">Edit Student</button>
        </div>
        <div class="studentContainer">
            <h2>Marks</h2>
            <div class="tableRow">
                <p class="subj">Subject</p>
                <p class="mark">mark</p>
                <p class="date">Date</p>
            </div>
            <div class="tableRow">
                <p class="subj">Math</p>
                <p class="mark">4</p>
                <p class="date">12.11</p>
                <Button class="markbtn">Edit</Button>
            </div>
            <div class="tableRow">
                <p class="subj">Ballroom Dance</p>
                <p class="mark">5</p>
                <p class="date">14.11</p>
                <Button class="markbtn">Edit</Button>
            </div>
        </div>
    </div>
</template>

<style>
    /* studentsEdit */

.container {
    display: flex;
}

.studentContainer {
    margin: 0px auto;
    width: max-content;
    min-width: 230px;
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

/* table */

.tableRow {
    width: 100%;
    display: flex;
    align-items: center;
}

.subj {
    width: 35%;
}

.mark {
    width: 20%;
}

.date {
    width: 20%;
}

.markbtn {
    width: 40px;
    height: 30px;

    background-color: rgba(41, 173, 56, 0.3);
    border: 0px;
    border-radius: 5px;
}

.markbtn:hover {
    background-color: rgba(41, 173, 56, 0.7);
    transition: 0.5s;
    cursor: pointer;
} 

.markbtn:active {
    background-color: rgba(41, 173, 56, 1);
    transition: 0.1s;
}
</style>