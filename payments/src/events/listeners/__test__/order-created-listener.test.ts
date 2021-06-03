import {OrderCreatedEvent, OrderStatus} from "@ottoman/ms-common";
import {natsWrapper} from "../../../nats-wrapper";
import mongoose from "mongoose";
import {Message} from "node-nats-streaming";
import {OrderCreatedListener} from "../order-created-listener";
import {Order} from "../../../models/order";

const setup = async ()=> {
    const listener = new OrderCreatedListener(natsWrapper.client)
    const data: OrderCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        status: OrderStatus.Created,
        userId: new mongoose.Types.ObjectId().toHexString(),
        expiresAt: 'a',
        ticket: {
            id: 'ads',
            price: 10,
        }
    }

    // @ts-ignore
    const msg: Message = {
        ack: jest.fn(),
    }

    return {
        listener,
        data,
        msg,
    }
}
it('replicates the order info', async () => {
    const { listener, data, msg } = await setup()
    await listener.onMessage(data, msg)

    const order = await Order.findById(data.id)

    expect(order).toBeDefined()
    expect(order!.price).toEqual(data.ticket.price)
})

it('acks the message', async () => {
    const { listener, data, msg } = await setup()
    await listener.onMessage(data, msg)
    expect(msg.ack).toHaveBeenCalled()
})
