import React from "react";

//Static version of the shop for guests
class ShopTableGuest extends React.Component {
    constructor(props) {
        super(props);
        this.getContents = this.getContents.bind(this);
    }


    getContents() {
        const tableRows = [];
        this.props.data.forEach(element => {
            tableRows.push(
                <tr key={element.index}>
                    <td>{element.name}</td>
                    <td>{element.price}</td>
                    <td>{element.desc}</td>
                </tr>     
            )
        });
        return (
            tableRows
        )
    }

    render() {
        return(
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
        )
    }

}

export default ShopTableGuest;