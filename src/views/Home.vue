<template>
  <div class="home-page">
    <div>
      <CreateTodo @create-todo="onSubmitClicked" />
    </div>
    <div v-if="loading">Loading...</div>
    <TodoList
      v-else-if="todos && todos.length"
      :todos="todos"
      @remove-todo="onRemoveClicked"
    />
    <div v-else>List is empty(</div>
  </div>
</template>

<script>
import TodoList from "@/components/Todolist";
import CreateTodo from "@/components/CreateTodo";

export default {
  name: "Home",
  components: {
    TodoList,
    CreateTodo,
  },
  data: () => ({
    todos: [],
    loading: false,
  }),
  mounted() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        this.loading = true;
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        this.todos = await response.json();
      } catch (error) {

      } finally {
        this.loading = false;
      }
    },
    onRemoveClicked(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    onSubmitClicked(title) {
      if(!title) return;
      let todo = {
        id: Date.now(),
        completed: false,
        title,
        userId: 1, 
      };
      this.todos.push(todo);
    },
  },
};
</script>
