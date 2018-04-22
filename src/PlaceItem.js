import React from 'react';

export default class PlaceItem extends React.Component {
  constructor(props) {
      super(props);
  }

  render () {
    return (
        <div className="place-item">
            <div className="flex-item-info">
                <a href="#"><i data-location="49.8415285,24.0299814" className="fa fa-map-marker fa-3x" onclick="placeMap(this)" aria-hidden="true"></i></a>
                <div className="place-info">
                    <div className="place-name">{this.props.placeName}</div>
                    <div className="place-address">{this.props.placeAddress}</div>
                </div>
            </div>
            <div className="place-description">{this.props.placeDescription}</div>
        </div>
    );
  }
}

PlaceItem.defaultProps = {
    placeName: 'Honest Meat',
    placeAddress: 'Rynok sq 28',
    placeDescription: 'some description'
}