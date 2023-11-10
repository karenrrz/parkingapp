import { Component } from '@angular/core';
import {UserModel} from "../../domain/vehiculo-in/vehiculo.model";
import {vehiculo} from "../../domain/vehiculo-in/vehiculo.service";


@Component({
  selector: 'app-vehiculo-in',
  templateUrl: './vehiculo-in.component.html',
  styleUrls: ['./vehiculo-in.component.scss']
})
export class VehiculoInComponent {


  listUser :UserModel []=[];

  constructor(private userService: vehiculo) {
  }

  ngOnInit(): void {
    this.userService.getAllVehiculo().subscribe(data => {
      this.listUser =data;
      console.log(data);
    });
  }

}
