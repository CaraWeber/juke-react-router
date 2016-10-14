'use strict';

import React from 'react';
import { Link} from 'react-router'
import store from '../store';

export default class Albums extends React.Component {
  componentWillMount(){
    fetch(`/api/albums`)
      .then(res => res.json())
      .then(albums => {
        store.dispatch({type: 'RECEIVE_ALBUMS', albums});
        // dispatch(switchLocation('album'));
      })
      .catch(err => console.error(err.stack));
  }
  render(){
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          { 
            this.props.albums.map(album => (
              <div className="col-xs-4" key={ album.id }>
                <Link to = {`/albums/${album.id}`}  className="thumbnail">
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
      </div>
    );
  }
}