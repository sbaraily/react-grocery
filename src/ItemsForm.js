import React from 'react';
import { Form, Container, Button } from 'semantic-ui-react'


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
            <Container textAlign='center' style={{paddingTop:'30px', margin:'10px', width: '87%'}}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                <Form.Input fluid
                value={name}
                name="name"
                onChange={this.handleChange}
                required 
                placeholder="Add An Item" />

                <Form.Input 
                fluid
                value={price}
                name="price"
                onChange={this.handleChange}
                required 
                placeholder="Add A Price" />
                </Form.Group> <br />
                <Button color="red" type="submit">Submit</Button><br/><br/>
            
            </Form>
            </Container>
        )
    }
}

export default ItemsForm;
