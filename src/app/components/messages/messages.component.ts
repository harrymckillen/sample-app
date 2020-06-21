import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.subscription = this.messagingService.getMessage()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
              message.severity = 'bg-green-600';
              break;
          case 'error':
              message.severity = 'bg-red-600';
              break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  close(): void {
    this.messagingService.clearAllMessages();
  }
}
