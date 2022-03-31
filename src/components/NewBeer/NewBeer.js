import { React, useState } from 'react'
import './NewBeer.css'
import axios from 'axios'

export function NewBeer() {

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_Brewed] = useState('')
  const [brewers_tips, setBrewers_Tips] = useState('')
  const [attenuation_level, setAttenuation_Level] = useState(0)
  const [contributed_by, setContributed_By] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = 'https://ih-beers-api2.herokuapp.com/beers/new'
    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    }
    await axios.post(url, data).then(response => {console.log(response)})
  }

  return (
    <div className="form_container">
        <form onSubmit={handleSubmit} className="new_beer_form">
            <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Beer Name"></input>
            <input onChange={(e) => setTagline(e.target.value)}  type="text" placeholder="Tagline"></input>
            <textarea onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="Description"></textarea>
            <input onChange={(e) => setFirst_Brewed(e.target.value)}  type="text" placeholder="First Brewed"></input>
            <input onChange={(e) => setBrewers_Tips(e.target.value)} type="text" placeholder="Brewers Tips"></input>
            <input onChange={(e) => setAttenuation_Level(e.target.value)}  type="number" placeholder="Attenuation Level"></input>
            <input onChange={(e) => setContributed_By(e.target.value)}  type="text" placeholder="Contributed by"></input>
            <button type="submit">Add Beer</button>
        </form>
    </div>
  )
}
