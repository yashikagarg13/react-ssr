import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Event({ data }) {
  const date = moment(data.date).format('dddd, DD MMM YYYY');

  return (
    <div className="eachblock col-sm-6">
      <article className={`post-${data} post type-post status-publish format-standard has-post-thumbnail hentry category-culture entry`}>
        <h2 className="entry-title">
          <a href="link/to/detail/page">{ data.newsHde }</a>
          <p>
            {date ? (
              <span className="entry-date">
                <i className="fa fa-calendar" />
                <time className="entry-date published">
                  <span id="date-time">{ date }</span>
                </time>
              </span>
            ) : null}
            {data.city_state ? (
              <span className="entry-date">
                <i className="fa fa-map-marker" />
                <time className="entry-date published">
                  <span id="date-time">{ data.city_state }</span>
                </time>
              </span>
            ) : null}
          </p>
          <div className="thumbnail">
            <a href="link/to/detail/page">
              <img
                width="100%"
                height="auto"
                src={`http://www.indialife.us/Photo.php?photo=${data.images2}&new_width=728&new_height=410`}
                className="entry-thumbnail wp-post-image"
                alt="some-text"
              />
            </a>
          </div>
        </h2>
      </article>
    </div>
  );
}

Event.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Event;
