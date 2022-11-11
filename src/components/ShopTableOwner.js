import React from "react";

//Editable version of the shop for owners
class ShopTableOwner extends React.Component {
    constructor(props) {
        super(props);
        this.getContents = this.getContents.bind(this);
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);

        this.state = {tableContents: []}
    }

    componentDidMount() {
        const data = this.props.data;
        this.setState({ tableContents: data })

    }

    handleNameChange(event, key) {
        let items = [...this.state.tableContents];
        let item = {...items.filter((e) => {return e.index === key})};
        item.name = event.target.value;
        items.forEach((e) => {if(e.index === key) e.name = item.name;})
        this.setState({items});
    }

    handlePriceChange(event, key) {
        let items = [...this.state.tableContents];
        let item = {...items.filter((e) => {return e.index === key})};
        item.price = event.target.value;
        items.forEach((e) => {if(e.index === key) e.price = item.price;})
        this.setState({items});
    }

    handleDescChange(event, key) {
        let items = [...this.state.tableContents];
        let item = {...items.filter((e) => {return e.index === key})};
        item.desc = event.target.value;
        items.forEach((e) => {if(e.index === key) e.desc = item.desc;})
        this.setState({items});
    }


    getContents() {
        const tableRows = [];
        this.state.tableContents.forEach(element => {
        tableRows.push(
                <tr key={element.index}>
                    <td><input type="text" id="name" value={element.name || ''} onChange={(event) =>this.handleNameChange(event, element.index)} /></td>
                    <td><input type="text" id="price" value={element.price || ''} onChange={(event) => this.handlePriceChange(event, element.index)} /></td>
                    <td><input type="text" id="desc" value={element.desc || '' } onChange={(event) => this.handleDescChange(event, element.index)}/></td>
                </tr>    
            )
        });
        return (
            tableRows
        )
    }

    render() {
        return(
            <form>
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getContents()}
                </tbody>

                </table>
            </form>
        )
    }

}

export default ShopTableOwner;