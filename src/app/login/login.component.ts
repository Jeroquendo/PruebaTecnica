import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { User} from '../models/user';
import { ValidacionService} from '../service/validacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ValidacionService]
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  user: User;

  constructor( private fb: FormBuilder,private route: Router, private _validacion: ValidacionService) {
    this.user = new User('','')
   }

  ngOnInit(): void {}

  goToNomina(){
    localStorage.setItem("email",this.user.email);
    this.route.navigate(['nomina']);
   }
   onSubmit(form){

     this._validacion.enviarDatos(this.user).subscribe(
       response =>{
         if(response.valid){
           this.goToNomina();
         }
         alert(response.message);
       },
       error => {
         console.log(<any>error);
       }
     );
   }

}
