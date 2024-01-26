site_name: "My Docs"

App.vue
markdown
Copy code
# Документация для Компонента Header

## Введение

Компонент `Header` представляет собой верхнюю часть интерфейса приложения, содержащую навигационное меню и информацию о пользователе.

## Структура Компонента

Компонент состоит из следующих частей:

- **Навигационное меню:** Меню, предоставляющее ссылки для перехода между различными разделами приложения.

- **Имя пользователя:** Секция, отображающая имя текущего пользователя.

## Импорт в скрипте

```javascript
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
Для корректной работы компонента, он использует импорт двух элементов из библиотеки vue-router: RouterLink для создания ссылок и RouterView для отображения компонентов в зависимости от текущего пути.

Шаблон Компонента
html
Copy code
<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/students">Students</RouterLink>
        <RouterLink to="/teachers">Teachers</RouterLink>
      </nav>
    </div>
    <div>
      UserName
    </div>
  </header>

  <RouterView />
</template>
Шаблон содержит разделы для навигационного меню и отображения имени пользователя. Также включен RouterView, который будет отображать компоненты, связанные с текущим маршрутом.

Стили Компонента
css
Copy code
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(241, 241, 241);
  padding: 15px;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
}
</style>
Стили компонента определены с использованием scoped, чтобы ограничить их влияние только на текущий компонент Header. Файл содержит стили для верхней панели, навигационного меню и имени пользователя.

Документация для Маршрутизации (Router) в Vue.js
Введение
Этот файл представляет собой код на Vue.js для создания маршрутов (routes) в вашем приложении с использованием библиотеки vue-router. Этот механизм позволяет организовать навигацию между различными представлениями (views) в вашем веб-приложении.

Импорт библиотеки
javascript
Copy code
import { createRouter, createWebHistory } from 'vue-router'
Для создания маршрутов мы импортируем два элемента из библиотеки vue-router: createRouter для создания экземпляра маршрутизатора и createWebHistory для использования HTML5 History API вместо хэш-режима.

Определение Представлений (Views)
javascript
Copy code
import HomeView from '../views/HomeView.vue'
import Students from '../views/Students.vue'
import Teachers from '../views/Teachers.vue'
import StudentEdit from '../views/StudentEdit.vue'
import StudentCreate from '../views/StudentCreate.vue'
import AddShedule from '../views/AddShedule.vue'
Мы импортируем различные представления, которые будут связаны с определенными маршрутами. Эти представления представляют собой компоненты Vue, отвечающие за отображение содержимого страниц.

Создание Маршрутов
javascript
Copy code
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
      name: 'add_shedule',
      component: AddShedule
    }
  ]
})
Мы создаем экземпляр маршрутизатора с помощью createRouter. Каждый маршрут описан объектом в массиве routes, где указан путь, имя и соответствующий компонент Vue.

Опции Маршрута
path: URL-путь, который будет активировать данный маршрут.
name: Уникальное имя маршрута.
component: Компонент Vue, который будет отображен при активации маршрута.
props: Позволяет передавать параметры через props в компонент маршрута.
Экспорт Маршрутов
javascript
Copy code
export default router
Экспортируем созданный маршрутизатор для использования в главном файле приложения.

# Документация для Компонента Lesson

## Введение

Компонент `Lesson` представляет собой элемент интерфейса, отображающий информацию о занятии. Этот компонент может быть использован для вывода расписания уроков на веб-странице.

## Свойства Компонента

Компонент принимает следующие свойства (props):

- **class_:** (тип: Boolean, обязательный) - указывает на класс, к которому относится занятие.
  
- **teacher:** (тип: String, обязательный) - имя учителя, проводящего занятие.

- **subject:** (тип: String, обязательный) - название предмета занятия.

- **date:** (тип: String, обязательный) - дата проведения занятия.

- **lessonsNum:** (тип: String, обязательный) - номер занятия.

## Использование Компонента

Для использования компонента необходимо передать ему значения для каждого из свойств. Пример использования:

```html
<Lesson 
  :class_="true"
  :teacher="'Иванов Иван Иванович'"
  :subject="'Математика'"
  :date="'01.02.2024'"
  :lessonsNum="'1'"
