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
// Operand selector operators: || and &&.
// 2 || '2'

// What is the difference between synchronous and asynchronous?
// Synchronous operations happen one at a time, where each must finish before
// the next can begin. async/await
// Asynchronous operations can overlap, so they do NOT have to wait for others
// to complete before starting. .then()
