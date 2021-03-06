/** @jsx React.DOM */
'use strict'
var React = require("react");

module.exports = React.createClass({
    handleOnClick:function(e){
        this.props.onDeleteTicker(e.target.id);
    },
    render: function() {
        return (
        <div className="row text-center">
            {this.props.tickers.map(function(ticker, index){
                return(
            	<div key={ticker} className="col-md-2">
            		<div className="well animated fadeIn">
            		<span id={index} className="glyphicon glyphicon-remove removeTicker" aria-hidden="true" onClick={this.handleOnClick}></span>{ticker}
            		</div>
            	</div>
            	);
            }.bind(this)
            )}
        	
        </div>
        )
    }
});

