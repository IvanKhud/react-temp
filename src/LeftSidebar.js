import React from 'react';
import Meals from './Meals'

export default class LeftSidebar extends React.Component {
  
  renderMealsList = () => {
      return Meals.MealsList.map(meal => {
        return <div class="category-body-item">{meal.name}</div>
      })
  }

  render () {
    return (
      <div className="sidebar sidebar-left">
          <div class="search-container">
              <input type="text" className="searchInput" placeholder="Type the name here" />
              <i class="fa fa-search"></i>
              <div class="search-result-container">
                  <div class="search-response">
                      {this.renderMealsList()}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