/>
Шаблон Компонента
html
Copy code
<template>
    <div class="lesson">
        <p class="class">{{ class_ }}</p>
        <p class="teacher">{{ teacher }}</p>
        <p class="subject">{{ subject }}</p>
        <p class="date">{{ date }}</p>
        <p class="lessonsNum">{{ lessonsNum }}</p>
    </div>
</template>
Шаблон содержит блок div, внутри которого выводятся свойства занятия.

Стили Компонента
css
Copy code
<style>
.lesson {
    margin: 5px 50px;
    border: 2px solid rgb(41, 173, 56);
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.499);
    padding: 5px 30px;
}
</style>
В данном примере определены стили для блока занятия, управляющие его отображением и оформлением на веб-странице.


Документация для Компонента StudentRow
Введение
Компонент StudentRow представляет собой отдельную строку в таблице студентов, используемую для отображения информации о студенте. Каждая строка включает в себя уникальные данные о студенте, такие как идентификатор, имя, фамилия и класс. Также, в зависимости от контекста, могут отображаться кнопки для редактирования и удаления студента.

Структура Компонента
Компонент состоит из следующих частей:

Скрипт (<script>): В этом разделе определены импорты необходимых зависимостей (компонентов, библиотек) и экспортируется логика компонента.

Шаблон (<template>): В этом разделе определен HTML-шаблон компонента, включая данные студента и кнопки для редактирования и удаления.

Стили (<style>): В этом разделе определены стили для компонента, включая стили для строки таблицы, текстовых данных и кнопок.

Скрипт Компонента
javascript
Copy code
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
В скрипте компонента определены необходимые зависимости, включая иконки для кнопок редактирования и удаления. Также определены методы для удаления студента с использованием библиотеки Axios.

Шаблон Компонента
html
Copy code
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
Шаблон компонента включает в себя HTML-разметку для отображения данных студента и кнопок для редактирования и удаления. Компонент RouterLink используется для навигации на страницу редактирования студента.

Стили Компонента
css
Copy code
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
В разделе стилей определены стили для компонента, включая цвет фона, тень, размеры шрифтов и распределение элементов. Стили применены с использованием scoped для ограничения их влияния только на текущий компонент StudentRow.


Документация для Компонента "AddLesson"
Введение
Компонент "AddLesson" предназначен для добавления нового урока в систему. Он обеспечивает интерфейс для ввода данных о новом уроке, таких как день недели, класс, учитель, предмет и номер урока.

Структура Компонента
Секция данных
Компонент содержит следующие поля данных:

classes: Список классов, полученный из API.
lessons: Список уроков, полученный из API.
subjects: Список предметов, полученный из API.
school_class: Выбранный класс для нового урока.
day_of_week: Выбранный день недели для нового урока.
subject: Выбранный предмет для нового урока.
teacher: Идентификатор учителя для нового урока.
lesson_number: Номер нового урока.
Методы
getClasses(): Получает список классов из API и обновляет поле classes.
getLessons(): Получает список уроков из API и обновляет поле lessons.
getSubjects(): Получает список предметов из API и обновляет поле subjects.
addLesson(): Отправляет запрос на сервер для добавления нового урока с введенными данными.
Жизненный цикл
mounted(): Вызывает методы getClasses(), getLessons(), и getSubjects() при создании компонента.
Импорты
javascript
Copy code
<script>
    import axios from 'axios';
</script>
Компонент использует библиотеку Axios для выполнения асинхронных HTTP-запросов.

Шаблон Компонента
html
Copy code
<template>
    <div class="studentContainer">
        <h2>Add new lesson</h2>
        <p class="title">Day of week</p>
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
Шаблон предоставляет поля ввода для каждого параметра нового урока и кнопку для добавления урока.

Стили Компонента
css
Copy code
<style scoped>
.studentContainer {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
}

.title {
  font-weight: bold;
  margin-top: 10px;
}

.inp, .select {
  margin-top: 5px;
  width: 100%;
  padding: 8px;
}

.btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>
Стили компонента определены с использованием scoped, чтобы ограничить их воздействие только на текущий компонент "AddLesson". Стили обеспечивают четкость и читаемость интерфейса.

Документация для Компонента Расписания (Shedule)
Введение
Компонент Shedule представляет собой страницу приложения для отображения расписания занятий. Он включает в себя методы для получения данных о классах, уроках и предметах с сервера, а также отображает полученные данные в удобной форме.

