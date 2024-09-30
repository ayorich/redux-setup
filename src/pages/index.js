import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counter-reducer';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
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
    </div>
  );
}
