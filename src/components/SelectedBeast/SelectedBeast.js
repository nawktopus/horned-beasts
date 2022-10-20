import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
    render() {
        return( 
            <>
                <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>

                    <Modal.Header closeButton>
                            <Modal.Title>{this.props.selectedBeast.keyword}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                            <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                    </Modal.Body>

                    <Modal.Footer>
                            <Card.Img src={this.props.selectedBeast.image_url}></Card.Img>
                    </Modal.Footer>

                </Modal>
            
            </>
        );
    }
}

export default SelectedBeast;