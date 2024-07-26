import React from 'react'

const To = ({toCurrency,setToCurrency}) => {
  return (
    <>
      <label htmlFor="tocurrency" className="to">To : </label>
          <select
          type="text"
          id='tocurrency'
          value={toCurrency}
          onChange={(e)=>{setToCurrency(e.target.value)}}
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

export default To