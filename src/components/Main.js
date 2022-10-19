import React from "react";
import HornedBeast from './HornedBeast.js';
import data from '../data.json';
import '../Main.css';

class Main extends React.Component {
    render() {
        let hornedBeast = [];
        
        data.forEach((beast, index)=> {
            hornedBeast.push(
                <HornedBeast 
                    _id ={beast._id}
                    image_url ={beast.image_url}
                    title ={beast.title}
                    description ={beast.description}
                    keyword ={beast.keyword}
                    horns ={beast.horns}
                    key={index}
                />
            )
        });

        return(
            <>
                <main>
                    {hornedBeast}
                </main>
            </>
        )
    }
}

export default Main;