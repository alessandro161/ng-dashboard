import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }
  var utente={
    username:"jdoe",
    password:"password",
  }/*
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
});*/