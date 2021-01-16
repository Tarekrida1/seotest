import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TagsSeo } from '@shared/models/tags-seo.model';
import { User } from '@shared/models/user.model';
import { environment } from 'src/environments/environment';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public user: User;

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly service: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.get(id);
  }

  private async get(id: string) {
    try {
      this.service.get(encodeURI(id)).subscribe((res) => {
        this.user = res['data'];

        const seo: TagsSeo = {
          title: `${res['data']['title']} `,
          description: res['data']['expert'],
          image: environment.API + res['data']['featuredImage']['serving'],
          url: '',
        };
        this.service.setSeo(seo);
      });
    } catch (error) {
      console.error(error);
    }
  }

  goBack() {
    this.location.back();
  }
}
