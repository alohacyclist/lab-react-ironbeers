import React from 'react'
import "./Home.css"
import allbeers_img from "../../assets/beers.png"
import randombeer_img from "../../assets/random-beer.png"
import newbeer_img from "../../assets/new-beer.png"
import { Link } from 'react-router-dom'


export function Home() {
  return (
    <div className="start_wrapper">
        <div className="container_start">
                <img src={allbeers_img} alt={"beerdispenser at bar"}/>
                <div className="section_start">
                <Link to={"/beers"} ><h1>All Beers</h1></Link>
                <p>A wanker wakes up, and another infected porter intoxicatedly 
                ignores a crazy monkey bite. When a cantankerous freight train
                 gets stinking drunk, a bill from the chain saw dies. For example,
                  the crispy bar tab indicates that the satellite brewery for a keg 
                  gives a stink finger to a dumbly dry Avery IPA. Indeed, a barely 
                  shabby Honey Brown requires assistance from a Heineken over a Keystone light.</p>
            </div>
        </div>
        <div className="container_start">
                <img src={randombeer_img} alt={"beerdispenser close up"}/>
                <div className="section_start">
                <Link to={"/random-beer"} ><h1>Random Beer</h1></Link>
                <p>A wanker wakes up, and another infected porter intoxicatedly 
                ignores a crazy monkey bite. When a cantankerous freight train
                 gets stinking drunk, a bill from the chain saw dies. For example,
                  the crispy bar tab indicates that the satellite brewery for a keg 
                  gives a stink finger to a dumbly dry Avery IPA. Indeed, a barely 
                  shabby Honey Brown requires assistance from a Heineken over a Keystone light.</p>
            </div>
        </div>
        <div className="container_start">
                <img src={newbeer_img} alt={"draft-beer in glass with beer bottle"}/>
                <div className="section_start">
                <Link to={"/new-beer"} ><h1>New Beer</h1></Link>
                <p>A wanker wakes up, and another infected porter intoxicatedly 
                ignores a crazy monkey bite. When a cantankerous freight train
                 gets stinking drunk, a bill from the chain saw dies. For example,
                  the crispy bar tab indicates that the satellite brewery for a keg 
                  gives a stink finger to a dumbly dry Avery IPA. Indeed, a barely 
                  shabby Honey Brown requires assistance from a Heineken over a Keystone light.</p>
            </div>
        </div>
    </div>
    
  )
}

