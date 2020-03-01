
import React from 'react';

export interface LabelProps {
  textToDisplay: string
}

const Label: React.FunctionComponent<LabelProps> = ({ textToDisplay }) => {
  return (
    <h1>{textToDisplay}</h1>
  )
}

export default Label