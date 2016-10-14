'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import { Link} from 'react-router'
import store from '../store';
import {fetchAndGoToArtist} from '../action-creators/artists'

export default class Artist extends React.Component {
  componentWillMount(){
    fetch(`/api/artists/${this.props.params.artistId}`)
        .then(res =>res.json())
        .then(artist=> store.dispatch(fetchAndGoToArtist(artist)));
       }
    render(){
      console.log("this.props.selectedArtist",this.props.selectedArtist)
      console.log("this.props.albums",this.props.albums)
      return (
          <div>
            <h3>{ this.props.selectedArtist.name }</h3>
            <h3>Albums</h3>
            <div className="row">
             {
                this.props.selectedArtist.albums && this.props.selectedArtist.albums.map(album => (
                  <div className="col-xs-4" key={album.id}>
  
                    <Link to = {`/albums/${album.id}`} className="thumbnail" >
                      <img src={ album.imageUrl } />
                      <div className="caption">
                        <h5>
                          <span>{ album.name }</span>
                        </h5>
                        <small>{ album.songs.length } songs</small>
                      </div>
                    </Link>
                  </div>
                ))
              } 
            </div>
            <SongsContainer songs={this.props.selectedArtist.songs} />
          </div>
        );
    }
  
}
