import React from 'react'

const From = ({fromCurrency,setFromCurrency}) => {
  return (
    <>
        <label htmlFor="fromcurrency" className="from">From : </label>
          <select
          type="text"
          id='fromcurrency'
          value={fromCurrency}
          onChange={(e)=>{setFromCurrency(e.target.value)}}
          >
          <option value="USD">USD - United States Dollar</option>
          <option value="INR">INR - Indian Rupees</option>
          <option value="Eur">EUR - Euro</option>
          <option value="GBP">GBP - British Pound Sterlinh</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CNY">CNY - cjinese Yuan</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="ZAR">ZAR - South African Rand</option>
          </select>
    </>
  )
}

export default From