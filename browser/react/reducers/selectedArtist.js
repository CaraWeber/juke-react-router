'use strict';

import { RECEIVE_ARTIST } from '../constants';
import { convertArtist } from '../converters';

const initialArtist = {};

export default function artist (state = initialArtist, action) {
  switch (action.type) {
    case RECEIVE_ARTIST: return convertArtist(action);
    default: return state;
  }
}