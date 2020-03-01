import { AppAction, INCREMENT, DECREMENT } from './actionTypes'

export interface AppState {
  counter: number
}

export const initialState: AppState = {
  counter: 0
}

export default function reducer(state: AppState = initialState, action: AppAction) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + action.value }
    case DECREMENT:
      return { counter: state.counter - action.value }
    default:
      return state
  }
}