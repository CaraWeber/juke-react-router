'use strict';

import { RECEIVE_ALBUM } from '../constants';
import { convertAlbum } from '../converters';

const initialAlbum = {};

export default function album (state = initialAlbum, action) {
  switch (action.type) {
    case RECEIVE_ALBUM: return convertAlbum(action.album);
    default: return state;
  }
}