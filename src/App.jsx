import React from 'react';
import { Route } from 'react-router-dom';

import EventsContainer from './components/Events/EventsContainer';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/events/" component={EventsContainer} />
    </div>
  );
}

export default App;
