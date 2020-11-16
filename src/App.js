import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

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

const option = [
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
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  )
}