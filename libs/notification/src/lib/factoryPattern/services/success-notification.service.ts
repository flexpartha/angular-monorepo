import { Injectable } from '@angular/core';
import { Notification } from '../interface/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class SuccessNotificationService implements Notification {
  show(message: string): void {
    alert(`✅Success: ${message}`);
  }
}
