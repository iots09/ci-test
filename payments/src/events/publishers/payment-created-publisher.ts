import {Publisher, Subjects, PaymentCreatedEvent } from "@ottoman/ms-common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated
}