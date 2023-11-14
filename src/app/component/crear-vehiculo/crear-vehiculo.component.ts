import { Component } from '@angular/core';

import {crearModel} from "../../domain/crear-vehiculo/crearVehiculo.model";
import { crearVehiculo} from "../../domain/crear-vehiculo/crearVehiculo.service";
import {UserModel} from "../../domain/vehiculo-in/vehiculo.model";
import {vehiculo} from "../../domain/vehiculo-in/vehiculo.service";

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss']
})
export class CrearVehiculoComponent {

  listUser :UserModel []=[];

  constructor(private userService: crearVehiculo) {
  }

  ngOnInit(): void {
    this.userService.getAllCrear().subscribe(data => {
      this.listUser =data;
      console.log(data);
    });
  }


  }
