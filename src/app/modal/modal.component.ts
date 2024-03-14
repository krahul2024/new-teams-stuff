// modal.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-md">
        <div>
          this is some content 
        </div>
        <button (click)="closeModal()">Close</button>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Input() isOpen: boolean = false;

  closeModal() {
    this.isOpen = false;
  }
}
