import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  taskArray = [{taskName: 'Brush teeth', isCompleted: false}];

  onSubmit(form: NgForm){

    
    if (form.valid) {
      this.taskArray.push({ taskName: form.value.task, isCompleted: false });
      form.reset();
    }
  }

  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
  }

}
