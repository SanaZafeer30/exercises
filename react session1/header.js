import React , { Component } from 'react';
import './headstyle.css'
class Header extends Component{
    render(){
        return(

            <header className="headcls">
                <h6> Welcome , this is Header</h6>
                <h5>  {this.props.hcounter}   </h5>
            </header>


        );
    }
}
export default Header;

