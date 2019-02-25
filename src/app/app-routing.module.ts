import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatianaComponent } from './datiana/datiana.component';

const routes: Routes = [
    { path:"datiana",component: DatianaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
