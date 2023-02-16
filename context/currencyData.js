import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext(undefined);

export function CurrencyProvider({ children }) {
    const [currency, setCurrency] = useState("USD");
    return (
        <CurrencyContext.Provider
            value={{
                currency,
                setCurrency,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);

    if (!context)
        throw new Error("useCurrency must be used inside a `CurrencyProvider`");

    return context;
}
