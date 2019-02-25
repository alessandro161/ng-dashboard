import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-datiana',
  templateUrl: './datiana.component.html',
  styleUrls: ['./datiana.component.css']
})
export class DatianaComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(){
    this.router.navigate(["eventi"]);
  }
}
