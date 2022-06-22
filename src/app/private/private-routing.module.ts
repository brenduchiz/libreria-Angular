import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserPasswordComponent } from './users/user-password/user-password.component';
import { UsersListComponent } from './users/users-list.component';

const routes: Routes = [{
    path: '',
    component: UsersListComponent,
},
{
    path: 'user-detail',
    component: UserDetailComponent,
},
{
    path: 'user-add',
    component: UserAddComponent,
},
{
    path: 'user-change/:idCharacter',
    component: UserPasswordComponent,
},
{
    path: 'user-edit/:idCharacter',
    component: UserEditComponent,
}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
