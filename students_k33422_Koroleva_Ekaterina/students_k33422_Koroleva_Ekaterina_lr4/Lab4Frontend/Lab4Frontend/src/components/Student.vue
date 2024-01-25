<script>
    import Edit from './icons/Edit.vue';
    import Delete from './icons/Delete.vue'
    import { RouterLink } from 'vue-router';
    import axios from "axios";

    export default {
        props: {
            title: {
                type: Boolean,
                required: true,
            },
            id: {
                type: String,
                required: true
            },
            first_name: {
                type: String,
                required: true
            },
            last_name: {
                type: String,
                required: true
            },
            school_class: {
                type: String,
                required: true,
            }
        },
        methods: {
                async deleteStudent() {
                    try {
                        const response = await axios.delete(`http://localhost:8000/api/students/${this.id}`); 
                        window.location.reload();
                    }
                    catch (e) {
                        alert('Ошибка');
                        console.log(e);
                    }
                }
        },
        components: {
            Edit,
            Delete,
        }
    }
</script>

<template>
    <div class="studentsRow">
        <p class="data" id="id">{{ id }}</p>
        <p class="data" id="first_name">{{ first_name }}</p>
        <p class="data" id="last_name">{{ last_name }}</p>
        <p class="data" id="school_class">{{ school_class }}</p>
        <div v-if="!title" class="btn_container">
            <RouterLink :to='{name: "students_edit", params: {id: id}}'><Edit /></RouterLink>
            <Delete @click="deleteStudent"/>
        </div>
    </div>
</template>

<style>
.studentsRow {
    background-color: hsla(118, 100%, 77%, 0.5);
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
}

.data {
    font-size: 20px;
    font-weight: bolder;
}

#id {
    width: 10%;
}

#first_name {
    width: 25%;
}

#last_name {
    width: 25%;
}

#school_class {
    width: 20%;
}

.btn_container {
    display: flex;
    justify-content: space-between;
    width: 100px;
}
</style>