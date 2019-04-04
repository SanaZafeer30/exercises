import React, {Component} from 'react';
import Adddish from './component/Adddish';
import Dishes from './component/Dishes';
import './component/Allstyle.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dish:
                [{
                    name: 'Chicken butter masala',
                    desc: '  Chicken butter masala - Cost-Rs.220 ,Non-veg',
                    img: 'http://adityarestaurant.com/wp-content/uploads/2018/04/paneer-butter-masala-recipe-100x100.jpg'
                },


                    {
                        name: 'Dosa',
                        desc: ' Dosa - Cost-Rs.120 ,Veg',

                    }
                    ,

                    {
                        name: 'Chicken korma',
                        desc: 'Chicken korma -  Cost-Rs.200 , Non-veg',

                    }
                    ,
                    {
                        name: 'Chole-Bhature',
                        desc: ' Chole-Bhature - Cost-Rs.150 ,Veg',


                    }
                ]
        }

    }


    //function to addDish manually


    addNewDish = (e, newdish) => {
        e.preventDefault();
        console.log(newdish);
        let {name, desc} = newdish;
        this.setState({
            dish: [
                ...this.state.dish, {name: name, desc: desc}
            ]
        })

    }

    render() {
        return (
            <div className='wrapper'>
                <div className='dish-container'>
                    <Dishes dishlist={this.state.dish}/>
                    <Adddish additem={this.addNewDish}/>
                </div>
            </div>
        );
    }

}

export default App;
