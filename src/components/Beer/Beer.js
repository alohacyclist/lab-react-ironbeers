import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Beer.css'

export function Beer() {

    const [beerList, setBeerList] = useState([])
    const beerId = useParams()

    useEffect(() => {
        if(beerId) {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId.id}`)
                .then((response) => { setBeerList(response.data) })
        }  
    }, [beerId])

    return (
        <div className="container">
            <div className="beer_details_card">
                <div>
                    <img style={{maxWidth: '15rem', maxHeight: '20rem'}} src={beerList.image_url} alt={beerList.image_url} />
                </div>
                <div className="beer_details">
                    <div className="beer_details_divider_L">
                        <h2>{beerList.name} </h2>
                        <h4>{beerList.tagline}</h4>
                    </div>
                    <div className="beer_details_divider_R">
                        <h2>{beerList.attenuation_level}</h2>
                        <p style={{fontSize: '11px'}}>{beerList.first_brewed}</p>
                    </div>
                </div>
                <div className="beer_description" style={{width: '15rem'}}c>
                    <p>{beerList.description}</p>
                    <p style={{fontSize: '12px'}}>{beerList.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}