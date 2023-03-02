<template>
    <div class="todo-list">
        <!-- <ToDoItem v-for="item in ['alalalalala', 'hola', 'hi']" :key="item" :text="item"/> -->
        <ToDoItem v-for="todo in todos" 
        :key="todo._id"
        :title="todo['title']"
        :description="todo['description']" />
        
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'
//import { arrayBuffer } from 'stream/consumers'

export default {
    components: {
        ToDoItem
    },
    props: {
        todos: {
          required: true,
        type: Array  
        }
        
    }
}

</script>

<style scoped>

.todo-list {
    flex: 1;
}

</style>

