import React, { useEffect , useState } from 'react'
import { Alert , Col , Container , Row } from 'react-bootstrap'
import Loading from '../components/loading'
import PokemonCard from '../components/PokemonCard'
import useFetchPokemon from '../services/hooks/useFetchPokemon'

const Pokemon = () => {
    const {data , loading, error} = useFetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=12");

    const [listItems, setListItems] = useState();
    const [isFetching, setIsFetching] = useState(false);
    const [nextData, setNextData] = useState(null);

    useEffect(() => {
        setListItems(data.results);
        setNextData(data.next);
    }, [data]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    useEffect(() => {
        if (!isFetching) return;
        fetchMorePokemon();
    }, [isFetching]);

    function fetchMorePokemon() {
        fetch(nextData)
        .then(res => res.json())
        .then(data => {
            setListItems(prevState => ([...prevState, ...data.results]));
            setIsFetching(false);
            setNextData(data.next);
        })
        .catch(err => console.log(err));
    }

    if(!listItems){
        return (<Loading/>);
    }

    return (
        <> {/** <-- tanda ini namanya fragment,, sebenarnya sama aja seperti <fragment></fragment> */}
            <Container fluid className="pokemon-homepage">
                <h1>Pokémon List</h1>
            {error != null ?
                <Alert variant="danger">{error}</Alert> :
                loading ? 
                (<Loading/>) :
                <>
                    <Row>
                        {listItems.map((poke) => {
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
            {/* {isFetching && 'Fetching more list items...'} */}
        </>
    )
}
export default Pokemon;
