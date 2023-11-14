import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "./vehiculo.model";

@Injectable({providedIn:'root'})

export class vehiculo{

  apiUserUrl = 'http://localhos:8080/parkinglot'

  constructor(private httpClient: HttpClient) {
  }

  getAllVehiculo(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.apiUserUrl)
  }
}
