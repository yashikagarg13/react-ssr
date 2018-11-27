export const getEvents = state => Object.keys(state.events.entities)
  .map(key => state.events.entities[key]);
export const isFetching = state => state.events.isFetching;
