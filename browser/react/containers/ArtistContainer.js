'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ selectedArtist }) => ({
  selectedArtist
});

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(fetchAndGoToAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist); 