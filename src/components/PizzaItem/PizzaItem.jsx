function PizzaItem({pizza}) {

  dispatch({
    // action.type
    type: 'ADD_PIZZA' ,
    // action.payload
    payload: pizzaReducer{
      pizzaName,
      pizzaDescription,
      pizzaPrice
    }
  });



  return (
  <>
    <li> {pizza.name} {pizza.description} {pizza.price} </li>
    <button onClick={addPizza}>Add pizza</button>
  </>
  )

}


const handleSubmit = (event) => {
  event.preventDefault();
  addPizza(pizza);
  clearPizzaFields();
}

export default PizzaItem;