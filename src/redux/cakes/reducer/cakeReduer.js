import { BUY_CAKE } from '../actions/cakeType'

const initialState = {
    numofCakes: 10
}

const cakeReduer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return{
           ...state,
           numofCakes: state.numofCakes-1
        }
        default : return state
    }
}

export default cakeReduer