export class Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class Ad {
  company: string;
  url: string;
  text: string;
}

export class User {
  data: Data;
  ad: Ad;
}
