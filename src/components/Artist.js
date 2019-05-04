import React from 'react';

const Artist = ( props ) => {
    return (
        <div>
        <h1>Audio API Caller</h1>
   
        <form onSubmit={props.getArtist} >
          <input type="text" placeholder="Example: Coldplay" name='artist' ></input>
          <button>Search</button>
        </form>
   
       </div>
    )

}

export default Artist;