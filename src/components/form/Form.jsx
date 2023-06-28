import React, { useState } from "react";
import { FormControl, InputLabel, Input,Button } from '@mui/material';

import { FormWrapper } from "./form.style";

const InputForm = () => {
    const [item, setItem] = useState("");
    console.log('item', item);
    return (
        <>
            <FormWrapper>
                <FormControl>
                    <InputLabel htmlFor="my-input">Enter Item Name Here</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={item} onChange={(e) => setItem(e.target.value)} />
                </FormControl>

            </FormWrapper>
            <FormWrapper>  <Button variant="contained">Contained</Button>  </FormWrapper>
                <FormWrapper>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox"/>
                            Item 1
                        </label>
                    </li>
                </ul>
            </FormWrapper>
        </>
    )
}

export default InputForm