'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

export default connect(
  mapStateToProps
)(Album);