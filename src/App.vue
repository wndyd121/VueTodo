<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
    <Modal></Modal>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import Modal from './components/common/modal.vue'

export default {
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    Modal
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.15);
}
</style>