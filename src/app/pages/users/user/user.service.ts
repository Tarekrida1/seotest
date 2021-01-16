import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TransferHttpService } from '@gorniv/ngx-universal';
import { TagsSeo } from '@shared/models/tags-seo.model';
import { User } from '@shared/models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly http: TransferHttpService,
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  public get(id: string): Observable<User> {
    const path = `${environment.USERS_URL}/${id}`;
    return this.http.get<User>(path);
  }

  public setSeo(data: TagsSeo) {
    const tags: { name: string; content: string }[] = [];

    if (data.title) {
      this.title.setTitle(data.title);
      tags.push({ name: 'og:title', content: data.title });
    }

    if (data.description) {
      tags.push({ name: 'description', content: data.description });
      tags.push({ name: 'og:description', content: data.description });
    }

    if (data.image) {
      tags.push({ name: 'og:image', content: data.image });
    }

    if (data.url) {
      tags.push({ name: 'og:url', content: data.url });
    }

    if (data.site_name) {
      tags.push({ name: 'og:site_name', content: data.site_name });
    }

    for (const tag of tags) {
      this.meta.updateTag(tag);
    }
  }
}
