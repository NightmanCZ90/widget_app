import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is a Front End JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
];

const options = [
  {
    label: 'The Color Magenta',
    value: 'magenta'
  },
  {
    label: 'The Color OrangeRed',
    value: 'orangered'
  },
  {
    label: 'The Color Cyan',
    value: 'cyan'
  },
  {
    label: 'The Color Lime',
    value: 'lime'
  },
]


export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? 
        <Dropdown 
          options={options} 
          selected={selected} 
          onSelectedChange={setSelected}
        /> : null
      }
      <h1 style={{color: selected.value}}>This text is {selected.value}.</h1>
    </div>
  )
}