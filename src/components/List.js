import React from 'react';
const List = (props) => { // we're using an arrow function and const variable type, a ES6 features
    const list = props.listItems.map((el, i)=>(
        <li key={i}><h2>el</h2></li>
    ));
    return (
        <div>
            <ul>
                {
                list // this is a variable we'll define next
                }
            </ul>
        </div>
    )
};

export default List;