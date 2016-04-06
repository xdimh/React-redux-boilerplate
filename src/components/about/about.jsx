import React from 'react'
import render from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import addons from 'react/addons';
const update = addons.addons.update;
require('velocity-animate');

var About = React.createClass({

    getInitialState : function() {
        return {
            items : [
                "item1",
                "item2",
                "item3"
            ]
        }
    },

    addItem : function() {
        this.setState({items:update(this.state.items,{$push:[prompt('Enter some text')]})});
    },
    handleRemove : function(i) {
        var newItems = this.state.items;
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },

    render : function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <h2 class="todo-item" key={i} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </h2>
            );
        }.bind(this));
        return (
            <div>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
                <div>
                    {items}
                </div>
                {React.cloneElement('' || <div />)}
            </ReactCSSTransitionGroup>
            <button type="button" onClick={this.addItem}>点击添加列表项</button></div>
        )
    }
});

module.exports = About;