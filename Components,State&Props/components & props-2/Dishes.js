import React, {Component} from 'react';


class Dishes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dish : null
        }

    }

    detailsFun=(name)=> {
        let {dishlist} = this.props;
        dishlist.map((item) => {
            if(item.name === name){
                console.log(item);
            };
        })
    }




    renderText = (item) => {
        console.log(item);
        if(item)
        return <h2>{item}</h2>;
    }




    render()

        {

         let {dishlist}=this.props;
           return (
            <div>

                <ul>
                    {
                        dishlist.map( (item,index) => {
                            return  <li>
                                {item.name}    <button onClick={()=>this.detailsFun(item.name)}>Click </button>
                                <div>{this.renderText(this.state.dish)}</div>
                            </li>

                    })
                    }
                </ul>



            </div>
        );
    }


}
export default Dishes;