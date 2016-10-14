'use strict';

import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';
import { switchLocation } from './location';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums 
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album 
});

export const fetchAndGoToAlbum = album => 
  dispatch => 
    fetch(`/api/albums/${album.id}`)
      .then(res => res.json())
      .then(album => {
        dispatch(receiveAlbum(album));
        // dispatch(switchLocation('album'));
      });