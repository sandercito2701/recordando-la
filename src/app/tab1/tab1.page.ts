import { Component, Injectable } from '@angular/core';
// importamos la libreria de firebase database
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	// fedinimos las variables con su tipo de datos 
	
	mensaje : string = '';
	listado : any = [];

	//agregamos a nuestro codigo la libreria importar

	constructor(
   		public afDB: AngularFireDatabase
 	){}

 	// creamos una funcion que enviara los datos a firebase

	guardar() {
		this.listado.push(this.mensaje);
		this.mensaje = "";
	}

}
