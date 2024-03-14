import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teams-share',
  templateUrl: './teams-share.component.html',
  styleUrls: ['./teams-share.component.css']
})
export class TeamsShareComponent {

  heading: string = '';
  content: string = '';
  teamSharedMessage: string = '';
  teamSharedLink: string = 'https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/share-to-teams-from-web-apps';
  teamSharedIconSize: number = 48;

  onSubmit(form: NgForm) {
    this.heading = form.value.heading;
    this.content = form.value.content;

    this.teamSharedMessage = `
      <h2>${this.heading}</h2>
      <p>${this.content}</p>
    `;

    console.log(this.teamSharedMessage);
  }
}
