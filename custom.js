function plus(id,idtwo,number){
    const quantity = document.getElementById(id).value
    const quantityNUmber = parseFloat(quantity)

    const newQuantity = quantityNUmber + 1
    document.getElementById(id).value = newQuantity

    const currentCost = document.getElementById(idtwo).innerText
    const currentCostNumber = parseFloat(currentCost)
    const totalPrice = newQuantity * number
    document.getElementById(idtwo).innerText = totalPrice
}
function minus(id,idtwo,number) {
    const quantity = document.getElementById(id).value
    const quantityNUmber = parseFloat(quantity)

    const newQuantity = quantityNUmber - 1
    document.getElementById(id).value = newQuantity

    const currentCost = document.getElementById(idtwo).innerText
    const currentCostNumber = parseFloat(currentCost)
    const totalPrice = newQuantity * number
    document.getElementById(idtwo).innerText = totalPrice
}
// PLUS EVENT HANDERLLER
const plusBtn = document.getElementById('plus')
plusBtn.addEventListener('click',function(){
    plus('quantity','currentCost',1219)
})
// MINUS EVENT HANDERLLER
const minsusBtn = document.getElementById('minus')
minsusBtn.addEventListener('click',function(){
    minus('quantity','currentCost',1219)
})
// COVER EVENT HANDELER
// PLUS HANDELER
const coverPlusBtn = document.getElementById('coverPlus')
coverPlusBtn.addEventListener('click',function(){
   plus('coverQuantity','currentCoverCost',59)
})
// MINUS HANDELER
const coverMinusBtn = document.getElementById('coverMinus')
coverMinusBtn.addEventListener('click',function(){
    minus('coverQuantity','currentCoverCost',59)
})
// FINAL PRICE
// FINAL PRICE
// FINAL PRICE
