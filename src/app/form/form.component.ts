import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDatepickerInput } from '@angular/material';
import * as $ from 'jquery';
import { Router} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit { 
  mioForm: FormGroup;

  constructor(private router: Router) { 
      this.mioForm = new FormGroup ( {
                    nome : new FormControl ('' , [ Validators.required] ) ,
                    cognome : new FormControl ('' , [ Validators.required] ) ,
                    telefono : new FormControl ('' , [ Validators.required] ),
                    email : new FormControl ('' , [ Validators.required,Validators.email])
                  });
      }

  ngOnInit() {
  }
getInfo(){
  console.log(this.mioForm.value);
}
get nome(){return this.mioForm.get('nome')}
get cognome(){return this.mioForm.get('cognome')}
get telefono(){return this.mioForm.get('telefono')}
get email(){return this.mioForm.get('email')}
get data(){return this.mioForm.get('data')}

registrati(){
        var nome=$("#inputnome").val();
        var cognome=$("#inputcognome").val();
        var telefono=$("#inputtelefono").val();
        var email=$("#inputemail").val();
        var data=$("#inputdata").val();
        if (nome!="" && cognome!="" && telefono!=""  && email!="" && data!="")
        {
          alert("Registrazione completata correttamente");
          this.router.navigate(["datiana"]);
        }
        else
        {
          alert("Registrazione non completata");
        }
  }
}



