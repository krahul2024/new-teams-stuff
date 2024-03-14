import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsChatComponent } from './teams-chat/teams-chat.component';
import { TeamsShareComponent } from './teams-share/teams-share.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ModalComponent } from './modal/modal.component';
import { SharePreviewComponent } from './share-preview/share-preview.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'chat', title: 'Teams Chat Page', component: TeamsChatComponent },
  { path: 'share', title: 'Teams Share Page', component: TeamsShareComponent },
  { path: '', title: 'Home Page', component: UsersListComponent },
  { path: 'modal', title: 'Modal', component: ModalComponent },
  { path: 'share-preview', title: 'Share to Teams Preview', component: SharePreviewComponent },
  { path: 'search-user', title: 'Search Users', component: SearchUsersComponent },
  { path: 'message', title: 'Message Form', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
