<template>
    <div>
        <CInput type="text" v-model="newTask" placeholder=""></CInput>
        <CButtonExmple @click="addTask" buttonText="Добавить" buttonClass="primary-button"></CButtonExmple>
        <div id="tasks">
            <div class="task" v-for="(task, index) in tasks" :key="index">
                <span :class="{ done: task.completed }" @click="toggleTask(index)">{{ task.name }}</span>
                <DBUtton class="delete" @click="deleteTask(index)"><img src="../assets/img/close.png"></DBUtton>
            </div>
        </div>
    </div>
</template>
  
<script>
import CButtonExmple from './shared/CButtonExmple.vue';
import CInput from './shared/CInput.vue';
import DBUtton from './shared/DBUtton.vue';

export default {
    data() {
        return {
            newTask: '',
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.length === 0) {
                alert("Пожалуйста, введите название");
            }
            else {
                this.tasks.push({ name: this.newTask, completed: false });
                this.newTask = "";
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },
    },
    components: { CInput, DBUtton, CButtonExmple }
};
</script>
  
<style>

</style>
  