import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream,  reducePriceOfIceCream } from '../redux/iceCream/actions/iceCreamAction';

const IceCreamContainer = (props) => {

    
    //const  numOfIceCream = useSelector(state => state.cream.numOfIceCream)
    //const priceOfCream = useSelector(state => state.cream.price)
    //const isDisabled = price <= 0 ? true : false
    const {price, numOfIceCream} = useSelector(state => state.cream)
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(buyIceCream())
    }

    const handlePriceOnClick = () => {
        dispatch(reducePriceOfIceCream())
    }

  return (
    <>
        <h1>number of Ice-Cream : <span>{numOfIceCream ?? 0}</span></h1>
        <h1>Price of Ice-Cream : <span>{price ?? 0}</span></h1>
        <button onClick={handleOnClick} disabled={!numOfIceCream} >Buy ice-Cream</button>
        <button onClick={handlePriceOnClick} disabled={!price} >Reduce Price</button>
    </>
  )
}

export default IceCreamContainer