import React from "react";
import APISelector from './APISelector.js';

// Component view that allows the user to create a shop
// Either by getting items from the DND5E API or by adding custom items
class ShopCreator extends React.Component {

    constructor() {
        super();
        this.state = {
            shopName: "",
            shopDesc: "",
            selectedCategory: "adventuring-gear",
            selectedItem: "",
            addedItems: [],
        }

        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);

        this.buildTable = this.buildTable.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    buildTable() {
        let items = [];

        this.state.addedItems.forEach((e) => {
            items.push(
                <tr key={e.index}>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>{e.desc}</td>
                </tr>
            )
        })

        return items;
    }

    async getItem(item) {
        const response = await fetch("https://www.dnd5eapi.co/api/equipment/" + item);
        const json = await response.json();

        let equipment = {
            index: json.index,
            name: json.name,
            price: json.cost.quantity + json.cost.unit,
            desc: json.desc[0],
        }
        
        if(this.state.addedItems.filter(e => e.index === equipment.index).length === 0){
            var joined = this.state.addedItems.concat(equipment);
            this.setState({
                addedItems: joined,
            })
        }
    }

    onCategoryChange(value) {
        this.setState({
            selectedCategory: value.target.value,
            selectedItem: value.target
        })
        this.itemSelector.reRender();
    }

    onItemChange(value) {
        this.setState({
            selectedItem: value.target.value,
        })
    }

    render() {
        return(
            <div>
                <div>
                    <label>Shop Name:</label>
                    <input type="text" onChange={(e) => this.setState({shopName: e.target.value})}></input>
                    <label>Shop Description:</label>
                    <input type="textarea" onChange={(e) => this.setState({shopDesc: e.target.value})}></input>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.buildTable()}
                    </tbody>
                </table>
                
                <div>
                    <APISelector url="https://www.dnd5eapi.co/api/equipment-categories" cb={this.onCategoryChange} />
                    <APISelector url={"https://www.dnd5eapi.co/api/equipment-categories/" +this.state.selectedCategory} 
                        ref={instance => {this.itemSelector=instance}} cb={this.onItemChange} /> 
                    <button type="button" onClick={() =>this.getItem(this.state.selectedItem)}>Add Item</button>
                </div>

                <button type="button" onClick={() => {}}>Create Shop</button>
            </div>
        )
    }
}

export default ShopCreator;