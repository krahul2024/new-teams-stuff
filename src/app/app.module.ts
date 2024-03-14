import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsChatComponent } from './teams-chat/teams-chat.component';
import { TeamsShareComponent } from './teams-share/teams-share.component';
import { FormsModule, NgModel } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { ModalComponent } from './modal/modal.component';
import { SharePreviewComponent } from './share-preview/share-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './teams-chat/list/list.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { MessageComponent } from './message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamsChatModalComponent } from './components/teams-chat-modal/teams-chat-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsChatComponent,
    TeamsShareComponent,
    UsersListComponent,
    ShareButtonComponent,
    ModalComponent,
    SharePreviewComponent,
    ListComponent,
    SearchUsersComponent,
    MessageComponent,
    TeamsChatModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
