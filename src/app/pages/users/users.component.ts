import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: number[] = [];

  constructor(
    private  ser: UserService
  ) {}

  ngOnInit(): void {
    // for (let index = 1; index < 11; index++) {
    //   this.users.push(index);
    // }
    this.get();

  }
  private async get() {
    try {
     this.ser.getAll().subscribe((res) => {
        this.users = res['data'];
      });
    } catch (error) {
      console.error(error);
    }
  }
}
