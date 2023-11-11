import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {crearModel} from "./crearVehiculo.model";

@Injectable({providedIn:'root'})
export class crearVehiculo{

  apiUserUrl = 'http://localhost:8081/crear-vehiculo'

  constructor(private httpClient: HttpClient) {
  }

  getAllCrear(): Observable<crearModel[]>{
    return this.httpClient.get<crearModel[]>(this.apiUserUrl)
  }
}
