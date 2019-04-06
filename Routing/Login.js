import React , {Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={

            user: 'sanazafeer',
            password: '24680' ,
            tempUser:'',
            tempPassword:'' ,
            valid:1

        };
    }

    onChangeUser = (event)=>{
        this.setState({
            tempUser:event.target.value
        });
    }

    onChangePswd = (event)=>{
        this.setState({
            tempPassword:event.target.value
        });
    }

    onSubmit=(event)=> {
        event.preventDefault();

           const usr= this.state.user===  this.state.tempUser  ;
           const pswd= this.state.tempPassword === this.state.password;

        (usr && pswd) ?
          this.props.history.push('/bookstore')
        :
                alert('invalid  user details');
    }

    render(){
        return(
            <div className='form-div'>
               <form className='form' onSubmit={this.onSubmit}>

                   <h3 className='form-head'>LOGIN </h3>

                        <input className='inputName' type='text'
                        value={this.state.tempUser}
                        onChange={this.onChangeUser}
                        placeholder='Enter User Id'
                        />

                        <input className='inputPswd' type='text'
                        value={this.state.tempPassword}
                        onChange={this.onChangePswd}
                               placeholder='Enter User Password'
                        />

                        <button className='loginbtn'>Login</button>
               </form>

                <div className='foot'>login to read</div>

            </div>
                        );

                        } } export default Login ;




