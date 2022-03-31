import { React, useState, useEffect } from 'react'
import axios from 'axios';
import '../Beer/Beer.css'

export function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
                .then((response) => { setRandomBeer(response.data) })
    }, [])

    return (
        <div className="container">
            <div className="beer_details_card">
                <div>
                    <img style={{maxWidth: '15rem', maxHeight: '20rem'}} src={randomBeer.image_url} alt={randomBeer.image_url} />
                </div>
                <div className="beer_details">
                    <div className="beer_details_divider_L">
                        <h2>{randomBeer.name} </h2>
                        <h4>{randomBeer.tagline}</h4>
                    </div>
                    <div className="beer_details_divider_R">
                        <h2>{randomBeer.attenuation_level}</h2>
                        <p style={{fontSize: '11px'}}>{randomBeer.first_brewed}</p>
                    </div>
                </div>
                <div className="beer_description" style={{width: '15rem'}}c>
                    <p>{randomBeer.description}</p>
                    <p style={{fontSize: '12px'}}>{randomBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}