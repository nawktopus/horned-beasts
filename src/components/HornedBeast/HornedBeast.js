import React from 'react';
import '../HornedBeast/HornedBeast.css';
import Button from 'react-bootstrap/Button';
import { Card, Col } from 'react-bootstrap';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hearts: 0,
            helpMe: false,
        };
    };

    needsHelp = () => {
        this.setState({
            helpMe: true,
        });
    }

    gotHelp = () => {
        this.setState({
            helpMe: false,
        });
    }

    handleHearts = () => {
        this.setState({
            hearts: this.state.hearts + 1,
        });
    }

    render() {
        return(
            <Col>
                <Card>
                <Card.Title onClick={this.handleHearts}>{this.props.keyword}</Card.Title>
                <Card.Img
                src={this.props.image_url} 
                alt= {this.props._id} 
                onClick={() => this.props.handleOpenModal(this.props.id)}
                />
                <p> {this.props.description} </p>
                <p> ❤️ {this.state.hearts} Fave</p>
                <Button onClick={this.needsHelp} variant="danger" > Help! </Button>
                <Button onClick={this.gotHelp} variant="success" > O.K. </Button>
                <div>{this.state.helpMe ? 'I need help' : ''}</div>
                </Card>
            </Col>
        )
    }
}



export default HornedBeast;