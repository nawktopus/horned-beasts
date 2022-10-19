import React from 'react';
import '../HornedBeast.css';
import Button from 'react-bootstrap/Button';

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
        console.log('app state', this.state);
        return(
            <article>
                <h2>{this.props.keyword} </h2>
                <img class="img-responsive" src={this.props.image_url} alt= {this.props._id} onClick={this.handleHearts}/>
                <p> {this.props.description} </p>
                <p> ❤️ {this.state.hearts} Fave</p>
                <Button onClick={this.needsHelp} variant="danger" > Help! </Button>
                <Button onClick={this.gotHelp} variant="success" > O.K. </Button>
                <div>{this.state.helpMe ? 'I need help' : ''}</div>
            </article>
        )
    }
}



export default HornedBeast;