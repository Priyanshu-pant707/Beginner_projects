//custom hooks can youse your builtin hooks


import {useEffect,useState} from 'react'


function useCurrencyInfo(currency){
const [data,setData]=useState({})

    //api call
    //https://latest.currency-api.pages.dev/v1/currencies/usd.json
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}



export default useCurrencyInfo;