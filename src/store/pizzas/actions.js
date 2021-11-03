export const addPizza = (data) => {
  // console.log("data", data)
  return {
    type: "PIZZA/add",
    payload: data
  }
}