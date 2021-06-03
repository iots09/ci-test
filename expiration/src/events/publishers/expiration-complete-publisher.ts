import {Subjects, Publisher, ExpirationCompleteEvent} from "@ottoman/ms-common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}