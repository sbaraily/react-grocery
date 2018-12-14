import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { list } from 'postcss';
import Item from './Item';
import ItemsForm from './ItemsForm';

class App extends Component {

  state = {
    items: [
      {id: 1, name: "Milk", price: "$3.99", complete: true,},
      {id: 2, name: "Bread", price: "$2.99", complete: false,},
      {id: 3, name: "Rice", price: "$1.99",complete: false,},
    ]
  };

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

addItem = (name, price) => {
  const {items} = this.state;
  const item = {name, id: this.getUniqId(), price, complete:false}
  this.setState({items: [...items, item]})
}



  render() {
    const { items } = this.state;
    return(
      <div>
        <Item name = "Grocery List Items" storeName = "Sam Mart" lists={items} />
        <ItemsForm addItem={this.addItem} />

       </div>
    );
  }
}

export default App;
