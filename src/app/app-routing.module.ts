import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatianaComponent } from './datiana/datiana.component';
import { HomeComponent } from './home/home.component';
import { EventiComponent } from './eventi/eventi.component';

const routes: Routes = [
    { path:"datiana",component: DatianaComponent},
    { path:"home",component: HomeComponent},
    { path:"eventi",component: EventiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
