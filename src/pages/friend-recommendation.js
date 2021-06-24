import React, { Component } from "react"
import ProfileCard from "../components/profile-card"
import {Container, Row, Col} from 'react-bootstrap'

class FriendRecommendation extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Friend Recommendation',
            friendList: [],
            friendSuggestion: []
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=8")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                friendSuggestion: data.results
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }

    handleDetail(todoDetail){
        console.log(todoDetail);
    }

    render () {
        return (
            <Container fluid>
                <h1>{this.state.title}</h1>
                <Row>
                    {this.state.friendSuggestion.map((user, index) => {
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
        )
    }
}

export default FriendRecommendation