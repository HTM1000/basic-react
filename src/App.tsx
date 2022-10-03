import React, { useState } from 'react';
import Select, { SelectOptions } from './Select';

const options = [
  { label: "First", value: 1},
  { label: "Second", value: 2},
  { label: "Third", value: 3},
  { label: "Fourth", value: 4},
  { label: "Fifth", value: 5},
]

function App() {
  const [value1, setValue1] = useState<SelectOptions[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOptions | undefined>(options[0]);

  return (
    <div className="App">
      <Select options={options} value={value2} onChange={option => setValue2(option)} />
      <br />
      <Select multiple options={options} value={value1} onChange={option => setValue1(option)} />
    </div>
  )
}

export default App
