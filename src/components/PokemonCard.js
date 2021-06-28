import React, { Component, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loading from './loading'
import PokemonTyping from './PokemonTyping'
import useFetchPokemonImage from '../services/hooks/useFetchPokemonImage'
import '../styles/cardStyle.css'

export default function PokemonCard(props) {

    const {data, loading, error} = useFetchPokemonImage(props.url)

    function Capitalize(str){
        str = str.replace('-',' ')
        let arr = str.replace(/\s+/g,' ').trim().split(' ')
        let result = ''

        for (let i = 0; i < arr.length; i++) {
            if(arr[i][0])
                result += arr[i][0].toUpperCase() + arr[i].slice(1)
            result += ' '
        }
        return result
    }

    return (
        <>
        {
        error != null ? 
            <Alert variant="danger">{error}</Alert> : 
            loading ? (<Loading/>) : 
            <Link to={`poke/${data.id}`}>
                <figure className={`card card--${data.types[0].type.name}`}>
                    <div className="card__image-container">
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} alt="Eevee" className="card__image"/>   
                    </div>
                
                <figcaption className="card__caption">
                <h1 className="card__name">{Capitalize(props.name)}</h1>
            
                <h3 className="card__type">
                    {data.types[0].type.name}
                    {data.types[1] ? <span>- 
                        {data.types[1].type.name}
                    </span> : <></>}
                </h3>
                
                <div className="card__abilities">
                    <h5 className="card__ability">
                    <span className="card__label">Ability</span>
                    {Capitalize(data.abilities[0].ability.name)}
                    </h5>
                    <h5 className="card__ability">
                    <span className="card__label">Hidden Ability</span>
                    {data.abilities[1] ? <span>{Capitalize(data.abilities[1].ability.name)}</span> : <></>}
                    </h5>
                </div>
                </figcaption>
            </figure>
        </Link>
        }
    </>
        
    )

    // return (
    //     <>
    //     {
    //     error != null ? 
    //         <Alert variant="danger">{error}</Alert> : 
    //         loading ? (<Loading/>) : 
    //             <Card className="mx-auto my-2" style={{ width: '18rem' }}>
    //                 <Card.Img className="p-2" src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} />
    //                 {/* <Card.Img className="p-2" src={data.sprites.front_default} /> */}
    //                 <Card.Body>
    //                     <Card.Title>{Capitalize(props.name)}</Card.Title>
    //                     <Card.Subtitle>
    //                         <PokemonTyping type={data.types} count={data.types.length}/>
    //                     </Card.Subtitle>
    //                     <br/>
    //                     <Link to={`poke/${data.id}`}>Detail</Link>
    //                     <Button style={{ width:"100%" }} variant="primary" onClick={()=>this.props.onDetail(this.props.user)}>Detail</Button>
    //                 </Card.Body>
    //             </Card>
    //     }
    // </>
        
    // )
}
