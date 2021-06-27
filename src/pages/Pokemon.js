import React from 'react'
import { Alert , Col , Container , Row } from 'react-bootstrap'
import Loading from '../components/loading'
import PokemonCard from '../components/PokemonCard'
import useFetchPokemon from '../services/hooks/useFetchPokemon'

export default function Pokemon() {
    const {data , loading, error} = useFetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=12")

    return (
        <> {/** <-- tanda ini namanya fragment,, sebenarnya sama aja seperti <fragment></fragment> */}
            <Container fluid>
                <h1>Pokemon List</h1>
            {error != null ?
                <Alert variant="danger">{error}</Alert> :
                loading ? 
                (<Loading/>) :
                <>
                    <Row>
                        {data.results.map((poke) => {
                            return <Col key={poke.url}>
                                <PokemonCard
                                    name={poke.name}
                                    url={poke.url}
                                />
                            </Col>
                        })}
                    </Row>
                </>
                }
            </Container>
        </>
    )
}
