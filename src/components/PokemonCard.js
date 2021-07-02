import React, { Component, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHeart } from '@fortawesome/free-solid-svg-icons'
import Loading from './loading'
import useFetchPokemonImage from '../services/hooks/useFetchPokemonImage'
import '../styles/cardStyle.css'
// import { addToFavorite } from '../store/actions/PokemonAction'
import { addFavorite, removeFavorite } from '../store/pokemons/action';

export default function PokemonCard(props) {

    const {data, loading, error} = useFetchPokemonImage(props.url);
    const favorite = useSelector((state) => state.pokemons.favorites);
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(checkFavorite(data.id))

    // function handleAddToFavorite(event){
    //     dispatch(addToFavorite(event.currentTarget.id));
    // }
    function handleFavorite(id) {
        if(favorite.find((element) => element === id)){
          dispatch(removeFavorite(id));
          setIsFavorite(false);
        }else{
          dispatch(addFavorite(id));
          setIsFavorite(true);
        }
    }

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

    function checkFavorite(id){
        if(favorite.find((element) => element == id))
            return true;
        return false;
    }

    return (
        <>
        {
        error != null ? 
            <Alert variant="danger">{error}</Alert> : 
            loading ? (<Loading/>) : 
                <figure className={`card card--${data.types[0].type.name}`}>
                    <div className="multi-button">
                        <button onClick={() => handleFavorite(data.id)} id={data.id} style={{color: isFavorite ? 'white' : 'red'}}>
                            <FontAwesomeIcon style={{ color: isFavorite ? 'red' : undefined }} icon={faHeart} inverse />
                        </button>
                    </div>
                    <Link to={`poke/${data.id}`}> 
                        <div className="card__image-container">
                            <img src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} alt={props.name} className="card__image"/>   
                        </div>
                    
                        <figcaption className="card__caption">
                            <h1 className="card__name">{Capitalize(data.name)}</h1>
                        
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
                    </Link>
                </figure>
        }
    </>
        
    )
}
