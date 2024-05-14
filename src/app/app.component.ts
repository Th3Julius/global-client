import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleado } from './interfaces/empleado';
import { EMPTY, Observable, catchError } from 'rxjs';
import { EmpleadoService } from './core/services/empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GLOBAL-F';

  empleados : any[] = [];

  constructor(
    private service : EmpleadoService,
  ){}

  ngOnInit(){
    this.service.getAllEmpleados().subscribe((data:any)=>{
      this.empleados = data
    })
  }
}
