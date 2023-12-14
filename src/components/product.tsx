import { Component } from "react";

interface ProductProps {
    title: string;
    image: string;
    description: string;
    onAdd: () => void;
}

class Product extends Component<ProductProps> {
    state = {}

    render() {
        return <div className="card" style={{ width: '18rem' }}>
            <img src={'assets/imgs/' + this.props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <button onClick={this.props.onAdd} className="btn btn-primary">Add to basket</button>
            </div>
        </div>
    }
};

export default Product;
