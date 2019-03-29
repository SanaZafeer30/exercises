import React, { Component } from 'react';
import './App.css'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter1:0,
            counter2:0,
            counter3:0

        }
    }
addall=()=>{
        this.setState({
            counter1:this.state.counter1+=1,
            counter2:this.state.counter2+=1,
            counter3:this.state.counter3+=1
        })

}

   subtractall=()=>{
        this.setState({
            counter1:this.state.counter1-=1,
            counter2:this.state.counter2-=1,
            counter3:this.state.counter3-=1

        })
    }



    //increase&decreaseCounter1

    funadd1=()=> {
        this.setState({
            counter1: this.state.counter1+=1

    });
    }

    funsubt1=()=>{
        this.setState({
            counter1:this.state.counter1-=1
        });
    }


    //increase&decreaseCounter2

    funadd2 = () =>{
        this.setState( {
            counter2:this.state.counter2+=1
        });
    }

    funsubt2=()=>{
        this.setState({
            counter2:this.state.counter2-=1
        });
    }


    //increase&decreaseCounter3
    funadd3= ()=>{
        this.setState( {
            counter3:this.state.counter3+=1
        });
    }

    funsubt3=()=>{
        this.setState({
            counter3:this.state.counter3-=1
        });
    }


    render() {
        return(
            <div className='parent'>

                <CounterOne num1={this.state.counter1} inc={this.funadd1} dec={this.funsubt1}/>
                <CounterTwo num2={this.state.counter2} inc={this.funadd2} dec={this.funsubt2}/>
                <CounterThree num3={this.state.counter3} inc={this.funadd3} dec={this.funsubt3}/>
                <button onClick={this.addall}>Increase</button>
                <button onClick={this.subtractall}> decrease </button>
            </div>
        );
    }



}
export default App;

//child1
class CounterOne extends React.Component {

    render() {
        return(
            <div>
                <button onClick={this.props.inc}> Add-1 </button>
                <h2>{this.props.num1} </h2>
                <button onClick={this.props.dec}> Sub-1 </button>
            </div>

        );
    }
}
//child2

class CounterTwo extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.inc}> Add-2 </button>
                <h2>{this.props.num2} </h2>
                <button onClick={this.props.dec}> Sub-2 </button>
            </div>

        );
    }
}

//child3

class CounterThree extends React.Component {


    render(){
        return (
            <div>
                <button onClick={this.props.inc}> Add-3 </button>
                <h2>{this.props.num3} </h2>
                <button onClick={this.props.dec}> Sub-3 </button>
            </div>
        );
    }
}
