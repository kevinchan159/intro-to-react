
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export type AppAction =
  | { type: typeof INCREMENT, value: number }
  | { type: typeof DECREMENT, value: number }
