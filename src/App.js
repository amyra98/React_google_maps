import React,{Component} from "react";
import { Map,GoogleApiWrapper } from "google-maps-react";

const style={
   width:"100%",
   height:"100%"
}

class App extends Component{
  
  render(){
   
    return <>
    
    <Map initialCenter={{
      // cordinates for Varanasi you can use other too
      lat: 25.317644,  
      lng: 82.973915
    }} 
    google={this.props.google}
    zoom={14}    
    containerStyle={style}
    />
    </>
  }
}

export default GoogleApiWrapper({
  apiKey : "AIzaSyDBc9NXAG8bCiUjhGUuz_B6qmLxLf87LiA"
})(App);

