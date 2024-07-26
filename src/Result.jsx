import React from 'react'

const Result = ({amount,fromCurrency,toCurrency,convertedAmt}) => {
  return (
    <>
     <footer className='footer'>
        {amount && <p className='result'>{amount} {fromCurrency} is equal to {convertedAmt} {toCurrency}</p>}
     </footer>
    </>
  )
}

export default Result