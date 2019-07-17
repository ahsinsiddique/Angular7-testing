import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(): Array<{}> {
      return [
          {
              name: 'Ahsan',
              password: 'asdf23e'
          },
          {
              name: 'Saddique',
              password: 'asdfsadd'
          }
      ];
  }
}
