// PLUS EVENT HANDERLLER
const plusBtn = document.getElementById('plus')
plusBtn.addEventListener('click',function(){
    const quantity = document.getElementById('quantity').value
    const quantityNUmber = parseFloat(quantity)

    const newQuantity = quantityNUmber + 1
    document.getElementById('quantity').value = newQuantity

    const currentCost = document.getElementById('currentCost').innerText
    const currentCostNumber = parseFloat(currentCost)
    const totalPrice = newQuantity * 1219
    document.getElementById('currentCost').innerText = totalPrice
})
// MINUS EVENT HANDERLLER
const minsusBtn = document.getElementById('minus')
minsusBtn.addEventListener('click',function(){
    const quantity = document.getElementById('quantity').value
    const quantityNUmber = parseFloat(quantity)

    const newQuantity = quantityNUmber - 1
    document.getElementById('quantity').value = newQuantity

    const currentCost = document.getElementById('currentCost').innerText
    const currentCostNumber = parseFloat(currentCost)
    const totalPrice = newQuantity * 1219
    document.getElementById('currentCost').innerText = totalPrice
})