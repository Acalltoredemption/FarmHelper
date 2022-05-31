import {useState, useEffect} from 'react'
import { useContext } from 'react'
import ResultContext from '../context/ResultContext'

export default function Card({item}) {
    const [acreCount, setAcreCount] = useState(0)
    const {deleteFarm} = useContext(ResultContext)
    useEffect(() => {
      setAcreCount(item.counts.cows * 1.5 + item.counts.goats * 0.3 + item.counts.sheep * 0.3)
    })

  return (
    <div key={item.id} class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
    </a>
    <ul className="mt-4">
            <li>{item.counts.cows} cows</li>
            <li>{item.counts.goats} goats</li>
            <li>{item.counts.sheep} sheep</li>
            <li>{item.counts.chickens} chickens</li>
    </ul>
    <p className="mt-2 mb-2 text-lg">You would need {acreCount} acres</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Edit
    </a>
    <a href="#" onClick={() => deleteFarm(item.id)} class="inline-flex items-center ml-3 py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Delete
    </a>
</div>
  )
}
