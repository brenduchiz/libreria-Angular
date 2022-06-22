import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from 'src/app/Interfaces/roles';
import { RolesService } from 'src/app/services/roles/roles.service';
import { UsersService } from 'src/app/services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  public roles: Roles[] | undefined;
  public loading: boolean = false;

  public addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    secondLastName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    roleId: new FormControl('', [Validators.required])
  })
  constructor(private userServives: UsersService, private rolesServices: RolesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addRoles()
    console.log(this.addForm)
  }

  async addUser() {
    this.loading = true
    if (!this.addForm.value) return;
    const res = await this.userServives.postRegister(this.addForm.value)
    console.log(res)
    this.snackBar.open(res.message, '', {

      duration: 3000,
      panelClass: ['green-snack-bar'],
      verticalPosition: 'top',

    });
    this.loading = false
    this.router.navigate(['/app'])

  }

  async addRoles() {
    const res = await this.rolesServices.getRoles()
    this.roles = res.data
  }
}
