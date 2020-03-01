import { AppAction, INCREMENT, DECREMENT } from "./actionTypes"

export function incrementCounter(value: number): AppAction {
  return { type: INCREMENT, value }
}

export function decrementCounter(value: number): AppAction {
  return { type: DECREMENT, value }
}