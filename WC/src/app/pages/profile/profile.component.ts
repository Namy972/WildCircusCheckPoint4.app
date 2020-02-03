import { Message } from './../../shared/models/message';
import { UserService } from './../../shared/services/user.service';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/services/contact.service';
import { Temoignage } from 'src/app/shared/models/temoignage';
import { TemoignageService } from 'src/app/shared/services/temoignage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService,
              private messageService: ContactService,
              private temoignageService: TemoignageService,
              private router: Router) { }
  user: User;
  messages: Message[];
  temoignages: Temoignage[];

  ngOnInit() {
    this.user = this.userService.user;
    this.messageService.getAll().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
    this.temoignageService.getAll().subscribe((temoignages: Temoignage[]) => {
      this.temoignages = temoignages;
    });
  }
  deleteTemoignage(id: number) {
    this.temoignageService.delete(id).subscribe();
  }
  deleteMessage(id: number) {
    this.messageService.delete(id).subscribe();
  }

  desactivateTemoignage(data: Temoignage) {
    this.temoignageService.desactivate(data).subscribe();
  }
  activateTemoignage(data: Temoignage) {
    this.temoignageService.activate(data).subscribe();
  }

  logOut() {
    localStorage.removeItem('JWT-TOKEN');
    this.userService.user = null;
    this.router.navigate(['/homepage']);
  }

}
