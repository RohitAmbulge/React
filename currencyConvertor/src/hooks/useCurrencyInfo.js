import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData]  = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(() =>res.json()) //converted res into json
        .then((res) => res[currency]) //we get the same value of key that was we passed in function as a value of currency
        console.log(data);
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;