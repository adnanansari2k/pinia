<script setup>
  import {ref} from "vue"
  import {useTaskStore} from '../stores/TaskStore.js'
  const tasksStore = useTaskStore()
  const name = ref("")
  const amount = ref("")
  
  const emit = defineEmits(["transectionSubmitted"])
  
  const addTransection=()=>{
   if(!name.value || !amount.value){
   return
   }
    const transectionData = {
    name:name.value,
    amount:+amount.value,
    isFav:false
    }
    tasksStore.addTransection(transectionData)
    name.value = amount.value = ""
  }
  
</script>
<template>
  <div class="addTransectionBox">
    <h2>Add Transections</h2>
    <input v-model= "name" placeholder="transection name" />
    <input v-model="amount" placeholder="transection amount" />
    <button @click="addTransection">Add Transection</button>
  </div>
</template>
<style scoped>
  .addTransectionBox{
    width:90vw;
    height:100%;
    margin-top:10px;
    margin-left:5vw;
  }
  input, button{
    width:100%;
    height:30px;
    border:0;
    margin-top:10px;
    transition:all 0.5s ease-in-out;
    text-align:center;
  }
  button:hover {
  background:#fab5b5
  }
</style>