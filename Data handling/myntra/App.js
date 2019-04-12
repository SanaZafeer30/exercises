import React, { Component } from "react";
import "./App.css";
import Header from "./component/header";
import Carousel from "./component/carousel";
import HotDeals from "./component/hotDeals";
import Brands from "./component/brandsInFocus";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Carousel className="carousel" />
                <HotDeals />
                <Brands className="brands" />
            </div>
        );
    }
}

export default App;
