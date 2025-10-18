import { Injectable } from '@angular/core';
import { SuccessNotificationService } from './services/success-notification.service';
import { ErrorNotificationService } from './services/error-notification.service';
import { WarningNotificationService } from './services/warning-notification.service';
import { Notification } from '../factoryPattern/interface/notification.interface';
export type NotificationType = 'success' | 'error' | 'warning';

@Injectable({
  providedIn: 'root',
})
export class NotificationFactoryService {
  constructor(
    private successService: SuccessNotificationService,
    private errorService: ErrorNotificationService,
    private warningService: WarningNotificationService
  ) {}

  createNotification(type: NotificationType): Notification {
    switch (type) {
      case 'success':
        return this.successService;
      case 'error':
        return this.errorService;
      case 'warning':
        return this.warningService;
      default:
        throw new Error('Invalid notification type');
    }
  }
}
