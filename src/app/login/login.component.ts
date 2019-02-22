import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
var utente={
  username:"jdoe",
  password:"password",
}
$(function(){
  $("#bottone").click(function(){
        var username=$("#usern").val();
        var password=$("#passw").val();
        if (username==utente.username && password==utente.password)
        {
          window.location.href="datiana.html";
        }
        else
        {
          alert("Password o User errati");
        }
  });
});
