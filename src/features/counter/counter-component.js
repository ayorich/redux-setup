export default function CounterDisplay({ onDecrement, onIncrement, count }) {
  return (
    <div className="flex items-center justify-between w-1/4">
      <button
        onClick={onDecrement}
        className="w-8 h-8 cursor-pointer border border-solid border-red-300 flex items-center text-base justify-center"
      >
        -
      </button>
      <span>{count}</span>

      <button
        onClick={onIncrement}
        className="w-8 h-8 cursor-pointer border border-solid border-red-300 flex items-center text-base justify-center"
      >
        +
      </button>
    </div>
  );
}
