import React from 'react'

export const SignIn = ({onRouteChange}) => {
    return (
        <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className=" centre pa2 black-50">
  <form className="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" Htmlfor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" Htmlfor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
<input 
  onClick={()=>onRouteChange('home')}
 class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign-In"/>
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>onRouteChange('register')} class="f6 link dim black db pointer">Resgister</p>
    </div>
  </form>
</main>
</article>

    )
}
 export default SignIn; 
