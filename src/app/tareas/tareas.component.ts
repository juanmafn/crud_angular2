import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import {  Tarea } from '../tarea';
import {Http} from '@angular/http'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  nuevo;
  tareas:Tarea[] = [];

  constructor(private _tareasService: TareasService) { }

  ngOnInit() {
    this.nuevo = "";

    //this.tareas = this._tareasService.getTareas().subscribe();
    this._tareasService.getTareas().subscribe(
      tareas => this.tareas = tareas
    );
    //var tar = this._tareasService.getTareas();
    //console.log(JSON.stringify(tar));
  }

  addTarea():void {
    /*this.tareas.push({
      _id: "asd",
      tarea: this.nuevo
    });*/
    let tarea:Tarea = {tarea: this.nuevo, _id:''};
    this.nuevo = "";
    this._tareasService.addTarea(tarea).subscribe(
      tarea => this.tareas.push(tarea.result)
    );
  }

  editTarea(tarea:Tarea, list):void {
    for (var i = 0; i < this.tareas.length; ++i) {
      if (this.tareas[i]._id == tarea._id) {
        let editTarea:Tarea = {_id: tarea._id, tarea: list.children[i].children[0].value}
        console.log("id: " + tarea._id + ", Modificamos: " + editTarea.tarea);
        this._tareasService.editTarea(editTarea).subscribe(
          tarea =>this.tareas[i] = tarea
        );
        break;
      }
    }
  }

  deleteTarea(id:string):void {
    console.log("Borramos" + id);
    for (var i = 0; i < this.tareas.length; ++i) {
      if (this.tareas[i]._id == id) {
        this._tareasService.deleteTarea(id).subscribe(
          ok => this.tareas.splice(i, 1)
        );
        break;
      }
    }
  }

}