Скрипт Компонента
html
Copy code
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
Описание
data: Инициализация состояния компонента, включая массивы классов, уроков и предметов.

methods: Методы для получения данных с сервера по классам, урокам и предметам.

mounted: Вызов методов при монтировании компонента.

Шаблон Компонента
html
Copy code
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
Описание
Отображение расписания в виде таблицы, используя компонент Leson для каждого урока.

Добавление кнопки "Add new" для перехода на страницу добавления нового расписания.

Стили Компонента
css
Copy code
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
Описание
Стили для компонента, включая оформление таблицы с уроками и стили кнопки "Add new".


Документация Компонента "AddStudent"
Введение
Компонент AddStudent представляет собой форму для добавления нового студента. Форма включает в себя поля для ввода имени, фамилии и выбора класса студента.

Структура Компонента
Компонент состоит из трех разделов:

Скрипт Компонента: В этом разделе определены импорты, данные и методы, необходимые для работы компонента. Компонент использует библиотеки vue-router и axios для маршрутизации и отправки запросов на сервер.

Шаблон Компонента: В разделе шаблона описан интерфейс формы с полями для ввода имени, фамилии и выбора класса студента. Также включена кнопка для добавления студента.

Стили Компонента: Здесь определены стили для разметки формы. Компонент имеет отступы, границы, округлые углы и тень, чтобы обеспечить читаемость и привлекательность.

Импорты и Данные
javascript
Copy code
<script>
    import router from "@/router";
    import axios from "axios";

    export default {
        data() {
            return {
                todos: [], 
                fname: "",
                lname: "",
                class_: "",
                classes: [],
            };
        },
        // ...
    }
</script>
В этом разделе компонент импортирует необходимые библиотеки и определяет начальные данные для хранения имени, фамилии, класса и списка классов.

Методы
javascript
Copy code
<script>
    // ...
    methods: {
        async fetchStudents() {
            // Метод для отправки запроса на сервер и добавления нового студента
        },
        async getClasses() {
            // Метод для получения списка классов с сервера
        }
    },
    mounted() {
        this.getClasses()
    },
    // ...
</script>
В разделе методов определены два метода: fetchStudents для добавления студента и getClasses для получения списка классов с сервера. Метод getClasses вызывается при монтировании компонента.

Шаблон
html
Copy code
<template>
    <div class="studentContainer">
        <!-- Форма добавления студента -->
    </div>
</template>
Шаблон содержит разметку формы с полями ввода и кнопкой для добавления студента.

Стили
css
Copy code
<style>
    .studentContainer {
        /* Стили для формы и ее элементов */
    }

    .inp, .select {
        /* Стили для полей ввода и выпадающего списка */
    }

    .title {
        /* Стили для заголовков полей */
    }

    .btn {
        /* Стили для кнопки добавления студента */
    }

    .btn:hover {
        /* Стили при наведении на кнопку */
    } 

    .btn:active {
        /* Стили при активации кнопки (нажатии) */
    }
</style>
Раздел стилей содержит стили для формы, полей ввода, заголовков полей и кнопки. Они определены с использованием scoped, чтобы применяться только к текущему компоненту.


Документация для Компонента "StudentsEdit"
Введение
Компонент StudentsEdit представляет собой форму редактирования данных студента, включая его имя, фамилию и класс. Также отображается таблица с оценками студента по различным предметам.

Структура Компонента
Компонент состоит из следующих частей:

Скрипт (<script>): В этом разделе импортируются необходимые зависимости, такие как router и axios. Задаются переменные и методы, включая методы для получения данных о студенте, получения списка классов и отправки запроса на редактирование студента.

Шаблон (<template>): Здесь определен шаблон формы редактирования студента. Включает поля для ввода имени, фамилии, выбора класса, а также кнопку для сохранения изменений. Также отображается таблица с оценками студента по различным предметам.

Стили (<style>): Задаются стили для компонента, включая расположение элементов, стилизацию кнопок и таблицы.

Импорт в скрипте
javascript
Copy code
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
            // ... (методы опущены для краткости)
        },
        mounted() {
            this.fetchStudents()
            this.getClasses()
        },
    }
