import React, { Component } from 'react';
import './App.css';
import { Container, Table } from 'semantic-ui-react'
import Item from './Item';
import ItemsForm from './ItemsForm';
import Footer from './Footer';

class App extends Component {

  state = {
    items: [
      {id: 1, name: "Milk", price: "3.99", complete: true,},
      {id: 2, name: "Bread", price: "2.99", complete: false,},
      {id: 3, name: "Rice", price: "1.99",complete: false,},
    ], filter: 'All'
  };

  setFilter = (filter) => {
    this.setState({filter})
  }

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

  handleClick = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  visibleItems = () => {
    const {items, filter} = this.state;
    switch(filter){
      case 'Active':
        return items.filter( t => !t.complete)
      case 'Complete':
        return items.filter( t => t.complete)
      default:
        return items;
    }
  }

 

  render() {
    const { items, filter } = this.state;
    return(
      <Container textAlign='center' style={{border:'1px dotted grey', 
      padding:'20px', margin:'10px', width: '50%', background:'linear-gradient(to bottom right, #0099cc 0%, #00ffcc 84%)'}}>
        <Item  name = "Grocery List Items" storeName = "Sam Mart" lists={this.visibleItems()} todoClick={this.handleClick} />
        <ItemsForm addItem={this.addItem} />
        <Footer filter={filter} setFilter={this.setFilter} />
       </Container>
    );
  }
}

export default App;
