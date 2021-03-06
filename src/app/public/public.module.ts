import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponentComponent } from './public-component.component';
import { LoginComponentComponent } from './login/login-component.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PublicComponentComponent,
    LoginComponentComponent,

  ],
  imports: [
    CommonModule, MatInputModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatCardModule
  ]
})
export class PublicModule { }
