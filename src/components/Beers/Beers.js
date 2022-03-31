import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Beers.css';
import { Loader } from '../'

export function Beers() {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false)

    const handleLoading = () => {
        return [
            loading ? <Loader /> : null,
            () => setLoading(true),
            () => setLoading(false)
        ]
    }

    const [loader, showLoader, hideLoader] = handleLoading()

    useEffect(() => {
        showLoader()
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            hideLoader()
            setBeers(response.data)
        })
    },[showLoader, hideLoader])

    return (
        <div className="beers_list">
                    {loader}
            {beers.map(beer => {
                return (
            <div key={beer._id} className="beer_card">
                <Link to={`/beer/${beer._id}`} >
                <div className="beer_img_container">
                    <img className="beer_img" src={beer.image_url} alt={beer.image_url}/>
                </div>
                </Link>
                <div className="beer_info">
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
                
            </div>
            )
        })}
        </div>
    )
}