import React, { Component } from 'react';
import './App.css';
import axios from "axios";

//http://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay

//res.data.artists.strArtist

import Artist from './components/Artist'

class App extends Component {

  state = {
    'discography': null
  }

  getArtist = (e) => {
    e.preventDefault()
    const artist = e.target.elements.artist.value;
    if (artist) {
      axios.get(`https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}`)
      .then((res) =>  {
        const discography = res.data.album.map(album => {
          return <li className="albumNames"><img className="albumCovers" src={album.strAlbumThumb}></img><p>{album.strAlbum}</p></li>
        })
        this.setState({ discography })
      })
    } else return

  }

  render () { 
    return (
    <div className="App">

     <Artist getArtist={this.getArtist}/>

     { this.state.discography ? <ol className="list">{this.state.discography}</ol> :
     <p>Search for an Artist!</p> }
 
    </div>
  );
}}
 

export default App;
