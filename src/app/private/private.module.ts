import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users/users-list.component';
import { PrivateComponentComponent } from './private-component.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { PrivateRoutingModule } from './private-routing.module';
@NgModule({
  declarations: [
    UsersListComponent,
    PrivateComponentComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    PrivateRoutingModule,
  ]
})
export class PrivateModule { }
