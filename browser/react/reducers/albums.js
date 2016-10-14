'use strict';

import { RECEIVE_ALBUMS } from '../constants';
import { convertAlbums } from '../converters';

const initialAlbums = [];

export default function albums (state = initialAlbums, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS: return action.albums.map(convertAlbums);
    default: return state;
  }
}