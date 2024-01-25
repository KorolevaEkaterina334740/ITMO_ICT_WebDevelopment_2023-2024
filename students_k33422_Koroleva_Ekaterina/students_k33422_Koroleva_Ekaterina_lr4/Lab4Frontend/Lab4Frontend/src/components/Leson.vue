<script>

    export default {
        props: {
            class_: {
                type: Boolean,
                required: true,
            },
            teacher: {
                type: String,
                required: true
            },
            subject: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            lessonsNum: {
                type: String,
                required: true
            },
        },
    }
</script>

<template>
    <div class="leson">
            <p class="class">{{ class_ }}</p>
            <p class="teacher">{{ teacher }}</p>
            <p class="subject">{{ subject }}</p>
            <p class="date">{{ date }}</p>
            <p class="lessonsNum">{{ lessonsNum }}</p>
        </div>
</template>

<style>
.leson {
    margin: 5px 50px;
    border: 2px solid rgb(41, 173, 56);
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.499);
    padding: 5px 30px;
}
</style>