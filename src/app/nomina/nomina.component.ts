import { Component, OnInit } from '@angular/core';
import { ValidacionService} from '../service/validacion.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css'],
  providers: [ValidacionService]
})
export class NominaComponent implements OnInit {

  correo: string;
  myForm: FormGroup;
  numeroColumnas: number;
  numeroHoras: number;
  salario = this.numeroAleatorio(1000000,2000000);
  sumaHoras = 0;
  numbers = [];
  arrayHoras = [];
  totalHoras: any;
  isMouseOver = false;
  constructor(private _validacaion: ValidacionService) {}

  ngOnInit(): void {
    this.crearColumnas();
    this.obtenerSueldo();
    this.mostrarUsuario();
  }

  crearColumnas(){
    const fecha = new Date();
    const dia = fecha.getDate();
    this.numeroColumnas = (30-dia+1);
    this.numbers =  Array(this.numeroColumnas).fill(0).map((x,i)=>i+dia);
    this.numeroHoras = this.numeroAleatorio(1,10);
    this.arrayHoras = Array(this.numeroColumnas).fill(0).map((x=>this.numeroAleatorio(1,10)));

  }

  obtenerSueldo(){
    for (let i= 0; i<this.arrayHoras.length; i++){
      this.sumaHoras += this.arrayHoras[i];
    }

    this.totalHoras = this.sumaHoras*this.salario;

  }

  numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  mostarSalario(){
    this.isMouseOver = !this.isMouseOver ;
  }

  mostrarUsuario(){
    console.log(localStorage.getItem("email"))
    this.correo = localStorage.getItem("email");
  }

}

