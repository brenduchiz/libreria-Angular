import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.scss']
})
export class UserPasswordComponent implements OnInit {
  public id: any;

  public dataPassword = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),

  })
  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('idCharacter');

  }
  async changePassword() {

    const idUser = { id: this.id };
    const data = Object.assign(this.dataPassword.value, idUser);
    const res = await this.userService.postPassword(data)
    this.router.navigate(['/app'])
    this.snackBar.open(res.message, '', {

      duration: 3000,
      panelClass: ['green-snack-bar'],
      verticalPosition: 'top',

    });
  }
}
