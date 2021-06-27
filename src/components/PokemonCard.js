import React, { Component } from 'react'
import {Button , Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loading from './loading'
import PokemonTyping from './PokemonTyping'
import useFetchPokemonImage from '../services/hooks/useFetchPokemonImage'

export default function PokemonCard(props) {

    const {data, loading, error} = useFetchPokemonImage(props.url)

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
        {
        error != null ? 
            <Alert variant="danger">{error}</Alert> : 
            loading ? (<Loading/>) : 
                <Card className="mx-auto my-2" style={{ width: '18rem' }}>
                    <Card.Img className="p-2" src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} />
                    {/* <Card.Img className="p-2" src={data.sprites.front_default} /> */}
                    <Card.Body>
                        <Card.Title>{Capitalize(props.name)}</Card.Title>
                        <Card.Subtitle>
                            <PokemonTyping type={data.types} count={data.types.length}/>
                        </Card.Subtitle>
                        <br/>
                        <Link to={`poke/${data.id}`}>Detail</Link>
                        <Button style={{ width:"100%" }} variant="primary" onClick={()=>this.props.onDetail(this.props.user)}>Detail</Button>
                    </Card.Body>
                </Card>
        }
    </>
        
    )
}
