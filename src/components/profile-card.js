import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

export default class ProfileCard extends Component {
    render() {
        return (
            <Card class="mx-auto" style={{ width: '18rem' }}>
                <Card.Img class="p-2" src={this.props.picture} />
                <Card.Body>
                    <Card.Title>{this.props.first_name} {this.props.last_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.city}, {this.props.country}</Card.Subtitle>
                    <Button variant="primary" onClick={()=>this.props.onDetail(this.props.user)}>Follow</Button>
                </Card.Body>
            </Card>
        )
    }
}
