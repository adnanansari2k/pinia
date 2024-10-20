<script setup>
  import {defineProps} from 'vue'
  const props = defineProps({
  total:{},
  expenses:{},
  income:{}})
</script>

<template>
 <div class="balanceBox">
   <div class="balance">
     <h5>Total Balance</h5>
     <h2>{{total}}₹</h2>
   </div>
   <div class="incomeExpBox">
     <div class="incomeBox">
       <h6>Income</h6>
      <h1>{{income}}₹</h1>
     </div>
      <div class="expenseBox">
       <h6>Expenses</h6>
       <h1>{{expenses}}₹</h1>
     </div>
   </div>
 </div>
</template>

<style scoped>
.balanceBox{
  display:flex;
  flex-direction:column;
  width:90vw;
  height:200px;
  border-radius:10px;
  background-image:linear-gradient(to bottom right,#0fa1b7,#f6678bfd);
  margin-left:5vw;
  margin-top:2vh;
  color:#f5edef
}
.balance{
  width:90%;
  height:70%;
  margin-left:5%;
  text-align:center;
  padding-top:10%
}
h2{
  font-size:40px
}
h6{
font-size:12px;
}
h1{
font-size:18px;
margin-top:5px;
}
.incomeExpBox{
  width:90%;
  height:70%;
  margin-left:5%;
  margin-top:10%;
  display:flex;
  justify-content:space-around;
}

</style>
