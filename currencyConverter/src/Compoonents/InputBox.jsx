import React ,{useId} from 'react'
//do not use useId to gernerate keys in a list
export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId=useId()  //unqiue values
    return (
        <div
            className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div
                className="w-1/2">
                <label 
                htmlFor={amountInputId}
                    className="text-balck/40 mb-2 inline-block">
                    {label}

                </label>

                <input
                id={amountInputId}
                    className="outline-noone w-full"
                    type="number"
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />



            </div>

            <div
                className="w-1/2 flex flex-wrap justify-end text-right">
                <p
                    className="text-black/40 mb-2 w-full">
                    currency type
                </p>

                <select
                    className=" rounded-lg px-1 py-1 bgc-gray-100 cursor-pointer outline0non"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                           {currency}
                        </option>
                    ))}
                </select>

            </div>

        </div>

    );
}
