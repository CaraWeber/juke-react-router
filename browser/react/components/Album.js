'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import {fetchAndGoToAlbum} from '../action-creators/albums';
import store from '../store';

 
export default class Album extends React.Component {

	componentWillMount(){
	  fetch(`/api/albums/${this.props.params.albumId}`)
      .then(res => res.json())
      .then(album => {
        store.dispatch({type: 'RECEIVE_ALBUM', album});
        // dispatch(switchLocation('album'));
      })
      .catch(err => console.error(err.stack));
	}
	render(){
		console.log("in render");
		console.log("PROPS:  ", this.props);
	if (!this.props.selectedAlbum.songs) return <h1>Loading album...</h1>;
	else {
		return (
		  <div className="album">
		    <div>
		      <h3>{ this.props.selectedAlbum.name }</h3>
		      <img src={ this.props.selectedAlbum.imageUrl } className="img-thumbnail" />

		    </div>
		    <SongsContainer songs={this.props.selectedAlbum.songs} />
		  </div>
			) 
		}
	}
}

