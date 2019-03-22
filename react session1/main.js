import React , { Component} from 'react';
import './mainstyle.css'
//import './asidestyle.css'

class Main extends Component{
    render(){
        return(

                <div className='maincls'>
                    <h6>Body</h6>
                    <button className='btn' onClick={this.props.counter}> incrementor </button>
                </div>


        );
    }

}
export default Main;