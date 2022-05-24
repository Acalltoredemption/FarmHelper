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
      <>
    <div className="farmName">
    <label htmlFor="farmname">Farm Name:</label>
    <input name="farmname" type="text" value={farmName} onChange={handleFarmName} placeholder="Farm Name" />
    </div>

    <div className="selections">
        <form onSubmit={handleSubmit}>
            <label htmlFor="cows">Cows:</label>
            <select onChange={countCows} name='cows'>
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

            <label htmlFor="goats">Goats:</label>
            <select onChange={countGoats} name='goats'>
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

            <label htmlFor="sheep">Sheep:</label>
            <select onChange={countSheep} name='sheep'>
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

            <label htmlFor="chickens">Chickens:</label>
            <select onChange={countChickens} name='chickens'>
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
            <button type='submit'>Submit new farm</button>
        </form>
    </div>
    </>
  )
}
