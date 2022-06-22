import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RolesService } from 'src/app/services/roles/roles.service';
import { Roles } from 'src/app/Interfaces/roles';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public roles: Roles[] | undefined;
  public id: any;
  user: any;
  public userRole: any;

  public dataEdit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    secondLastName: new FormControl('', [Validators.required])
  })

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router, private rolesService: RolesService, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('idCharacter');
    this.users()
    this.addRoles()
  }

  get nameUser() {
    return this.dataEdit.get('name')
  }
  get lasNameUser() {
    return this.dataEdit.get('lastName')
  }
  get secondNameUser() {
    return this.dataEdit.get('secondLastName')
  }
  /*  get roleIdUser() {
     this.stringRole()
     return this.dataEdit.get('roleId')
 
   } */


  preLoadData() {
    this.nameUser?.setValue(this.user.name)
    this.lasNameUser?.setValue(this.user.lastName)
    this.secondNameUser?.setValue(this.user.secondLastName)
    /*  this.roleIdUser?.setValue(this.userRole) */
  }



  users() {
    this.userService.getUser(this.id)
      .subscribe(user => {

        this.user = user.data[0]
        this.preLoadData()
        if (this.user.roleId === 1) {
          return this.userRole = 'admin'
        } else {
          return this.userRole = 'viewer'
        }

      });
  }

  async addRoles() {
    const res = await this.rolesService.getRoles()
    this.roles = res.data

  }

  async editData() {

    const res = await this.userService.putUser(this.dataEdit.value, this.id)

    this.router.navigate(['/app'])

    this.snackBar.open(res.message, '', {

      duration: 3000,
      panelClass: ['green-snack-bar'],
      verticalPosition: 'top',

    });

  }


}
