import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../services/alert.service';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  currentUser: User;
  loading = false;

  constructor(private router: Router, private alertService: AlertService, private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  updateUser(currentUser: User) {
    this.userService.update(currentUser)
      .subscribe(
      data => {
        this.alertService.success('Update successful!', true);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.router.navigate(['']);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      });
  }

}
