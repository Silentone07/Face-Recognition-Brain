import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      email:'',
      password:'',
      name:''
    }
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
    }

  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
    }
    onPasswordChange=(event)=>{
      this.setState({password:event.target.value})
      }
      onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('http://localhost:3003/register', {
          method: 'post',
          headers: { 'content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name:this.state.name,
    
          })
        }) 
        .then(Response =>Response.json())
        .then(user=>{
          if(user) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
        })
      }
  render() {
    return(
      <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
   <main className=" centre pa2 black-50">
<div className="measure center">
<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
 <legend className="f1 fw6 ph0 mh0">Register</legend>
 <div className="mt3">
   <label className="db fw6 lh-copy f6" htmlfor="name">name</label>
   <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
   type="text"
    name="name"  
    id="name"
    onChange={this.onNameChange}
    />
 </div>
 <div className="ma3">
 <label className="db fw6 lh-copy f6" htmlfor="email-address">email</label>
 <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
 type="email" 
 name="email-address" 
  id="email-address"
  onChange={this.onEmailChange}
  />
 </div>
 <div className="mv3">
   <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
   <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
   type="password" 
   name="password" 
    id="password"
    onChange={this.onPasswordChange}
    />

 </div>
 <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
</fieldset>
<div className="">
<input  onClick={this.onSubmitSignIn}
class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
</div>
</div>
</main>
</article>
)
} 
 }
   export default Register;

