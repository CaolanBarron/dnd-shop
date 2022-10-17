import React from "react";
import APISelector from './APISelector.js';

class ShopCreator extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: [],
        }

        this.waitForData = this.waitForData.bind(this);
    }

    waitForData() {
        if (this.state.categories.length === 0) {
            return <option>Loading</option>
        }
        else {
            let items = [];
            this.state.categories.forEach((e) => {items.push(
                <option key={e.index} value={e.index}>{e.name}</option>
            )})
            return items;
        }
    }

    onValueChange(value) {
        
    }

    render() {
        return(
            <div>
                <div>

                </div>
                <div>
                    <APISelector url="https://www.dnd5eapi.co/api/equipment-categories" />
                    <APISelector url="https://www.dnd5eapi.co/api/equipment-categories/ammunition/" /> 
                </div>
            </div>
        )
    }
}

export default ShopCreator;