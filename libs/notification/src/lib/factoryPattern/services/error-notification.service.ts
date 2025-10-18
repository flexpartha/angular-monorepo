import { Injectable } from '@angular/core';
import { Notification } from '../interface/notification.interface';
@Injectable({
  providedIn: 'root',
})
export class ErrorNotificationService implements Notification {
  show(message: string): void {
    alert(`❌Error: ${message}`);
  }
}
