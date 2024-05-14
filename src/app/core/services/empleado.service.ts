import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../../interfaces/empleado';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = environment.apiUrlBase + 'employee'

  constructor(
    private http : HttpClient
  ) { }

  // getEmpleadosList() : Observable <Empleado>{
  //   return this.http.get<Empleado>(`${environment.apiUrlBase}employee?limit=10&offset=0`)
  // }
  getAllEmpleados() : Observable <Empleado>{
    return this.http.get<Empleado>(this.url);
  }
}
