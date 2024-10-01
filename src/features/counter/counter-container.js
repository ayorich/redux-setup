import { connect } from 'react-redux';
import {
  decrement,
  increment,
  selectCounterValue,
} from '../../redux/root-reducer';
import CounterDisplay from './counter-component';

// This is unnecessary. How can you write this without JSX?
// const CounterContainer = ({ props }) => {
//   return <CounterDisplay {...props} />;
// };

// This is wrong. This won't work.
const mapStateToProps = (state) => ({
  count: selectCounterValue(state),
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);
