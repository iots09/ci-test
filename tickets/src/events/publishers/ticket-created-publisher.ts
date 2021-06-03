import { Publisher, Subjects, TicketCreatedEvent } from '@ottoman/ms-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
