import React, { Component } from 'react';
import SingleOrder from './singleOrder';

class PendingOrders extends Component {
   render() {
        return (
            <div className="ordersWrapper">
                {
                    this.props.orders
                    .map((order, key) =>
                    (
                    <SingleOrder
                        key={key}
                        _id= {order._id}
                        OrderName={order.orderName}
                        Description={order.Description}
                        customerName={order.customerName}
                        orderDate={order.orderDate}
                        dueDate={order.dueDate}
                        status={order.status}
                        handleOrderDelete = {this.props.handleOrderDelete}
                    />
                    )
                    )
                }
            </div>
        );
   }
}

export default PendingOrders;
