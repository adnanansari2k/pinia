<script setup>
  import {defineProps,ref} from 'vue'
  import {useTaskStore} from '../stores/TaskStore.js'
  const tasksStore = useTaskStore()
  const transections = tasksStore
  const titles = ref('all')
</script>
<template>
  <div class="transectionBox">
    <button @click="titles = 'all'" class="btn">all</button>
        <button @click="titles='favs'" class="btn">fav</button>
    <h2>Transections</h2>
    
    <ul v-show="titles === 'all'">
      <p>all tasks</p>
       <li v-for="(transection) of transections.tasks" class="plus">
        <span class="transectionName">{{transection.name}}</span>
        <span>{{transection.amount}}₹</span>
        <button @click="transections.deleteTrans(transection.id)" class="deleteBtn btn">X</button>
        <button @click = "transections.favToggle(transection.id)" class="favBtn btn">fav</button>
        </li>
    </ul>
    
    <ul v-show="titles === 'favs'">
      <p>favorites</p>
       <li v-for="(transection) of transections.favs" class="plus">
        <span class="transectionName">{{transection.name}}</span>
        <span>{{transection.amount}}₹</span>
        <button @click="transections.deleteTrans(transection.id)"  class="deleteBtn btn">X</button>
        <button @click = "transections.favToggle(transection.id)" class="favBtn btn">fav</button>
        </li>
    </ul>
  </div>
</template>
<style scoped>
  h2{
  
  }
  .transectionBox{
    width:90vw;
    height:100%;
    margin-top:10px;
    margin-left:5vw;
  }
  ul{
  margin-top:20px
  }
  li{
    width:90%;
    height:50px;
    margin:5% 5%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background:#d7e7ee
  }
  button{
    width:25px;
    height:25px;
    border-radius:5px;
    background:red;
  }
  
.favBtn{
background:#f6678bfd
}
  
</style>