import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  fetchNumber,
  increment,
} from '../features/counter/counter-reducer';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between w-1/4">
      <button
        onClick={() => dispatch(decrement())}
        className="w-8 h-8 cursor-pointer border border-solid border-red-300 flex items-center text-base justify-center"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => dispatch(increment())}
        className="w-8 h-8 cursor-pointer border border-solid border-red-300 flex items-center text-base justify-center"
      >
        +
      </button>

      <button
        onClick={() => dispatch(fetchNumber())}
        className="w-8 h-8 cursor-pointer border border-solid border-red-300 flex items-center text-base justify-center"
      >
        fetch number
      </button>
    </div>
  );
}

// Create a new counter component, but use the display- / container-component
// pattern. When hooking up the container component to the Redux store,
// I want you to use the `connect` HOC from Redux.

// What is a generator?
// A function that can be paused or resume and still maintains its context.
// A generator is a pull stream.

// What is a stream?
// A stream is data over time.

// What is a push stream?
// A push stream is when you are NOT in control WHEN the data comes through.
// Examples?
// web socket
// reading a file from disk

// const fs = require('fs');
// const readStream = fs.createReadStream('./largeFile.txt');

// readStream.on('data', (chunk) => {
//   console.log('data received', chunk.length);
// });

// ... on(end), on(error) etc.$

// What is a pull stream?
// A pull stream is explicitly request for data from a source.
// A pull stream is when you ARE in control WHEN the data comes through.

// Lazy vs. eager
// Eager: Eager means that data is evaluated immedietly, regardless of whether
// the result is needed in that moment, or not. A push stream is eager.
// Examples:
// const numbers = [1, 2, 3, 4, 5];
// .map method processes all elements in the array immediately.
// const squares = numbers.map((num) => num * num);

// Lazy: lazy means that data is evaluated as needed with time. A pull stream is lazy.
// What is lazy (synchronous) and NOT a generator.
//`` Operand selector operators: || and &&``.
// 2 || '2'

// What is the difference between synchronous and asynchronous?
// Synchronous operations happen one at a time, where each must finish before
// the next can begin. async/await
// Asynchronous operations can overlap, so they do NOT have to wait for others
// to complete before starting. .then()

// What are the three building blocks of sagas?
// 1. effects - action creators describe future actions meaning things that the app should do (/ effects)
// 2. middleware - handles the effects and contains the logic that executes what the effects should do
// 3. sagas (generator functions) - organize in what order and at which point in time what effect should be dispatched

// Some common effects:
// - put - dispatch actions
// - call - can invoke functions
// - take - pauses the saga until an action with a certain type is being dispatched
// - select - takes in a selector to return a certain part of the state

// import { call } from 'redux-saga/effects';

// function foo() {
//   return 'bar';
// }

// const effect = call(foo, ['a', 'b', 'c'], 'd');
// console.log('effect');
// { '@@redux-saga/io': true, type: 'CALL", payload: { fn: foo, args: [['a', 'b', 'c'] ,'d']}, combinator: false }

// Create a saga called `pong` that everytime you dispatch a `ping` action,
//  it dispatches a `pong` action and waits for the next `ping` action.
const ping = () => ({ type: 'ping' });

function* sagaPong() {
  // yield takeEvery(ping().type)
  // yield put(pong())
  while (true) {
    yield take(ping().type);
    yield put(pong());
  }
}

// takeEvery(sagaPong()); // { }
function* rootSaga() {
  yield all([sagaPong()]);
}

// store.ts
const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

// Create a reducer together with a saga. The reducer should have a loading state
// and the saga should fetch todos and then put them into the reducer.
// And there should be two selectors for getting the loading state and getting
// the todos once they're fetched.
// https://jsonplaceholder.typicode.com/

const slice = 'todo';
const loadingAction = (state) => ({ type: `${slice}/loading`, payload: state });
const successfullyFetchedTodos = (todos) => ({
  type: `${slice}/successfullyFetchedTodos`,
  payload: todos,
});
const currentLoading = (state) => state[slice].loading;
const getTodos = (state) => state[slice].todos;

const initState = {
  loading: false,
  todos: [],
};
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case loadingAction().type: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case successfullyFetchedTodos().type: {
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    }
    default: {
      return initState;
    }
  }
};

const fetchTodos = async () => {
  const res = fetch('https://jsonplaceholder.typicode.com/');
  return await res.json();
};

function* todoSaga() {
  const todos = yield call(fetchTodos);
  yield put(successfullyFetchedTodos(todos));
}
