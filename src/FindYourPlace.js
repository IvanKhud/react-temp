import React from 'react';
import RightSidebar from './RightSidebar';

export default class FindYourPlace extends React.Component {
  render () {
    return (
        <div id="find-your-place-body">
            <div className="find-tab-body">
                <div className="center-container">
                    <div id="map"></div>
                </div>
                <RightSidebar />
             </div>
        </div>
    );
  }
}