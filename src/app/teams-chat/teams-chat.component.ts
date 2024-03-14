import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-teams-chat',
  templateUrl: './teams-chat.component.html',
  styleUrls: ['./teams-chat.component.css']
})
export class TeamsChatComponent {
  usersList: User[] = [
    { name: 'Rahul', email: 'rasah@softwareag.com' },
    { name: 'Debankar', email: 'dedu@softwareag.com' },
    { name: 'Rahul from outside', email: 'culerrahul2024@gmail.com' },
    { name: 'Ayushman', email: 'aysi@softwareag.com' }
  ];
  isChatModalOpen: boolean = true;
  createNewTeamsChat: boolean = false;
  topicName: string = 'New teams chat';
  message: string = 'This is some message for new chat with topic ' + this.topicName;

  constructor() { }

  concatUsers(users_: User[]) {
    let tempUsersList: string = users_[0].email
    for (let i = 1; i < users_.length; i++) {
      tempUsersList = tempUsersList + ',' + users_[i].email;
    }

    console.log(tempUsersList);
    return tempUsersList;
  }

  header: string = 'msteams:/l/chat/0/0?'
  tenantId: string = ''; // tenantId=<tenantId>
  // users=<user1>,<user2>,...
  allUsers: string = this.concatUsers(this.usersList)
  type: string = 'chat'
  directDl: string = 'true'
  msLaunch: string = 'true'
  enableMobilePage: string = 'true'
  fqdn: string = 'teams.microsoft.com'
  chatsUrl: string = `${this.header}&users=${this.allUsers}&topicName=${this.topicName}&message=${this.message}&type=${this.type}&msLaunch=${this.msLaunch}&enableMobilePage=${this.enableMobilePage}&fqdn=${this.fqdn}`

  cancelNewChat(): void {
    this.createNewTeamsChat = false;
  }

  createNewChat(chatName: string, chatMessage: string) {
    this.topicName = chatName
    this.chatsUrl = `${this.header}&users=${this.allUsers}&topicName=${this.topicName}&message=${chatMessage}&type=${this.type}&msLaunch=${this.msLaunch}&enableMobilePage=${this.enableMobilePage}&fqdn=${this.fqdn}`
    console.log(this.topicName, this.chatsUrl)
    window.open(this.chatsUrl);
  }

  openModal() {
    this.isChatModalOpen = true;
    console.log('open-modal-clicked', this.isChatModalOpen)
    this.createNewTeamsChat = true;
  }

  closeModal() {
    this.isChatModalOpen = false;
    console.log('open-modal-clicked', this.isChatModalOpen)
  }

  shareToTeams() {
    const msg = this.getMessage();
    const imageUrl = `https://th.bing.com/th/id/OIP.-X5lKRUsXESViaupiAvs3QHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`;

    let url = `https://teams.microsoft.com/share?href=${imageUrl}&msgText=%3Ch2%3E${encodeURIComponent(msg.slice(0, 208))}%3C%2Fh2%3E&referrer=localhost&s=1706615752325`;

    let popupWindow = window.open(url, 'ShareToTeamsPopup', 'width=600,height=400');
    if (!popupWindow || popupWindow.closed || typeof popupWindow.closed === 'undefined') {
      alert('Popup blocked. Please allow popups for this website.');
    }
  }

  getMessage(): string {
    let composeMessage: string = '';
    for (let user of this.usersList) {
      for (let key in user) {
        composeMessage += `${key} : ${(user as any)[key]}\n`;
      }
      composeMessage += '\n\n';
    }
    return composeMessage.toString();
  }
}
