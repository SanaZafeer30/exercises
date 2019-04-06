import React, {Component} from 'react';


class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: null
        }


    }

   detailsFun=(val)=> {
       let {booklist} = this.props;

       const list = booklist.map((item) => {
           if (item.desc == val)
               return item.desc
       })

       this.setState({

           desc: list
       })

   }


    render(){

        let {booklist}=this.props;

        return (
            <div className='bookstore'>
                <div className='header'>  <h2 className='bookstore-head'>Welcome to Book-Store</h2> </div>

                <ul>
                    {
                        booklist.map( (item) => {
                            return <li className='booklist'>
                                {item.name}
                                <button className='detailsbtn' onClick={() => this.detailsFun(item.desc)}>Click</button>

                            </li>
                        })



                        }

                    <div className='description' > {this.state.desc} </div>
                </ul>
            </div>
        );
    }


}
export default Books;
