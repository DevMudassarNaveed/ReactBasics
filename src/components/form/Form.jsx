import React, { useState } from "react";
import { FormControl, InputLabel, Input,Button } from '@mui/material';

import { FormWrapper } from "./form.style";

const InputForm = () => {
    const [item,setItem ] = useState("");
    const [todos, setTodos] = useState([]); // intilizing it with an empty array as we have many todos
    const handleClick = () =>{
    setTodos((currentItems)=>
    {
        return[...currentItems  , {title: item , status: false}];

    })
    setItem("");
    }
  
    return (
        <>
            <FormWrapper>
                <FormControl>
                    <InputLabel htmlFor="my-input">Enter Item Name Here</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={item} onChange={(e) => setItem(e.target.value)} />
                </FormControl>

            </FormWrapper>
            <FormWrapper>  <Button variant="contained" onClick={handleClick}>Contained</Button>  </FormWrapper>
                <FormWrapper>
                <ul>
                    
                        {todos.map((list, id)=>(
                            <li key={id}>
                              <label>
                              <input type="checkbox" checked={list.status}/>
                                    {list.title}
                          </label>
                          
</li>
                        ))}
                      
                   
                </ul>
            </FormWrapper>
        </>
    )
}

export default InputForm