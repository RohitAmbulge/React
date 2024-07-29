import {useEffect , useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData]  = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) =>res.json()) //converted res into json
        .then((res) => setData(res[currency])) //we get the same value of key that was we passed in function as a value of currency
        console.log(data);
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;