export class User {
  UserID: number;
  UserName: string;
  Password: string;

  constructor(userid: number, username: string, password: string) {
    this.UserID = userid;
    this.UserName = username;
    this.Password = password;
  }
}
