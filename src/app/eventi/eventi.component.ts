import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


carica(){
  $.ajax({
   type:'GET',
   url:"https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=dcbe67b159424c85be9e1745d5c5fdcb",
   data:'html',
   success: function(result){
      for(var i=0;i<result.totalResults;i++){
        $("table").append("<tr> <td>"+(result.articles[i].author)+"</td>"+"<td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].description)+"</td>");
      }
   },
   error: function(xhr){
   console.log("error")
   }
  });
  };
}