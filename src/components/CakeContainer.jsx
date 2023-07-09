import React from 'react'

const buttonClicked = (value) => {
    console.log('The button has been clicked', value)
}

// const handleInput = (event) => {
//     console.log('-=-=-=-=-=-=', event.target.value)
// }
 
const mapStatetoProps = ( state ) => {
    return{
        numOfCakes: state.numOfCakes
    }
}

const CakeContainer = () => {
    const test = "test string";
    return (
        <>
            <h1>Number of Cakes</h1>
            <button onClick={() => buttonClicked(test)}>
                Buy Cake
            </button >
            {/* <input type="text" onChange={handleInput} placeholder="Search.."></input> */}
        </>
  )
}

export default CakeContainer