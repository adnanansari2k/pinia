<script setup>
import Balance from './components/Balance.vue'
import TransectionList from './components/TransectionList.vue'
import AddTransection from './components/AddTransection.vue'
import {ref,computed} from 'vue'
import {useTaskStore} from './stores/TaskStore.js'
const tasks = useTaskStore()
const transections = tasks.tasks
//total
const total = computed(()=>{
return transections.reduce((acc,trans)=>{
return acc + trans.amount},0).toFixed(2)
})
//expenses
const expenses = computed(()=>{
return transections.filter((trans)=> trans.amount < 0).reduce((acc,trans)=>{
return acc + trans.amount},0).toFixed(2)
})
//income
const income = computed(()=>{
return transections.filter((trans)=> trans.amount > 0).reduce((acc,trans)=>{
return acc + trans.amount},0).toFixed(2)
})
//TransectionHandler
const transectionHandler = (transectionData) =>{
transections.push({id:genrateId(),name:transectionData.name,amount:+transectionData.amount})
}
const genrateId =()=>{
return Math.floor(Math.random()*100000)
}
 
</script>

<template>
  <Balance :total="total" :expenses = "expenses" :income="income"/>
  <TransectionList />
  <AddTransection @transectionSubmitted= "transectionHandler" />
</template>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body{
background:#e9ebec
}
</style>
