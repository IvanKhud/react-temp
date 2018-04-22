import React from 'react';

export default class FindTabs extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="find-tabs">
                <div className="container">
                    <div className="flex-tabs">
                        <div id="find-your-place" className="find-tab tab-red">Find your place</div>
                        <div id="find-your-meal" className="find-tab tab-yellow-active">Find your meal</div>
                    </div>
                </div>
            </div>
        );
    }
}