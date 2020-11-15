import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react'
import data from './data';
import cartItems from './data2';

import reducer from './reducer'
import Values from 'values.js'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {





    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' })
    }
    const remove = (id) => {
      dispatch({ type: 'REMOVE', payload: id })
    }
    const increase = (id) => {
      dispatch({ type: 'INCREASE', payload: id })
    }
    const decrease = (id) => {
      dispatch({ type: 'DECREASE', payload: id })
    }
    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
      const response = await fetch(url)
      const cart = await response.json()
      dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }
    const toggleAmount = (id, type) => {
      dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }
    useEffect(() => {
      fetchData()
    }, [])

    useEffect(() => {
      dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])














  const [searchTerm, setSearchTerm] = useState('')
  const [cheeses, setCheeses]=useState([data])
  const[searching,setSearching]=useState(false)
  const[addCheese,setAddCheese]=useState(false)
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(15))
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);




  useEffect(() => {
 console.log(cheeses)
 setAddCheese(false)
}, [addCheese, cheeses])


 useEffect(() => {
   const datat=JSON.parse(JSON.stringify(data))
   var filteredCheese=datat
if(searching===true && searchTerm!==''){
   filteredCheese=datat.filter(item=>
     item.name.toLowerCase()===searchTerm.toLowerCase()
     ||item.category.toLowerCase()===searchTerm.toLowerCase()
     ||item.text.toLowerCase().includes(searchTerm)
   )}
setCheeses(filteredCheese)
setSearching(false)

}, [searchTerm])






  return (
    <AppContext.Provider
      value={{ cheeses, setCheeses, searchTerm, setSearchTerm, searching,
        setSearching, setAddCheese, list, error, setList, setError, color, setColor,
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount, }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
