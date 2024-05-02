// Define action constants here
export const START_TIMER = 'START';
export const PAUSE_TIMER = 'PAUSE';
export const RESET_TIMER = 'REFRESH';
export const INCREMENT_TIMER = 'INCREMENT';

// Define action creators here
export const startTimer= () => ({
  type: START_TIMER,
});
PAUSE_TIMER
export const pauseTimer = () => ({
  type: PAUSE_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const incrementTimer = (value) => ({
  type: INCREMENT_TIMER,
  payload: value,
});
// export { START_TIMER, PAUSE_TIMER, RESET_TIMER, INCREMENT_TIMER, incrementTimer,resetTimer,pauseTimer,startTimer};
