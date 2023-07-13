import { BUY_ICECREAM, REDUCE_PRICE } from './iceCreamType'

export const buyIceCream = () => {
console.log('-=-=-=-=-=-=-=-action')
  return {
    type: BUY_ICECREAM
  }
}

export const reducePriceOfIceCream = () => {
    return{
        type: REDUCE_PRICE
    }
}

