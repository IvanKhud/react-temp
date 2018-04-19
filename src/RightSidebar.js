import React from 'react';

import SearchInput from './SearchInput'

export default class RightSidebar extends React.Component {
  render () {
    const array = [
      {def: 'item1', term: 'term1', obj1: 'rand'}, 
      {def: 'item2', term: 'term2'}
    ];

    return (
      <div className="right-sidebar">
      <SearchInput />
      <dl>
        {array.reduce((acc, item, idx) => {
        	return acc.concat([
          	<dt key={`def-${idx}`}>{item.def}</dt>,
            <dd key={`term-${idx}`}>{item.term}</dd>
          ]);
        }, [])}
      </dl>
      </div>
    );
  }
}