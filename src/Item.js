import React from 'react'



// This is a Destructure

const Item = ({lists, name, storeName}) => (
    <div>
        <h2>{name}</h2>
        <h3>{storeName}</h3>
        <ul>
            { lists.map( product => 
            <li key={product.id}>{product.name}-> {product.price}</li>)}
        </ul>
    </div>
);

export default Item;


// const Item = (props) => (
//     <div>
//         <h2>{props.name}</h2>
//         <ul>
// { props.items.map( item =><li key={item.id}>{item.id})  {item.name} - {item.price}</li>)}
//         </ul>
//     </div>
// );


// renderItems = () => {
//     const {items,} = this.state;
//     return items.map( item =>
//       <li key={item.id}>{item.name} -> {item.price}</li>
//     )
//   }; DOM  .map  destructure