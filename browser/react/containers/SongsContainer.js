'use strict';

import { connect } from 'react-redux';
import Songs from '../components/Songs';
import { startSong, pause, play } from '../action-creators/player';

const mapStateToProps = ({ isPlaying, currentSong}) => ({
  isPlaying,
  currentSong
});

const mapDispatchToProps = dispatch => ({
  toggle (selectedSong, selectedSongList, currentSong, isPlaying) {
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else if (isPlaying)
      dispatch(pause());
    else 
      dispatch(play());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);