import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: any[] = [];

  constructor( private dataService: UserService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
}
}
