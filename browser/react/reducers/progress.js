'use strict';

import { SET_PROGRESS } from '../constants'; 

export default function progress (state = 0, action) {
  switch (action.type) {
    case SET_PROGRESS: return action.progress;
    default: return state;
  }
}