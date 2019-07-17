import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users;
  @Input() text: string;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
  ngOnInit() {
  }

}
