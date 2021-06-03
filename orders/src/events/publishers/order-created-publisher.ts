import { Publisher, OrderCreatedEvent, Subjects } from '@ottoman/ms-common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
