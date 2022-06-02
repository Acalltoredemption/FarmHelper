import React from 'react'
import {useContext, useEffect} from 'react'
import {useState} from 'react'
import ResultContext from '../context/ResultContext'

export default function Selections() {
    const [cows, setCows] = useState(0)
    const [goats, setGoats] = useState(0)
    const [sheep, setSheep] = useState(0)
    const [chickens, setChickens] = useState(0)
    const [farmName, setFarmName] = useState('Untitled Farm')

    const [newFarm, setNewFarm] = useState('')

    const {addFarm} = useContext(ResultContext)

    useEffect(() => {
        setNewFarm({
            counts: {
            cows: cows,
            sheep: sheep,
            goats: goats,
            chickens: chickens
            },
            name: farmName
        })
        console.log(newFarm)
    }, [cows, goats, sheep, chickens, farmName])

    const countCows = (e) => {
        setCows(e.target.value)
    }
    const countGoats = (e) => {
        setGoats(e.target.value)
    }
    const countSheep = (e) => {
        setSheep(e.target.value)
    }
    const countChickens = (e) => {
        setChickens(e.target.value)
    }
    const handleFarmName = (e) => {
        setFarmName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addFarm(newFarm)
    }
  return (
      <div className="mx-auto mt-10">
    <div>
    <label className="block mb-2 text-sm font-bold text-gray-700" for="farmname">
        Farm Name
      </label>
      <input onChange={handleFarmName} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={farmName} type="text" name="farmname" placeholder="Farm Name" />
    </div>


    

    <div className="pt-8">
        <form onSubmit={handleSubmit}>
            <label htmlFor="cows" className="text-lg">Cows:</label>
            <select onChange={countCows} name='cows' class="border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <label htmlFor="goats" className="lg">Goats:</label>
            <select onChange={countGoats} name='goats' class="border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
            <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <label htmlFor="sheep" className="text-lg">Sheep:</label>
            <select onChange={countSheep} name='sheep' class="border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
            <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <label htmlFor="chickens" className="text-lg">Chickens:</label>
            <select onChange={countChickens} name='chickens' class="border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
            <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button type='submit' className='px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'>Submit new farm</button>
        </form>
    </div>
    </div>
  )
}
