import React from 'react';
import PropTypes from 'prop-types';

import Event from './Event';

function Events({ data }) {
  return (
    <main className="site-main container layout-1c">
      <h3 className="secondary-heading">
        EVENTS
      </h3>
      <div className="content-area column">
        <div className="content-loop blog-list category-box">
          <div className="row">
            {data.map(item => (
              <Event key={item.copyid} data={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

Events.propTypes = {
  data: PropTypes.array,
};

Events.defaultProps = {
  data: [],
};

export default Events;
