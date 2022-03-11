<template>
  <div id="app">
    <TodoHeader v-bind:propsdata="itemLength"></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data () {
    return {
      todoItems: []
    }
  },
  computed: {
    itemLength () {
      let itemLength = this.todoItems.filter( v => !v.completed ).length;
      return (itemLength == 0 ? 'no' : itemLength )+ ' item' + ( itemLength > 1 ? 's' : '') + ' left'
    }
  },
  methods:{
    addOneItem (todoItem) {
      let obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem (todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !todoItem.completed;
      // 로컬 히스토리에 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems () {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components:{
    // 'TodoHeader': TodoHeader,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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