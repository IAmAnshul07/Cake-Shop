
import { BUY_ICECREAM, REDUCE_PRICE } from '../actions/iceCreamType'

const iceCreamInitialState = {
    numOfIceCream : 20,
    price: 5
}

const iceCreameReducer = ( state = iceCreamInitialState, action ) => {
  switch(action.type){
    case BUY_ICECREAM : return {
        ...state,
        numOfIceCream: state.numOfIceCream-1
    }
    case REDUCE_PRICE: return{
        ...state,
        price: state.price-1
    }
    default : return state
  }
}

export default iceCreameReducer