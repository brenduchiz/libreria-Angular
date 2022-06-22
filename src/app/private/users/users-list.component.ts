import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Users } from 'src/app/Interfaces/users';
import { UsersService } from 'src/app/services/users/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {
  public userInfo: Users[] | undefined;
  displayedColumns: string[] = ['id', 'name', 'secondLastName', 'lastName', 'email', 'edit', 'key', 'disabled'];
  dataSource: any;



  constructor(private userService: UsersService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.users()

  }
  pagePassword(id: number) {
    this.router.navigate(['/app/user-change/' + id])
  }

  pageEdit(id: number) {
    this.router.navigate(['/app/user-edit/' + id])
  }
  addUser() {

    this.router.navigate(['/app/user-add'])
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  users() {
    this.userService.getUsers()
      .subscribe(user => {

        this.dataSource = new MatTableDataSource<Users>(user.data);

        this.ngAfterViewInit()

      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async disabledUser(id: number) {
    const res = await this.userService.deleteDisabledUser(id)

    this.snackBar.open(res.message, '', {

      duration: 3000,
      panelClass: ['green-snack-bar'],
      verticalPosition: 'top',

    });


  }

}
