import { createContext, useState } from "react"

export const Context = createContext(null)

const DataContext = (props) => {

    
  const [todos, settodos] = useState([]);


  return  <Context.Provider value={{todos,settodos}}>{props.children}</Context.Provider>
}

export default DataContext