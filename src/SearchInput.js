import React from 'react';

export default class Search extends React.Component {
    state = {
      query: '',
    }
   
    handleInputChange = () => {

    }
   
    render() {
      return (
        <form>
          <input
            placeholder="Type the name here"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
      )
    }
}