</script>
В этом разделе компонент импортирует необходимые библиотеки и определяет данные и методы.

Шаблон Компонента
html
Copy code
<template>
    <div class="container" >
        <div class="studentContainer">
            <!-- Форма редактирования студента -->
        </div>
        <div class="studentContainer">
            <!-- Таблица с оценками студента -->
        </div>
    </div>
</template>
Шаблон содержит разделы для формы редактирования студента и таблицы с оценками.

Стили Компонента
css
Copy code
<style>
    /* Стили для компонента StudentsEdit */

    .container {
        display: flex;
    }

    .studentContainer {
        // ... (стили опущены для краткости)
    }

    .inp, .select {
        // ... (стили опущены для краткости)
    }

    .title {
        // ... (стили опущены для краткости)
    }

    .btn {
        // ... (стили опущены для краткости)
    }

    /* Стили для таблицы */

    .tableRow {
        // ... (стили опущены для краткости)
    }

    .subj {
        // ... (стили опущены для краткости)
    }

    .mark {
        // ... (стили опущены для краткости)
    }

    .date {
        // ... (стили опущены для краткости)
    }

    .markbtn {
        // ... (стили опущены для краткости)
    }
</style>
В этом разделе определены стили для компонента, включая форму редактирования и таблицу с оценками. Стили применяются с использованием селекторов для управления внешним видом элементов.


# Документация для Компонента StudentsTable

## Введение

Компонент `StudentsTable` представляет собой страницу с таблицей студентов. Он использует другой компонент `Student` для отображения информации о каждом студенте.

## Секция `<script>`

```javascript
<script>
import { RouterLink } from "vue-router";
import Student from "../components/Student.vue";
import axios from "axios";

export default {
  data() {
    return {
      todos: [], // Массив данных (передается в компонент StudentList, получает данные средствами функции fetchStudents
    };
  },
  methods: {
    async fetchStudents() {
      try {
        const response = await axios.get('http://localhost:8000/api/students/'); // Выполнение GET-запроса к Backend-серверу. Запрос возвращает JSON.
        console.log(response.data);
        this.todos = response.data;
      } catch (e) {
        alert('Ошибка');
        console.log(e);
      }
    }
  },
  mounted() {
    this.fetchStudents(); // Vue вызывает хук mounted(), когда компонент добавляется в DOM. В данном примере это позволяет вызвать fetchStudents для получения списка студентов перед отрисовкой страницы в браузере, благодаря чему страница загружается с уже полученными данными.
  },
  components: { Student, RouterLink }
}
</script>
Описание секции <script>
data: Содержит массив todos, который используется для хранения данных о студентах.

methods: Включает метод fetchStudents, осуществляющий асинхронный запрос к API и обновление массива todos с полученными данными.

mounted: Вызывает метод fetchStudents при монтировании компонента.

components: Подключает компоненты Student и RouterLink.

Секция <template>
html
Copy code
<template>
  <main>
    <h2>Таблица студентов</h2>
    <div class="studentsTable">
      <Student class="title" :title="true" id="ID" first_name="Имя" last_name="Фамилия" school_class="Класс"/>
      <Student v-for="todo in todos" :title="false" :id="todo.id" :first_name="todo.first_name" :last_name="todo.last_name" :school_class="todo.school_class"/>
      <RouterLink to="/student_create">Создать нового</RouterLink>
    </div>
  </main>
</template>
Описание секции <template>
Student: Используется для отображения заголовка таблицы и данных о студентах.

v-for: Используется для создания элементов таблицы для каждого студента в массиве todos.

RouterLink: Предоставляет ссылку для перехода к странице создания нового студента.

Секция <style>
css
Copy code
<style scoped>
.studentsTable {
  margin: 20px 10px 0px;
}

.title {
  font-weight: 600;
}
</style>
Описание секции <style>
Устанавливает стили для блока таблицы студентов, включая отступы и жирный шрифт для заголовков.
Copy code
Данная документация предоставляет описание компонента StudentsTable на Vue.js, включая секции <script>, <template>, и <style>. Вся информация структурирована для легкого понимания и использования компонента в проекте. Пожалуйста, учтите, что документацию можно дополнить или изменить в соответствии с вашими предпочтениями и требованиями проекта.