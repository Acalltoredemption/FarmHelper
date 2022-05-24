import React from 'react'

export default function ResultItem({farm}) {
  return (
    <div>
        <p>{farm.name}</p>
        <ul>
            <li>{farm.counts.cows} cows</li>
            <li>{farm.counts.goats} goats</li>
            <li>{farm.counts.sheep} sheep</li>
            <li>{farm.counts.chickens} chickens</li>
        </ul>
    </div>
  )
}
