<template>
    <div class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">
                {{ title }}
            </div>
            <div class="todo-item-content-description">
                {{ description }}
            </div>
        </div>
        <button  @click="editTodo" class="app-button is-warning">Edit</button>
        <button @click="deleteTodo" class="app-button is-danger">Delete</button>
    </div>
</template>

<script>

export default {
       // props: ['title', 'description']
    props: {
        title: {
            type: String,
            //required: true,
            //default: 'Default Title'
        },
        description: {
            type: String,
            //required: false
        }
    },
    Methods: {
        editTodo() {
            
        },
        deleteTodo() {
            
        }
    }
}

</script>

<style scoped lang="scss">

.app-button {
    font-size: 15px;
    &.is-warning {
        margin-right: 5px;
    }
}

.todo {
    &-item {
        background-color: gray;
        min-height: 70px;
        margin: 10px;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-size: 23 px;
        &-content {
            margin-bottom: 10px;
            &-title {
                font-weight: bold;
            }

            &-description {
                font-size: 19px;
            }
        }
    }
}

</style>