import { Injectable } from '@angular/core';
import { Notification } from '../interface/notification.interface';
@Injectable({
  providedIn: 'root',
})
export class WarningNotificationService implements Notification {
  show(message: string): void {
    alert(`⚠️Warning: ${message}`);
  }
}
