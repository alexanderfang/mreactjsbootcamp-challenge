import React from 'react'
import { useParams } from 'react-router-dom'
import { Accordion, Card, Image, Row, Table } from 'react-bootstrap'
import Loading from '../components/loading'
import PokemonTyping from '../components/PokemonTyping'
import useFetchPokemonImage from '../services/hooks/useFetchPokemonImage'

export default function PokemonDetail(props) {
    const {id} = useParams()
    const {data, loading, error} = useFetchPokemonImage(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(data)

    if(data.id == null){
        return <Loading />
    }

    function Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Row>
            <Table bordered className="my-2">
            <tbody>
                <tr>
                    <td><Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} width="200px"/></td>
                    <td rowSpan="3">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Moves
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Table>
                                            <tbody>
                                                {data.moves.map((move, index) => {
                                                    return <tr key={index}>
                                                        <td>{move.move.name}</td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </td>
                    <td>
                        <h2>Sprites:</h2>
                        <Image src={data.sprites.front_default}></Image>
                        <Image src={data.sprites.front_shiny}></Image>
                        <br/>
                        <Image src={data.sprites.back_default}></Image>
                        <Image src={data.sprites.back_shiny}></Image>
                    </td>
                </tr>
                <tr>
                    <td rowSpan="2">
                        <h2>{Capitalize(data.name)}</h2>
                        <PokemonTyping type={data.types} count={data.types.length}/>
                    </td>
                    <td>
                        <h2>Abilities:</h2>
                        {data.abilities.map((ability, index) => {
                            return <div key={index}>
                                {Capitalize(ability.ability.name)}
                                <span style={{ fontSize:"10px" }}>{ability.is_hidden ? "(Hidden Ability)" : ""}</span>
                            </div>
                        })}
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Stats:</h2>
                        {data.stats.map((stat, index) => {
                            return <div key={index}>
                                {stat.stat.name} : {stat.base_stat}
                            </div>
                        })}
                    </td>
                </tr>
            </tbody>
            </Table>
        </Row>
    )
}
