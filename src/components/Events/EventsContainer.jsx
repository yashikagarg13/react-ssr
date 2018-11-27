import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Events from './Events';
import * as EventSelectors from '../../redux/selectors/events';
import EventActions from '../../redux/actions/events';


class EventsContainer extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchEvents } = this.props;
    fetchEvents();
  }

  render() {
    const { events, isFetching } = this.props;

    if (isFetching) return null;

    return (
      <Events data={events} />
    );
  }
}

const mapStateToProps = state => ({
  events: EventSelectors.getEvents(state),
  isFetching: EventSelectors.isFetching(state),
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => {
    dispatch(EventActions.fetchEvents());
  },
});

EventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsContainer);

EventsContainer.propTypes = {
  events: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchEvents: PropTypes.func,
}

export default EventsContainer;
