import React from "react";

// Displays very basic shop info for the ShopList view
class ShopBlock extends React.Component {
    render() {
        return(
            <a href={"shop/"+this.props.data.id}>
                <span>{this.props.data.name}</span>
                <span>{this.props.data.desc}</span>
            </a>
        )
    }
}

export default ShopBlock;