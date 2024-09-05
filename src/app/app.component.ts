import { Component, OnInit } from '@angular/core';
import { Itask } from './models/Itask';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tp01';
  i:number=1
  tasks:Itask[]=[{id:this.i++,description:"tp1",completed:false},
  {id:this.i++,description:"tp2",completed:false},
  {id:this.i++,description:"tp3",completed:true},
  {id:this.i++,description:"tp4",completed:false},
  {id:this.i++,description:"tp5",completed:false},
    
  ]
  ngOnInit(): void {
    this.addDate()
  }
  uncompleted(t:Itask){
    t.completed=true
  }
  
  addDate(){
  this.tasks.forEach(task=>{
    if(task.dateAjoutee==null){
     task.dateAjoutee=new Date();
    }
  })
}
  newTaskDescription:String=''
  addtask(){
    this.tasks.push({id:this.i++,description:this.newTaskDescription,dateAjoutee:new Date(),completed:false})
    this.newTaskDescription=''
  }

  editTask:boolean=false
  editingTask:Itask={
    id:0,
    description:"",
    completed:false
  }
 

  edit(task:Itask){
    this.editingTask=task
    this.newTaskDescription=task.description
    this.editTask=true
  }
  update(){
    if(this.editingTask){
      const taskToUpdate = this.tasks.find(t => t.id === this.editingTask.id);
      if (taskToUpdate) {
        taskToUpdate.description = this.newTaskDescription;
        //  reset the form and editing state
        this.editTask = false;
        this.editingTask ={
          id:0,
          description:"",
          completed:false
        };
        this.newTaskDescription = '';
      }
    }
    }
  delete(t:Itask){
    const index=this.tasks.indexOf(t)
      if(index != -1){
        this.tasks.splice(index,1)
      }
  }
  }
 
  


