
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRegonition from './components/FaceRecognition/FaceRecognition';
import { Logo } from './components/Logo/Logo';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Rank } from './components/Rank/Rank';
import './App.css';
const app = new Clarifai.App({
  apiKey: '54d151f5b96945daaf10b095b1128632'
 });

const particlesOptions={
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
class App extends Component {
  constructor () {
  super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'SignIn',
      isSignedIn:false,
      users:{
        id: '',
            name: '',
            email: '',
            entries: '0',
            joined: '',
      }
    } 
  }
   loadUser = (data) => {
   this.setState({users: {
      id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
   }})
   }
   calculateFaceLocation=(data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageUrl');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
      displayFaceBox=(box)=>{  
      this.setState({box:box});
    }
   OnInputChange=(event)=>{
     this.setState({input:event.target.value});
   };
    onButtonSubmit=()=>{
      this.setState({imageUrl:this.state.input});
      app.models
      .predict( Clarifai.FACE_DETECT_MODEL,
        
        this.state.input)
      .then(response => {
        console.log('hi', response)
        if(response) {
          fetch('http://localhost:3003/image', {
          method: 'put',
          headers: { 'content-Type': 'application/json' },
          body: JSON.stringify({
          id: this.state.users.id,
          
    
        })
      }) 
       .then(response=>response.json())
       .then(count=>{
         this.setState(Object.assign(this.state.users,{entries:count}))

       })
      }
        this.displayFaceBox(this.calculateFaceLocation(response))
    })
      
      .catch((err) => console.log(err));
      
      }
   onRouteChange=(route)=>{
     if(route==='signout' || route==='signin'){
       this.setState({isSignedIn:false})
     }
       else if(route==='home'){
           this.setState({isSignedIn:true})
         }
         this.setState({route:route})
   }
 render() {
  const {isSignedIn,route,box,imageUrl} = this.state;
  return (
    <div className="App">
      <Particles className='particles'
      params={particlesOptions}
      />
             
  <Navigation isSignedIn={isSignedIn}onRouteChange={this.onRouteChange}/>
  {route==='home' ?
      <div> 
        < Logo />
        <Rank
        name={this.state.users.name}
        entries={this.state.users.entries}
         />
<ImageLinkForm  OnInputChange={this.OnInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRegonition box={box} imageUrl={imageUrl}/>
  
    </div>
    :  (
       this.state.route==='SignIn' ?
      <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
       : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    )
 }
</div>
    
  );
}
}
export default App; 
