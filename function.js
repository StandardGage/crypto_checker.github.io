async function fetchPrice() {
const inputBox = document.getElementById("crypto_name")


	var data = await fetch('https://api.coincap.io/v2/assets/' + inputBox.value)
  data = await data.json()
  console.log(data)
  data = data.data
 
  
  const coinname = document.getElementById("name")
  coinname.innerHTML = data.name
  console.log(data.name)
  
  const coinPrice = document.getElementById("price")
  coinPrice.innerHTML = 'Curent Price: $' + data.priceUsd
  
  console.log(data)
}
