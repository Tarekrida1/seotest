import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let index = 1; index < 11; index++) {
      this.users.push(index);
    }
  }
}
