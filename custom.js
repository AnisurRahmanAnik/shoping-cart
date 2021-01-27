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
// COVER EVENT HANDELER
// PLUS HANDELER
const coverPlusBtn = document.getElementById('coverPlus')
coverPlusBtn.addEventListener('click',function(){
    const coverQuantity = document.getElementById('coverQuantity').value
    const coverQuantityNumber = parseFloat(coverQuantity)

    const newCoverQuantity = coverQuantityNumber + 1
    document.getElementById('coverQuantity').value = newCoverQuantity

    const currentCoverCost = document.getElementById('currentCoverCost').innerText
    const currentCoverCostNumber = parseFloat(currentCoverCost)
    const totalCoverCost = newCoverQuantity * 59
    document.getElementById('currentCoverCost').innerText = totalCoverCost
})
// MINUS HANDELER
const coverMinusBtn = document.getElementById('coverMinus')
coverMinusBtn.addEventListener('click',function(){
    const coverQuantity = document.getElementById('coverQuantity').value
    const coverQuantityNumber = parseFloat(coverQuantity)

    const newCoverQuantity = coverQuantityNumber - 1
    document.getElementById('coverQuantity').value = newCoverQuantity

    const currentCoverCost = document.getElementById('currentCoverCost').innerText
    const currentCoverCostNumber = parseFloat(currentCoverCost)
    const totalCoverCost = newCoverQuantity * 59
    document.getElementById('currentCoverCost').innerText = totalCoverCost
})