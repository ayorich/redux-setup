const initialState = {
  value: 0,
};

export const slice = 'counter';

export const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case increment().type: {
      const newState = state + 1;

      return newState;
    }

    case decrement().type: {
      const newState = state - 1;

      return newState;
    }

    default: {
      return state;
    }
  }
};

/**
 * ACTIONS CREATORS
 */

export const increment = () => ({
  type: `${slice}/increment`,
});

export const decrement = () => ({
  type: `${slice}/decrement`,
});
