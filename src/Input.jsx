import React from 'react'

const Input = ({amount,setAmount,handleClear}) => {
  return (
   <>
         <label
          className='amountlabel'
           htmlFor="amount"
           >Amount :</label>
        <div className="inputs">
          <input 
          type="number" 
          id='amount'
          value={amount}
          onChange={(e)=>{setAmount(e.target.value)
          }}
          />
          <button  
          onClick={handleClear}
          >Clear</button>

        </div>
   </>
  )
}

export default Input