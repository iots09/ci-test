import { Publisher, Subjects, TicketUpdatedEvent } from '@ottoman/ms-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
