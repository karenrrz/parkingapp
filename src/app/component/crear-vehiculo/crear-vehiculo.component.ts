import { Component } from '@angular/core';

import {crearModel} from "../../domain/crear-vehiculo/crearVehiculo.model";
import { crearVehiculo} from "../../domain/crear-vehiculo/crearVehiculo.service";

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.scss']
})
export class CrearVehiculoComponent {

  listCrear :crearModel []=[];




  constructor(private crearService: crearVehiculo) {
  }

  ngOnInit(): void {
    this.crearService.getAllCrear().subscribe(data => {
      this.listCrear = data;
      console.log(data);
    });


    {



    }

  }}
