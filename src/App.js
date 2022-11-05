
import React from 'react'
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp'

class App extends React.Component{

  constructor(props){
super(props)
this.state = {
  isSignedUp: false
}

  }

userAuthChangeCallback = ()=>{
this.setState({isSignedUp: true})



}


showWelcome=()=>{
  if(this.state.isSignedUp ){
return <Welcome/>


  }
  else{

    return <SignUp userAuthChanged={this.userAuthChangeCallback}/>
  }
}

 render() {
  return (
    <div className="App">
    //{this.state.isSignedUp && <Welcome/>}
    {this.showWelcome()}
    </div>
   );
  }
 }

export default App;
