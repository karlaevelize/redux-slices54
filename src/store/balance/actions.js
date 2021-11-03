export const deposit = (data) => {
  // console.log("data", data)
  return {
    type: "BALANCE/deposit",
    payload: data
  }
}