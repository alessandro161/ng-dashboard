import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDatepickerInput } from '@angular/material';
import * as $ from 'jquery';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit { 
  mioForm: FormGroup;
  constructor ( ) {
      this.mioForm = new FormGroup ( {
                    nome : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ) ,
                    cognome : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ) ,
                    domicilio : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ) ,
                    residenza : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ) ,
                    telefono : new FormControl ('' , [ Validators.required, Validators.minLength(5)] ),
                    email : new FormControl ('' , [ Validators.required, Validators.email])
                  });
      }

  ngOnInit() {
  }
getInfo(){
  console.log(this.mioForm.value);
}
get nome(){return this.mioForm.get('nome')}
get cognome(){return this.mioForm.get('cognome')}
get domicilio(){return this.mioForm.get('domicilio')}
get residenza(){return this.mioForm.get('residenza')}
get telefono(){return this.mioForm.get('telefono')}
get email(){return this.mioForm.get('email')}
get data(){return this.mioForm.get('data')}

registrati(){
        var nome=$("#inputnome").val();
        var cognome=$("#inputcognome").val();
        var domicilio=$("#inputdomicilio").val();
        var residenza=$("#inputresidenza").val();
        var telefono=$("#inputtelefono").val();
        var email=$("#inputemail").val();
        var data=$("#inputdata").val();
        if (nome!=" " && cognome!=" " && domicilio!=" "  && residenza!=" "  && telefono!=" "  && email!=" " && data!=" ")
        {
          alert("Registrazione completata correttamente");
        }
        else
        {
          alert("Registrazione non completata");
        }
  }
}



