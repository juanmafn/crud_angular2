import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {  Tarea } from './tarea';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TareasService {

  private urlBase = "http://localhost:3000";
  private getTareasUrl = this.urlBase+"/tareas";
  private postTareasUrl = this.urlBase+"/tareas";
  private putTareasUrl = this.urlBase+"/tareas/:id";
  private deleteTareasUrl = this.urlBase+"/tareas/:id";

  constructor(private http:Http) {
    console.log("TareasService Initialized...");
  }

  getTareas() {

    console.log("Llamamos a la url: " + this.getTareasUrl);

    /*this.http.get("http://localhost:3000/tareas").subscribe(
      response => {
        console.log("Correcto");
        let data = response.json();
        console.log(data);
        let tareas:Tarea[] = [];
        for (var tarea:Tarea in tareas) {
          tareas.push(tarea);
        }

        return tareas;
      },
      error => {
        console.error(error);
      }
    );*/

    return this.http.get(this.getTareasUrl)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  addTarea(tarea:Tarea) {
    return this.http.post(this.postTareasUrl, tarea)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  editTarea(tarea:Tarea) {
    return this.http.put(this.postTareasUrl+'/'+tarea._id, tarea)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  deleteTarea(id:String) {
    return this.http.delete(this.postTareasUrl+'/'+id)
      .map(response => {})
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}
