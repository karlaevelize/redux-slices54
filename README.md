## Redux Terms

User -> Dispatch Action -> To the Reducer -> Reducer Updates the state -> Write a elector || UI gets updates

### Actions

- it's an object with a type and payload
- data

### Reducer

- manipulates and interacts directly with the state
- where we describe what to do with the payload
- what to do in each case

### Selector

- select a value from the state

### Pure functions

- No collateral effects
- Always return the same value given the same arguments
- It doesn't rely on variables outside the function
- It doesn't change any variable outside the function

- store: a collection of states / app state, global state
- dispatch: dispatch an actions
- slice: each piece of the reducer
- old state / new state: updating the state
- payload: data
- global state: app state
- redux state: global state

- handler: event handler
- hooks: useDispatch & useSelector