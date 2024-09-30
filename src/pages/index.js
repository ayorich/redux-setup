import { useDispatch, useSelector } from 'react-redux';
import {
  addNumber,
  decrement,
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
        onClick={() => dispatch(addNumber(40))}
        className="w-8 h-8 cursor-pointer border border-solid border-red-300 flex items-center text-base justify-center"
      >
        +40
      </button>
    </div>
  );
}
