import React from 'react';
import PlaceItem from './PlaceItem'

export default class RightSidebar extends React.Component {
  render () {
    return (
        <div class="sidebar sidebar-right">
            <div className="search-container">
                <input type="text" className="searchInput" placeholder="Type the name here" />
                <i className="fa fa-search"></i>
            </div>
            <div className="search-result-container">
                <div className="search-response">
                    <PlaceItem />
                    <hr />
                    <PlaceItem />   
                    <hr />
                    <PlaceItem />
                    <hr />
                </div>
            </div>
        </div>
    );
  }
}