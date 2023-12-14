import { Component } from 'react';

interface Item {
    amount: number;
    title: string;
    price: number;
}

interface BasketProps {
    items: Item[];
}

class Basket extends Component<BasketProps> {
    render() {
        return (
            <div className="basket">
                <h2>Basket</h2>
                {this.props.items.map((item, index) => (
                    <div key={index}>
                        <p>{item.amount}kg {item.title}: {item.price}€</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Basket;
