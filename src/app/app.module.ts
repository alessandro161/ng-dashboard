import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { DatianaComponent } from './datiana/datiana.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EventiComponent } from './eventi/eventi.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormComponent,
    LoginComponent,
    DatianaComponent,
    HomeComponent,
    EventiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,    
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
  ],
  exports: [
    BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
