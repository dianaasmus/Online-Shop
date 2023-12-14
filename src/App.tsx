import { Component } from 'react';
import Basket from './components/basket';
import Navbar from './components/navbar';
import Product from './components/product';

interface Item {
    amount: any;
    title: any;
    price: any;
}

interface AppState {
    items: Item[];
}

class App extends Component<{}, AppState> {

    state: AppState = {
        items: []
    }

    addItem = (amount: any, title: any, price: any) => {
        const currentItems = [...this.state.items];

        currentItems.push({
            amount,
            title,
            price
        });

        this.setState({ items: currentItems }, () => {});
    };

    render() {
        return (
            <div>
                <div className="content-container">
                    <Navbar />
                    <div className='products-container'>
                        <Product onAdd={() => this.addItem(1, 'Cherries', 2.9)} title="Cherries" image="cherries.jpg" description="Add cherries to your basket" />
                        <Product onAdd={() => this.addItem(2, 'Apples', 1.5)} title="Apples" image="apples.jpg" description="Add apples to your basket" />
                        <Product onAdd={() => this.addItem(3, 'Grapes', 3.5)} title="Grapes" image="grapes.jpg" description="Add grapes to your basket" />
                        <Product onAdd={() => this.addItem(4, 'Pineapples', 4.9)} title="Pineapples" image="pineapple.jpg" description="Add pineapples to your basket" />
                    </div>
                </div>
                <Basket items={this.state.items} />
            </div>
        );
    };
}

export default App;
