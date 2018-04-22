import React from 'react';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';

export default class FindYourMeal extends React.Component {
  render () {
    return (
        <div id="find-your-meal-body">
            <div className="find-tab-body">
                <LeftSidebar />
                <div className="center-container">
                    <img alt="burger" src="burger.jpg" />
                </div>   
                <RightSidebar />
            </div>
        </div>
    );
  }
}