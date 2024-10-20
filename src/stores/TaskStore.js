import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskstore',{
  state:()=>({
    tasks:[{id:1,name:"bhatta",amount:10000,isFav:false},{id:2,name:"cigerates",amount: -100,isFav:true}]
  }),
  getters:{
    favs(){
    return this.tasks.filter(task=>task.isFav)
  }},
  actions:{
  addTransection(task){
    this.tasks.push(task)
  },
  deleteTrans(id){
    console.log(this.tasks)
    this.tasks = this.tasks.filter(t=>t.id != id)
  },
  favToggle(id){
    console.log(this.tasks)
    const task = this.tasks.find(t=>t.id === id)
    console.log(task)
    task.isFav = !task.isFav
  }
  }
})