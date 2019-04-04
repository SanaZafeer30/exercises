import React , {Component} from 'react';



export default  class Adddish extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        this.setState({

        })

    }


    //function to addDish

        onChange = e => {
        let {name,value}=e.target;
         this.setState({
             [name]:value
         })

        }


        render(){
            return(
                <div className='additem'>
                            <form  onSubmit={(e)=>this.props.additem(e,this.state)}>


                                    <input className='dishName'
                                    placeholder="Enter Dish Name "
                                    type='text'
                                    name='name'
                                    onChange={this.onChange}
                                />



                                    <input className='dishDesc'
                                    placeholder="Enter Dish Description "
                                    type='text'
                                    name='desc'
                                    onChange={this.onChange}

                                />




                                <button className='addDishbtn' type="submit">add</button>
                            </form>
                        </div>
            );
        }

    }
