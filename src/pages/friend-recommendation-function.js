import useFetchUsers from '../services/hooks/useFetchUsers'
import ProfileCard from "../components/profile-card"
import {Container, Row, Col} from 'react-bootstrap'

const FriendRecommendationFunction = () => {
    const {data , loading, error} = useFetchUsers("https://randomuser.me/api/?results=8")

    return (
        <> {/** <-- tanda ini namanya fragment,, sebenarnya sama aja seperti <fragment></fragment> */}
            <Container fluid>
                <h1>Friend Recommendation</h1>
                <Row>
                    {data.map((user, index) => {
                        return <Col><ProfileCard key={index}
                        user={user}
                        first_name={user.name.first} 
                        last_name={user.name.last} 
                        picture={user.picture.large}
                        city={user.location.city}
                        country={user.location.country} 
                        onDetail={(user)=>this.handleDetail(user)}/></Col>
                    })}
                </Row>
            </Container>
            <pre>Loading: {JSON.stringify(loading, null, 2)}</pre>
            <pre>Error: {JSON.stringify(error, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default FriendRecommendationFunction