const initialState = {
  name: "Anna",
  email: "ana@ana.com",
  favorites: [ 161235, 357311 ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER/toggleFavorite": {
      const id = action.payload
     
      const favorite = state.favorites.includes(id) 
        ? state.favorites.filter(pizzaId => pizzaId !== id)
        : [...state.favorites, id]

      console.log("new favorite array", favorite)

      return {
        ...state,
        favorites: [...favorite]
      }
    }
    default: {
      return state;
    }
  }
}