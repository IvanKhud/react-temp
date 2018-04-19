import React from 'react';

import SearchInput from './SearchInput'

export default class RightSidebar extends React.Component {
  render () {
    const array = [
      {name: 'Honest meat', address: 'Rynok sq., 28'},
      {name: 'Honest meat', address: 'Rynok sq., 28'},
      {name: 'Honest meat', address: 'Rynok sq., 28'}
    ];

    const listItems = array.map((item) =>
      <li>{item.name}</li>
    );

    return (
      <div className="right-sidebar">
      <SearchInput />
      <ul>
        {listItems}
      </ul>
      </div>
    );
  }
}