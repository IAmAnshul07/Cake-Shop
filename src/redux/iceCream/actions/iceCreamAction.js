import { BUY_ICECREAM, REDUCE_PRICE } from './iceCreamType'

export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM
  }
}

export const reducePriceOfIceCream = () => {
    return{
        type: REDUCE_PRICE
    }
}

