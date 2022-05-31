import React from 'react'
import Card from './Card'
import ResultItem from './ResultItem'
import ResultContext from '../context/ResultContext'
import { useContext } from 'react'

export default function ResultPanel() {
    const {results} = useContext(ResultContext)

    if(!results || results.length === 0){
        return <p>No listings yet...</p>
    }
  return (
    <div className='w-8/12 mx-auto'>
        {results.map((result) => (
            <div className="pt-8">
                <Card key={result.id} item={result} />
            </div>
        ))}
    </div>
  )
}
