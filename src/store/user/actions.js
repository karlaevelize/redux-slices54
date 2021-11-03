export const toggleFavorite = (id) => {
// console.log("id", id)
  return{
    type: "USER/toggleFavorite",
    payload: id
  }
}