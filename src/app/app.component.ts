import { Component } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TareasService]
})
export class AppComponent {
  title = 'app works!';
}
