import React, { Component } from 'react';
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import Aside from "./component/aside";

class App extends Component {

    state={
        count:0
    }

    incrementor = (count) => {
        this.state.count+=1;
        this.setState({count:this.state.count})
};




  render() {
    return (
      <div>
        <Header hcounter={this.state.count}/>
        <Main counter={this.incrementor}/>
        <Aside/>
        <Footer/>

      </div>
    );
  }
}

export default App;
