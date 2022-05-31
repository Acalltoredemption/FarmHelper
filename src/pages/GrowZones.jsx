import React from 'react'
import {useState, useEffect} from 'react'


export default function GrowZones() {
    const [zip, setZip] = useState(0)
    const [growzone, setGrowzone] = useState('')



    const fetchZip = async (e) => {
        e.preventDefault()
        console.log(zip)
        const data = await fetch(`https://phzmapi.org/${zip}.json`)
        .then(response => response.json())
        .then(data => setGrowzone(data.zone))
        .then(setGrowzone(data.zone))
    }


    const handleChange = (e) => setZip(e.target.value)

  return (
    <div className="w-full max-w-xs mx-auto">
      <p>Please enter a valid 5 digit zipcode</p>
  <form onSubmit={fetchZip} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="zipcode">
        Zip Code
      </label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" onChange={handleChange} value={zip} id="username" type="number" placeholder="Your 5 digit zip"/>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={fetchZip} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </form>
    {growzone && (
      <p>Your grow zone is : {growzone}</p>
    )}
</div>
  )
}
