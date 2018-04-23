import React from 'react';
import PlaceItem from './PlaceItem';
import Meals from './Meals'

export default class FindYourMeal extends React.Component {
  
  constructor(props) {
      super(props);

      this.state = {
          currentMealsList: Meals.MealsList,
          currentMeal: Meals.MealsList[0],
          searchMealQuery: ""
      }
  }

  onMealClick = (meal) => {
      this.setState({
          currentMeal: meal
      });
  }

  handleInputChange = () => {
    let pattern = new RegExp(this.search.value, 'i');
    let filtered = Meals.MealsList.filter((meal) => {
        return pattern.test(meal.name)
    });
    this.setState({
        searchMealQuery: this.search.value,
        currentMealsList: filtered,
        currentMeal: filtered[0] || {}
    });
  }

  renderMealsList = () => {
    return this.state.currentMealsList.map(meal => {
        return <div class="category-body-item" onClick={() => this.onMealClick(meal)}>{meal.name}</div>
    })
  }

  render () {
    return (
        <div id="find-your-meal-body">
            <div className="find-tab-body">
                {/* Left sidebar start */} 
                <div className="sidebar sidebar-left">
                    <div class="search-container">
                        <input type="text" className="searchInput" placeholder="Type the name here" ref={input => this.search = input} onChange={this.handleInputChange} />
                        <i class="fa fa-search"></i>
                        <div class="search-result-container">
                            <div class="search-response">
                                {this.renderMealsList()}
                            </div>
                        </div>
                    </div>
                </div>   
                {/* Left sidebar end */} 
                <div className="center-container">
                    <img alt={this.state.currentMeal.name} src={window.location.origin + this.state.currentMeal.src} />
                </div> 
                {/* Right sidebar start */}
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
                {/* Right sidebar end */}
            </div>
        </div>
    );
  }
}