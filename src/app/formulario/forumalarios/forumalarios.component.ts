import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forumalarios',
  standalone: true,
  imports: [
  FormsModule,CommonModule
],
  templateUrl: './forumalarios.component.html',
  styleUrls: ['./forumalarios.component.css']
})
export class ForumalariosComponent{
 numero:string='';
 esCapicua:boolean=false;
 mensaje: string ='';
 nombre: string='Víctor';

 validateNumber(): void {
  if (this.numero.length >= 2 && this.numero === this.numero.split('').reverse().join('')) {
    this.mensaje = 'El número ingresado es capicua';
  } else {
    this.mensaje = '';
  }
}
}