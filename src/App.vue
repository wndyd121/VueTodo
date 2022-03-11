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
  data: function (){
    return {
      todoItems: []
    }
  },
  computed: {
    itemLength: function (){
      var itemLength = this.todoItems.filter( v => !v.completed ).length;
      return (itemLength == 0 ? 'no' : itemLength )+ ' item' + ( itemLength > 1 ? 's' : '') + ' left'
    }
  },
  methods:{
    addOneItem: function(todoItem){
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(todoItem, index){
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !todoItem.completed;
      // 로컬 히스토리에 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function(){
    if(localStorage.length > 0){
        for(var i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) != 'loglevel:webpack-dev-server'){
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    }
  },
  components:{
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
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