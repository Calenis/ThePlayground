<template>
    <!-- <v-card>
        <nuxt-link to="/products">
            products
        </nuxt-link>
    </v-card> -->
<div id="app">
    <div class="todo-wrapper">
        <div class ="todo-container">
            <ToDoList :todos="todos"/>
            <div class="todo-create-btn-container">
                    <todo-create @formSubmitted="createTodo"/>
            </div>
        </div>
    </div>   
</div>
</template>

<script setup>
    definePageMeta({layout: 'app-header'})
</script>


 
<script>
import ToDoList from '@/components/ToDoList.vue';
import TodoCreate from '@/components/TodoCreate.vue';

export default {
    name: "app",
    components: { ToDoList, TodoCreate },
    
    data() {
        return {
            isModalOpen: false,
            todos: [
                {
                    _id: "1",
                    title: "walk the dog",
                    description: "go to the forest near the zoo"
                },
                {
                    _id: "2",
                    title: "buy some bread",
                    description: "white bread should be ok"
                },
                {
                    _id: "3",
                    title: "Learn Programming",
                    description: "Today is bestest!"
                },
            ]
        }
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo)
        }
    }
}
</script>

<style lang="scss">

$color-red: red;
$createButton: #036c5f;

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.app-error {
    color: #ff1212;
}

.app-form {
    .label {
        display: block;
        font-size: 18px;
        font-weight: bold;
        /* text-align: left !important; */
    }
    .form-input {
     /*    border: blue; */
        padding: 10px;
        font-size: 17px;
        /* border-width: 20px !important; */
        border: 1px solid #888;
        border-radius: 10px;
    }
    .form-control {
        margin-bottom: 10px;
        /* border-color: black; */
       /*  text-align: left !important; */
    }
}

.is-primary {
    background-color: green !important;
}

.is-warning {
    background-color: #ffa753 !important;
}

.is-danger {
    background-color: #ff5a5a !important;
}

.app-button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: $createButton;
    color: white;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
}

.todo {
    &-wrapper {
        /* flexible styling */
        display: flex;
        /* it defines alignment along the main axis */
        justify-content: center;
        /* flex-direction: column; */
        width: 100%;
        /* height: 1000px; */
    }

    &-create-btn-container {
        margin: 10px;
    }

    &-container {
        display: flex;
        flex-direction: column;
        /* margin: 0 auto; */
        width: 400px;
        min-height: 400px;
        background-color: #ededed;
        border-radius: 5px;
    }
}

</style>