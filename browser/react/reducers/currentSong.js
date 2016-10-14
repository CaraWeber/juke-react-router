'use strict';

import { SET_CURRENT_SONG } from '../constants'; 

const initialCurrentSong = {};

export default function currentSong (state = initialCurrentSong, action) {  
  switch (action.type) {
    case SET_CURRENT_SONG: return action.song;
    default: return state;
  }
}
