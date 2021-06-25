import useFetchUsers from '../services/hooks/useFetchUsers'
import ProfileCard from "../components/profile-card"
import {Container, Row, Col, Alert} from 'react-bootstrap'
import Loading from '../components/loading'

const FriendRecommendationFunction = () => {
    const {data , loading, error} = useFetchUsers("https://randomuser.me/api/?results=20")

    return (
        <> {/** <-- tanda ini namanya fragment,, sebenarnya sama aja seperti <fragment></fragment> */}
            <Container fluid>
                <h1>Friend Recommendation</h1>
            {error != null ?
                <Alert variant="danger">{error}</Alert> :
                loading ? 
                (<Loading/>) :
                <>
                    <Row>
                        {data.map((user, index) => {
                            return <Col><ProfileCard key={index}
                            user={user}
                            first_name={user.name.first} 
                            last_name={user.name.last} 
                            picture={user.picture.large}
                            city={user.location.city}
                            country={user.location.country}
                            uuid={user.login.uuid} 
                            onDetail={(user)=>this.handleDetail(user)}/></Col>
                        })}
                    </Row>
                </>
                }
            </Container>
        </>
    )
}

export default FriendRecommendationFunction