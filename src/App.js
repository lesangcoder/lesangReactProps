import React, { Component } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import Modal from "./Components/Modal";
import ShoesStore from "./Components/ShoesStore";
import products from "../src/Components/data.json";
import ProductItem from "./Components/ProductItem";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetail: null,
        };
    }

    setStateModal = (productDetail) => {
        this.setState({ productDetail });
    };

    render() {
        return (
            <div className="App">
                <ShoesStore>
                    <ProductList
                        productsData={products}
                        setStateModal={this.setStateModal}
                    >
                        <ProductItem
                            key={products.id}
                            item={products}
                            setStateModal={this.setStateModal}
                        />
                        <ProductItem
                            key={products.id}
                            item={products}
                            setStateModal={this.setStateModal}
                        />
                        <ProductItem
                            key={products.id}
                            item={products}
                            setStateModal={this.setStateModal}
                        />
                    </ProductList>
                    <Modal content={this.state.productDetail} />
                </ShoesStore>
            </div>
        );
    }
}

export default App;
