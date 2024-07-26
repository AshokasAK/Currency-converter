import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from './Image'
import './Currency.css'
import Datas from './Datas'
import Result from './Result'

function Currency() {
  const [amount,setAmount]= useState(1)
  const [fromCurrency,setFromCurrency]= useState('INR')
  const [toCurrency,setToCurrency]= useState('USD')
  const [convertedAmt,setConvertedAmt]= useState (null)
  
  useEffect(()=>{
    const apiFunc = async() => {
      try{
        const url =
        // `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      
        console.log(url)
        const res =await axios.get(url)
        console.log(res)
        console.log(res.data.rates)
        const rate = res.data.rates[toCurrency]
        console.log(rate)
        if(!isNaN(amount) && amount!==0 ){
          setConvertedAmt((rate*amount).toFixed(2))
        }else{
          setConvertedAmt('')
        }
      }catch(err){
          console.log(err.msg)
      }
    }
    apiFunc()
  },[fromCurrency,toCurrency,amount])


const handleClear = () => {
  setAmount('')
  console.log(typeof amount)
}

  return (
    <>
      <div className="container">
        <Image />
        <Datas 
        amount = {amount}
        setAmount = {setAmount}
        fromCurrency = {fromCurrency}
        setFromCurrency = {setFromCurrency}
        toCurrency = {toCurrency}
        setToCurrency = {setToCurrency}
        handleClear = {handleClear}
        />
        <Result
        amount = {amount}
        fromCurrency = {fromCurrency}
        convertedAmt = {convertedAmt}
        toCurrency = {toCurrency}
        />
      </div>
    </>
  )
}

export default Currency
