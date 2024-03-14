import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, NgModel } from '@angular/forms';

@Component({
  selector: 'app-teams-chat-modal',
  templateUrl: './teams-chat-modal.component.html',
  styleUrls: ['./teams-chat-modal.component.css']
})
export class TeamsChatModalComponent {
  @Input() isChatModalOpen: boolean = true;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  searchTerm: string = '';
  onCloseModal() {
    this.closeModal.emit();
  }
}
