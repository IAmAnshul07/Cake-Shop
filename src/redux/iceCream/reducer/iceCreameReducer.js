
import { BUY_ICECREAM, REDUCE_PRICE } from '../actions/iceCreamType'

const iceCreamInitialState = {
    numOfIceCream : 20,
    price: 100
}

const iceCreameReducer = ( state = iceCreamInitialState, action ) => {
    console.log('-=-=-=-=-reducers', action.type, state)
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