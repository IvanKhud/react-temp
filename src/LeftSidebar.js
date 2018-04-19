import React from 'react';

import SearchInput from './SearchInput'

export default class LeftSidebar extends React.Component {
  render () {
    const array = [
      {name: 'Burgers'},
      {name: 'Steak'}
    ];

    const listItems = array.map((item) =>
      <li>{item.name}</li>
    );

    return (
      <div className="left-sidebar">
      <SearchInput />
      <ul>
        {listItems}
      </ul>
      </div>
    );
  }
}




