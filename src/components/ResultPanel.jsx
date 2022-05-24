import React from 'react'
import ResultItem from './ResultItem'
import ResultContext from '../context/ResultContext'
import { useContext } from 'react'

export default function ResultPanel() {
    const {results} = useContext(ResultContext)

    if(!results || results.length === 0){
        return <p>No listings yet...</p>
    }
  return (
    <div>
        {results.map((result) => (
            <div>
                <ResultItem key={result.id} farm={result} />
            </div>
        ))}
    </div>
  )
}
