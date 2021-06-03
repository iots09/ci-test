import { Subjects, Publisher, OrderCancelledEvent } from '@ottoman/ms-common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
