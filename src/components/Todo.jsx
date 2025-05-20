import React from "react";
import "../styles/todo.css";


const Todo = () => {
   const [inputValue, setInputValue] = React.useState('')
   const [items , setItems] = React.useState([])

    const addTakstoClick = (e) => {

        if(inputValue.trim() !== ''){
           setItems([...items, inputValue])
           setInputValue('')
        }
    }


     const handleRemove = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="container">
           <h1>To Do List</h1>
           <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter taxt ...."/>
           <button onClick={addTakstoClick}>Add</button>
          
               <h2> to do list
               </h2>
           <ul>
            {items.map((item,index) =>(
               <li key={index}>{item}
                <button onClick={(e) => handleRemove(index) } style={{ marginLeft: '10px'}}>Remove</button>
               </li>
            ))}
           </ul>
           
      </div>
    </div>
  )
}

export default Todo

