import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users/users-list.component';
import { PrivateComponentComponent } from './private-component.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { PrivateRoutingModule } from './private-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { UserAddComponent } from './users/user-add/user-add.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { UserPasswordComponent } from './users/user-password/user-password.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';






@NgModule({
  declarations: [
    UsersListComponent,
    PrivateComponentComponent,
    UserDetailComponent,
    UserAddComponent,
    UserPasswordComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    PrivateRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule


  ]
})
export class PrivateModule { }
