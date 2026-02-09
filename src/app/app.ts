import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Dummy_Person } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, User]
})
export class App {
  protected readonly title = signal('first-angular-app');

    users = Dummy_Person;

    onSelectUser(id: string){
      console.log('Selected user with id ' + id);
      
    }


}
