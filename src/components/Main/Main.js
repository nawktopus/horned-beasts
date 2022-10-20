import React from "react";
import HornedBeast from '../HornedBeast/HornedBeast.js';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {

        let hornedBeast = this.props.data.map((beast, index) => {
               return <HornedBeast
                    id={beast._id}
                    image_url ={beast.image_url}
                    title ={beast.title}
                    description ={beast.description}
                    keyword ={beast.keyword}
                    horns ={beast.horns}
                    key={index}
                    addH={this.props.addH}
                    handleOpenModal={this.props.handleOpenModal}
                />

        });

        return(
            <>
            <main>
                <Container>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {hornedBeast}
                     </Row>
                </Container>
            </main>
            </>
        )
    }
}

export default Main;