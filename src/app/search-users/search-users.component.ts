import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { search } from '@microsoft/teams-js';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  users: User[] = [
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

  searchValue : string = ""; 
  filteredUsers : User[] = []; 
  selectedUsers : User[] = [];  
  hoverOn : number = -1; 

  ngOnInit(): void {
      console.log('Component Initialized...')
  }

  isSelected(user : User) : boolean {
    let ans = false; 
    for(let selUser of this.selectedUsers)
      if(user.name === selUser.name){
        ans = true ;  break; 
      }
    return ans ; 
  }
  
  filterUsers() : void {
    console.log(this.searchValue)
    this.filteredUsers = this.users.filter(user => {
      return !this.isSelected(user) && user.name.toLowerCase().includes(this.searchValue.toLowerCase()) && this.searchValue.length > 0 ;  
    });
  }

  selectUser(user : User) : void{
    const idx = this.selectedUsers.findIndex(selectedUser => user.name === selectedUser.name); 
    if(idx === -1) this.selectedUsers.push(user); 
    else this.selectedUsers.splice(idx, 1); 
    this.filteredUsers = []; 
    this.searchValue = ""; 
  }

  removeUser(user : User) : void{
    this.selectedUsers = this.selectedUsers.filter(selUser => selUser.name !== user.name); 
  }

  onHover(index : number) : void{
    console.log('Mouse still hovering')
    this.hoverOn = index ; 
  }

  onLeave() : void {
    console.log('Mouse stopped hovering')
    this.hoverOn = -1;  
  }
}
