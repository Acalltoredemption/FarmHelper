import { createContext, useState } from "react";

const ResultContext = createContext()

export const ResultProvider = ({children}) => {
    const [results, setResults] = useState([
        {
            id: 1,
            counts: {
                cows: 1,
                goats: 0,
                sheep: 0,
                chickens: 10
            },
            name: 'The funny farm'
        },
        {
            id: 2,
            counts: {
                cows: 4,
                goats: 5,
                sheep: 0,
                chickens: 10
            },
            name: 'The Oren Ranch'
        }
    ])

    return <ResultContext.Provider value={{results}} >
    {children}
  </ResultContext.Provider>
  
}


    export default ResultContext;