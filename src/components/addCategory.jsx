import { useState } from "react"

export const AddCategory = ({onNewCategory})=>{

    const [InputValue,setInputValue]= useState('')

    const onChanged = ({target})=>{
        setInputValue(target.value)
    }

    const Submit = (event)=>{
        event.preventDefault()
        if (InputValue.trim().length<=1){
            return
        }
        // setCategorias(categoria => [InputValue,...categoria])
        onNewCategory(InputValue.trim())
        setInputValue('')
    }


    return(
        <form onSubmit={()=>{Submit(event)} }  >
        <input 
        type="text" 
        name="inputText"
        id="inputText" 
        value={InputValue}
        onChange={()=>onChanged(event) }        
        />
        </form>
    )
}

