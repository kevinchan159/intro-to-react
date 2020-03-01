import React from 'react';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from "../actions"
import { AppState } from "../reducer"
import { AppAction } from '../actionTypes';
import Label from "./Label"
import styled from 'styled-components'

export interface CounterComponentState {
  value: number
}

class CounterComponent extends React.Component<any, CounterComponentState> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleIncrementBtnPressed = () => {
    this.props.dispatch(incrementCounter(this.state.value))
  }

  handleDecrementBtnPressed = () => {
    this.props.dispatch(decrementCounter(this.state.value))
  }

  handleInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: parseInt(event.target.value) || 0 })
  }

  render() {
    return (
      <Container >
        <h1>Counter: {this.props.counter}</h1>
        <input onChange={this.handleInputChanged}></input>
        <button onClick={this.handleIncrementBtnPressed}>Increment counter</button>
        <button onClick={this.handleDecrementBtnPressed}>Decrement counter</button>
        <Label textToDisplay={`Current Input: ${this.state.value}`} />
      </Container >
    )
  }
}

const Container = styled.div`
  background-color: white
`

const mapStateToProps = (state: AppState) => state
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: (action: AppAction) => dispatch(action)
  }
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
