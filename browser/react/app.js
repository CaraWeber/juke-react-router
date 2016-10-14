'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import { Router, Route, hashHistory, Link, IndexRoute} from 'react-router'
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';
import fetchAndGoToAlbum from './action-creators/albums';


ReactDOM.render(
  <Provider store={store}>
  	<Router history={hashHistory}>
  		<Route path="/" component={AppContainer}>
  			<IndexRoute component={AlbumsContainer}/>
   			{/* // <Route path='/album' component={AlbumContainer}/> */}
  			<Route path='/albums' component={AlbumsContainer}/>
 			  <Route path='/albums/:albumId' component={AlbumContainer}/>
 				<Route path='/artist/:artistId' component={ArtistContainer}>
          <Route path='/albums/:albumId' component={AlbumContainer} />
        </Route>
        <Route path='/artists' component={ArtistsContainer}/>
    	</Route>
    </Router>
  </Provider>,
  document.getElementById('app') 
); 