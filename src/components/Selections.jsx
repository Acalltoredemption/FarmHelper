import React from 'react'

export default function Selections() {
  return (
    <div>
        <form>
            <label htmlFor="cows">Cows:</label>
            <select name='cows'>
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
            <select name='goats'>
                <option value="0">0</option>
                <option value="1">1-3</option>
                <option value="2">4-6</option>
                <option value="3">7-9</option>
                <option value="4">10-12</option>
                <option value="5">13-16</option>
                <option value="6">17-20</option>
                <option value="7">21-25</option>
                <option value="8">26-29</option>
                <option value="9">30-32</option>
                <option value="10">33-35</option>
            </select>

            <label htmlFor="sheep">Sheep:</label>
            <select name='sheep'>
            <option value="0">0</option>
                <option value="1">1-3</option>
                <option value="2">4-6</option>
                <option value="3">7-9</option>
                <option value="4">10-12</option>
                <option value="5">13-16</option>
                <option value="6">17-20</option>
                <option value="7">21-25</option>
                <option value="8">26-29</option>
                <option value="9">30-32</option>
                <option value="10">33-35</option>
            </select>

            <label htmlFor="chickens">Chickens:</label>
            <select name='chickens'>
                <option value="0">0</option>
                <option value="1">1-4</option>
                <option value="2">5-9</option>
                <option value="3">10-14</option>
                <option value="4">15-19</option>
                <option value="5">20-24</option>
                <option value="6">25-29</option>
                <option value="7">30-34</option>
                <option value="8">35-39</option>
                <option value="9">40-44</option>
                <option value="10">45-50</option>
            </select>
        </form>
    </div>
  )
}
