'use strict';

import { SET_LIST } from '../constants'; 

const initialSongList = [];

export default function songList (state = initialSongList, action) {
  switch (action.type) {
    case SET_LIST: return action.songList;
    default: return state;
  }
}
