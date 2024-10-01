import CounterContainer from '../../features/counter/counter-container';
export default function Counter() {
  return <CounterContainer />;
}

// Create a new counter component, but use the display- / container-component
// pattern. When hooking up the container component to the Redux store,
// I want you to use the `connect` HOC from Redux.
