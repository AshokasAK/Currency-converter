import React from 'react'
import From from './From'
import To from './To'
import Input from './Input'

const Datas = ({amount,setAmount,fromCurrency,setFromCurrency,toCurrency,setToCurrency,handleClear}) => {
  return (
   <>
    <section className='datas'>
        <Input
        amount={amount}
        setAmount={setAmount}
        handleClear = {handleClear}
        />
        <From 
        fromCurrency = {fromCurrency}
        setFromCurrency = {setFromCurrency}
        />
        <To 
        toCurrency = {toCurrency}
        setToCurrency = {setToCurrency}
        />
    </section>
   </>
  )
}

export default Datas