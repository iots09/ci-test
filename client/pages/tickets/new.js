import {useState} from "react";
import useRequest from '../../hooks/use-request'
import Router from 'next/router'

const NewTicket = ({currentUser}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const { doRequest, errors } = useRequest({
        url: '/api/tickets',
        method: 'post',
        body: {
            title, price,
        },
        onSuccess: (ticket) => {
            Router.push('/')
        }
    })
    const onBlur = () => {
        const value = parseFloat(price)
        if (isNaN(value)) {
            return
        }
        setPrice(value.toFixed(2))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        doRequest()
    }
    return <div>
        <h1>Create Ticket</h1>

        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input
                    value={price}
                    className="form-control"
                    onBlur={onBlur}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            {errors}
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
};

NewTicket.getInitialProps = async (context, client, currentUser) => {
    return {}
};

export default NewTicket;
