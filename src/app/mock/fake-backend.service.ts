import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ACCOUNTS } from './accounts'

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const accounts = ACCOUNTS
    return {accounts};
  }
}
