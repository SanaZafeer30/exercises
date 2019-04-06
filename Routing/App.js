import React , {Component} from 'react';
import Books from './component/Books';
import './component/allStyle.css';
import Login from './component/Login';

import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';


class App extends  Component{
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password: '',
            book:
                [{
                    name: 'You Can Win' ,
                    desc: 'Author- Shiv kheda ' +
                        ' Gener-Motivational book' +
                        'Type- non-fictional'
                },
                    {
                        name:'Monk who sold his ferrari' ,
                        desc:'Author- Robin Sharma ' +
                            'Gener-Motivational book' +
                            'Type- non-fictional'
                    },

                    {
                        name:'Inferno' ,
                        desc:'Author- Dan Brown ' +
                            'Genre-Sci-Fi' +
                            'Popularity: Bestsellar'
                    },

                    {
                        name: 'Who will cry when you die',
                        desc:'Author- Robin Sharma ' +
                            'Genre-Motivational book' +
                            'Type- non-fictional'
                    },

                    {
                        name:'Unearthly',
                        desc: 'Author- Cynthia Hand  ' +
                            ' Genre-Young fiction'

                    }
                ]
        }

    }

    render(){
        return(
            <div className='parent'>

           <Router>

               <Switch>
                 <Route  exact path='/login' component={Login}/>
                 <Route  path='/bookstore' component={() =>  <Books booklist={this.state.book}/>}/>
               </Switch>


           </Router>

            </div>
        );
    }

} export default App ;
