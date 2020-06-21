import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessagingService } from './messaging.service';
import { User } from '../shared/datatypes/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(
    private http: HttpClient,
    private messagingService: MessagingService
  ) { }

  private response: any;
  private accountsUrl = 'api/accounts';

  getAll() {
      return this.http.get<User[]>(`${this.accountsUrl}`);
  }

  getAccount(email: number) {
    const url = `${this.accountsUrl}/${email}`;
    return this.http.get(url);
  }

  completeRegistration(user: User) {
    return this.http.put(this.accountsUrl, user, httpOptions);
  }
}
