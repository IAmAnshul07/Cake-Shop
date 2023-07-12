import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    const isDisabled = props.numOfCakes <= 0 ? true : false;

    return (
        <>
            <h1>Number of Cakes: <span >{props.numOfCakes}</span></h1>
            <button onClick={props.buyCake} disabled={isDisabled}>
                Buy Cake
            </button >
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        numOfCakes: state.cakeReduer.numofCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer)