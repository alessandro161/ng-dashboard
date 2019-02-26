import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  carica2(){
    var params={} ;
    params["token"]="LSEZOPB6TVRGW2Z3R3ZC";
    params["location.address"]="Rome";
    $.ajax({
      url:"https://www.eventbriteapi.com/v3/events/search/",
      data: params,
      success: function(data){console.log(data);
      for (var i = 0; i < data.events.length; i++) {
        $("#table2").append("<tr> <td>"+(data.events[i].name.html)+"</td>"+"<td>"+(data.events[i].start.local)+"</td>" );
        
      }},
      error: function(xhr){console.log(xhr);}
  
    });
  
   }
carica(){
  $.ajax({
    type:'GET',
    url:"https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=dcbe67b159424c85be9e1745d5c5fdcb",
    data:'html',
    success: function(result){
       for(var i=0;i<result.totalResults;i++){
         $("#table1").append("<tr> <td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].source.name)+"</td>");
       }
    },
    error: function(xhr){
    console.log("error")
    }
   });
   };

 redirect(router:Router){
  this.router.navigateByUrl("home");
}
}


  //params(token): token personale;
  //params(location):room;
