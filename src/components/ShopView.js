import React from "react";
import ShopTableGuest from './ShopTableGuest';
import ShopTableOwner from './ShopTableOwner';

const tableData = [
    {
        index: 1,
        name:"Example 1",
        price: "10GP",
        desc:"More example",
    },
    {
        index: 2,
        name:"Example 2",
        price: "20GP",
        desc:"More example",
    },
    {
        index: 3,
        name:"Example 3",
        price: "20GP",
        desc:"EVEN More example",
    },
    {
        index: 4,
        name:"Example 4",
        price: "5BP",
        desc:"More example but this time its a longer one",
    },

]

class ShopView extends React.Component {

    constructor(props) {
        super(props);
        this.GuestView = this.GuestView.bind(this);
        this.OwnerView = this.OwnerView.bind(this);
    }

    OwnerView() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ShopTableOwner data={tableData} />
            </div>
        )
    }

    GuestView() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ShopTableGuest data={tableData} />
            </div>
        )
    }
    

    render() {
       if (this.props.user.type === "owner")  {
            return this.OwnerView();
       } else if(this.props.user.type === "guest") {
            return this.GuestView();
       }
    }
}

export default ShopView;