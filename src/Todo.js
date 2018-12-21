import React from 'react';
import { Container, Table } from 'semantic-ui-react'


const Todo = ({id, name, price, complete, todoClick }) => (
    <Table celled>

    <div
        style={ complete ? {...styles.todo, ...styles.complete } : styles.todo }
        onClick={ () => todoClick(id) }
    >   
        <Table.Cell>{name} &emsp; &emsp; ${price} </Table.Cell> 
        
        
    </div>

    </Table>
);

const styles = {
    todo: { cursor: 'pointer', fontSize: '20px'},
    complete: { color: 'grey', textDecoration: 'line-through', fontSize: '22px' },


};

export default Todo;