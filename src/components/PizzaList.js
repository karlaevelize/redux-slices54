//TO DO IN THIS LECTURE
//1. Write a selector for user and all pizzas
//2. Display the user and the pizzas on the screen
//3. Write a form to add a pizza and add local state
//4. Make the form dispatch an action to the reducer
//5. Write a case in the reducer so we can display the new piza
//6. Display either a ♥ or ♡ depending if the pizza is a favorite
//7. Add a button to toggle so the user can favorite or unfavorite the pizza
//8. If enough time, delete a pizza

import { useSelector, useDispatch } from "react-redux"
import { selectPizzas } from "../store/pizzas/selectors"
import { selectUser } from "../store/user/selectors"
import { useState } from "react"
import { addPizza } from "../store/pizzas/actions"
import { toggleFavorite } from "../store/user/actions"


export default function PizzaList(){

  const dispatch = useDispatch()

  const user = useSelector(selectUser)
  const pizzas = useSelector(selectPizzas)

  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ imageUrl, setImageUrl ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = pizzas.length + 1
    dispatch(addPizza({name, description, imageUrl, id}))
  }

  return (
    <div>
      <h2>My pizzas</h2>
      <p>Welcome, <b>{user.name}</b></p>

      Name: <input value={name} onChange={(event) => setName(event.target.value)}/>
      Description: <input value={description} onChange={(event) => setDescription(event.target.value)}/>
      Image Url: <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)}/> 
      <button onClick={handleSubmit}>Add pizza</button>


      {!pizzas ? "Loading" : pizzas.map(pizza => {
        return (
          <div>
            <p><b>{pizza.name}</b>, bought {pizza.bought} times</p>
            <img style={{width: "200px"}} src={pizza.image}/>
            <p>{pizza.description}</p>
            <button onClick={() => dispatch(toggleFavorite(pizza.id))}>{user.favorites.includes(pizza.id) ? "♥" : "♡"}</button>
          </div>
        )
      })}
    </div>
  )
}