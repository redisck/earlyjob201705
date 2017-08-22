import React,{Component} from 'react';
export default class Login extends Component{
  constructor(){
    super();
    this.state = {username:'',password:''};
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">用户名</label>
        <input value={this.state.username} type="text" id="username" onChange={(event)=>this.setState({username:event.target.value})}/>
        <label htmlFor="password">密码</label>
        <input value={this.state.password} type="text" id="password" onChange={(event)=>this.setState({password:event.target.value})}/>
        <input type="submit"/>
      </form>
    )
  }
}
