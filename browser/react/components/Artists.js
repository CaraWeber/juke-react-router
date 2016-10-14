'use strict';

import React from 'react';
import { Link} from 'react-router'
import store from '../store';


export default class Artists extends React.Component {
  componentWillMount(){
    fetch(`/api/artists`)
      .then(res => res.json())
      .then(artists => {
        store.dispatch({type: 'RECEIVE_ARTISTS', artists});
        // dispatch(switchLocation('album'));
      })
      .catch(err => console.error(err.stack));
  }
  render(){
    return (
      <div>
        <h3>Artists</h3>
          <div className="list-group">
          {
            this.props.artists.map(artist => (
              <div className="list-group-item" key={ artist.id }>
                <Link to={`/artist/${artist.id}`}>{ artist.name }</Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}