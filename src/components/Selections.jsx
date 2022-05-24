import React from 'react'
import {useContext, useEffect} from 'react'
import {useState} from 'react'

export default function Selections() {
    const [cows, setCows] = useState('')
    const [goats, setGoats] = useState('')
    const [sheep, setSheep] = useState('')
    const [chickens, setChickens] = useState('')

    const [newFarm, setNewFarm] = useState('')

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

    const results = (e) => {
        e.preventDefault()
        setNewFarm({
            cows: cows,
            sheep: sheep,
            goats: goats,
            chickens: chickens
        })
        console.log(newFarm)
    }
  return (
    <div className="selections">
        <form>
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
                <option value="1-3<">1-3</option>
                <option value="4-6">4-6</option>
                <option value="7-9">7-9</option>
                <option value="10-12">10-12</option>
                <option value="13-16">13-16</option>
                <option value="17-20">17-20</option>
                <option value="21-25">21-25</option>
                <option value="26-29">26-29</option>
                <option value="30-32">30-32</option>
                <option value="33-35">33-35</option>
            </select>

            <label htmlFor="sheep">Sheep:</label>
            <select onChange={countSheep} name='sheep'>
            <option value="0">0</option>
                <option value="1-3">1-3</option>
                <option value="4-6">4-6</option>
                <option value="7-9">7-9</option>
                <option value="10-12">10-12</option>
                <option value="13-16">13-16</option>
                <option value="17-20">17-20</option>
                <option value="21-25">21-25</option>
                <option value="26-29">26-29</option>
                <option value="30-32">30-32</option>
                <option value="33-35">33-35</option>
            </select>

            <label htmlFor="chickens">Chickens:</label>
            <select onChange={countChickens} name='chickens'>
                <option value="0">0</option>
                <option value="1-4">1-4</option>
                <option value="5-9">5-9</option>
                <option value="10-14">10-14</option>
                <option value="15-19">15-19</option>
                <option value="20-24">20-24</option>
                <option value="25-29">25-29</option>
                <option value="30-34">30-34</option>
                <option value="35-39">35-39</option>
                <option value="40-44">40-44</option>
                <option value="45-50">45-50</option>
            </select>
            <button onClick={results}>Submit new farm</button>
        </form>
    </div>
  )
}
