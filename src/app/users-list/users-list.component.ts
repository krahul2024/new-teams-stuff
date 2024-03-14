import { AfterViewInit, Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UsersListComponent implements OnInit {

  usersList: any[] = [];
  embedContent: string = 'This is some initial message';
  teamSharedLink: string = 'https://teams.microsoft.com/';
  isMessageUpdated : boolean = false;
  message : string = ''; 

  constructor(private _userService: UserService, private _modalService: NgbModal) { };

  ngOnInit(): void {
    // this.embedContent="Initial Message..."
    console.log('initial', this.embedContent)
  }

  allUsers : User[] = [
    { name: 'User One', email: 'user_one@example.com', address: '123 Main St, City One, India' },
    { name: 'User Two', email: 'user_two@example.com', address: '456 Side Rd, City Two, India' },
    { name: 'User Three', email: 'user_three@example.com', address: '789 Center St, City Three, India' },
    { name: 'User Four', email: 'user_four@example.com', address: '101 Park Rd, City Four, India' },
    { name: 'User Five', email: 'user_five@example.com', address: '202 Lake Ave, City Five, India' },
    { name: 'User Six', email: 'user_six@example.com', address: '303 Mountain Rd, City Six, India' },
    { name: 'User Seven', email: 'user_seven@example.com', address: '404 Ocean Blvd, City Seven, India' },
    { name: 'User Eight', email: 'user_eight@example.com', address: '505 Forest Lane, City Eight, India' },
    { name: 'User Nine', email: 'user_nine@example.com', address: '606 River View, City Nine, India' },
    { name: 'User Ten', email: 'user_ten@example.com', address: '707 Hillside Dr, City Ten, India' }
];

  // caliing the get-users-list service 
  getUsers() {
    this._userService.getUsersList().subscribe(
      value => {
        this.usersList = value.users;
        // console.log(value.users, this.usersList)
      },
      error => { console.log(error) }
    )
  }


  getUpdatedMessage(): string {
    const msg = this.getMessage();
    // console.log(msg); 

    return `<h2>${msg}</h2>`;
  }

  openShareToTeams(): void {
    const msg = this.getMessage();
    const imageUrl = `https://th.bing.com/th/id/OIP.-X5lKRUsXESViaupiAvs3QHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`;

    let url = `https://teams.microsoft.com/share?href=${imageUrl}&msgText=%3Ch2%3E${encodeURIComponent(msg.slice(0, 208))}%3C%2Fh2%3E&referrer=localhost&s=1706615752325`;

    let popupWindow = window.open(url, 'ShareToTeamsPopup', 'width=600,height=400');
    if (!popupWindow || popupWindow.closed || typeof popupWindow.closed === 'undefined') {
      alert('Popup blocked. Please allow popups for this website.');
    }
  }

  getMessage(): string {
    // console.log(this.usersList)

    let composeMessage: string = '';
    for (let user of this.usersList) {
      for (let key in user) {
        if (key === 'address') {
          composeMessage += 'Address\n'
          for (let addressKey in user[key]) composeMessage += `  ${addressKey} : ${user[key][addressKey]}\n`;
        }
        else composeMessage += `${key} : ${user[key]}\n`;
      }
      composeMessage += '\n\n';
    }

    // console.log(composeMessage); 
    return composeMessage.toString();
  }


  handleTeamsButtonClick() {
    console.log('Teams Share button clicked...')
    console.log(this.usersList)
    this.embedContent = new String('Updated Message...') as string;
    this.isMessageUpdated = true;
    // (this.bodyRef?.nativeElement as HTMLDivElement).setAttribute('data-msg-text', 'Final content');
    // ('data-msg-text')
    console.log(this.embedContent)
  }

  isModalOpen: boolean = false;

  openModal() {
    this._modalService.open('this is some content', { centered : true}); 
  }
}
