import React from 'react';

class ItemsForm extends React.Component {

    state = {name: '', price: ''}

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.name, this.state.price);
        this.setState({name: '', price: ''})
    }




    render() {
        const { name }=this.state
        const { price }=this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                value={name}
                name="name"
                onChange={this.handleChange}
                required 
                placeholder="Add An Item" />

                <input 
                value={price}
                name="price"
                onChange={this.handleChange}
                required 
                placeholder="Add A Price" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}




export default ItemsForm;
