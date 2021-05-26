<template>
  <div class="wrapper" @keyup.enter="onSubmitClicked">
    <input type="text" v-model="title" />
    <button @click="onSubmitClicked">Создать Todo</button>
    <button @click="onDeleteClicked">Удалить список</button>
  </div>
</template>

<script>
import {createTodo} from '@/service/dataService';
import {deleteAllTodo} from '@/service/dataService';


export default {
  name: "CreateTodo",
  data: () => ({
    title: '',
  }),
  methods: {
    async onSubmitClicked() {
      if (this.title !== '') {
        const createdTodo = await createTodo({
          title: this.title
        })
        this.$emit('create-todo', createdTodo);
        this.title = '';
      }
    },

    async onDeleteClicked() {
      const deleteTodo = await deleteAllTodo()
      this.$emit('refresh')
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: center;
  input {
    width: 150px;
  }
  button {
    padding: 8px 22px;
    font-size: 14px;
    border-radius: 12px;
    border: 0;
    outline: none;
    white-space: nowrap;
    background: #ff9d0a;
    color: white;
    cursor: pointer;
    margin-left: 20px;
  }
}
</style>


