import React from 'react'
import {useState, useEffect} from 'react'

export default function ResultItem({farm}) {
  const [acreCount, setAcreCount] = useState(0)
  useEffect(() => {
    setAcreCount(farm.counts.cows * 1.5 + farm.counts.goats * 0.3 + farm.counts.sheep * 0.3)
  })
  return (
    <div>
        <p>{farm.name}</p>
        <ul>
            <li>{farm.counts.cows} cows</li>
            <li>{farm.counts.goats} goats</li>
            <li>{farm.counts.sheep} sheep</li>
            <li>{farm.counts.chickens} chickens</li>

            <p>You would need {acreCount} acres</p>
        </ul>
    </div>
  )
}
