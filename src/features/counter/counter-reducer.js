export const slice = 'counter';

const initialState = {
  value: 0,
};
export const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case increment().type: {
      const newValue = state.value + 1;
      return { ...state, value: newValue };
    }
    case decrement().type: {
      const newValue = state.value - 1;
      return { ...state, value: newValue };
    }
    case addNumber().type: {
      const newValue = state.value + payload;
      return { ...state, value: newValue };
    }
    default: {
      return state;
    }
  }
};

export const increment = () => ({
  type: `${slice}/increment`,
});
export const decrement = () => ({
  type: `${slice}/decrement`,
});
export const addNumber = (payload) => ({
  type: `${slice}/addNumber`,
  payload,
});
