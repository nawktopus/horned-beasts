//imports
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js'
import '../App/App.css';
import Footer from '../Footer/Footer.js'
import data from '../../data.json';
import SelectedBeast from '../SelectedBeast/SelectedBeast.js';

//class component
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: '',
    };
  }

  addH = () => {
    this.setState({
      heart: this.state.heart + '❤️'
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleOpenModal = (key) => {
    this.setState({ showModal: true });
    const filterBeasts = data.filter((beast)=> {
      return beast._id === key;
    })  
    this.setState({selectedBeast: filterBeasts[0]})
  };

  render(){
    return (
      <>
      <Header 
        heart={this.state.heart}
      />
      <SelectedBeast
        showModal={this.state.showModal}
        handleCloseModal={this.handleCloseModal}
        selectedBeast={this.state.selectedBeast}
      />
      <Main 
        addH={this.addH}
        handleOpenModal={this.handleOpenModal}
        data={data}
      />
      <Footer/>
      </>
    )
  }
}

//export
export default App;
