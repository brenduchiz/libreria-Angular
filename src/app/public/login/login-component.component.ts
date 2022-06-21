import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Interfaces/users';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  public token: string = '';
  public usersProfile: Users[] | undefined;



  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private authService: AuthService, private userService: UsersService) { }

  ngOnInit(): void {
  }
  getoPrivate() {
    this.router.navigate(['/app'])
  }

  async login() {
    if (!this.loginForm.valid) return;
    const res = await this.authService.authenticate(this.loginForm.value);
    this.getoPrivate()
    this.token = res.data.token
    this.users(this.token)
  }

  users(token: string) {
    this.userService.getUsers(token)
      .subscribe(user => {


        this.usersProfile = user.data
      });
  }
}
