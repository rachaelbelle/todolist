import React from 'react';
import './ListItems.css'

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item =>
    {
      return <div className="list" key="item.key">


      </div>
    })
  return(

  )
}
export default ListItems;
