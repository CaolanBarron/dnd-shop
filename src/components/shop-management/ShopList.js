import React from "react";
import ShopBlock from './ShopBlock';
import {getShop, getUser} from '../../database'

let userID = '345528379122909769';

// Component acts as the home display screen 
// for a users created shops
// Also lets the user create a new shop
class ShopList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopList: [],
            user: null,
        }
        this.loadShopList = this.loadShopList.bind(this);
    }

    componentDidMount() {
        getUser(userID).then((value)=>{this.setState({user: value.data})})
    }
    componentDidUpdate() {
        if (this.state.shopList.length > 0) return;
        if (this.state.user){
            for (let shop in this.state.user.shops) {
                console.log(this.state.user.shops[shop].value.id)
                getShop(this.state.user.shops[shop].value.id).then((value)=>{
                    let obj = {
                        id: this.state.user.shops[shop].value.id,
                        name: value.data.name,
                        desc: value.data.desc,
                        items: value.data.items,
                    };
                    console.log(obj)
                    this.setState({
                        shopList: [...this.state.shopList, obj]
                    })
                });
            }
        }
    }

    loadShopList() {
        if(this.state.shopList.length > 0){
            let shops = []
            for (let shop in this.state.shopList) {
                shops.push(<ShopBlock data={this.state.shopList[shop]}/>)
            }
            return shops;
        }
        else{
            return<p>Loading</p>
        }
    }

    render(){
        return(
            <div>
                <button onClick={() => {}}>Create Shop</button>
            
                {this.loadShopList()}
            
            </div>
        )
    }
}

export default ShopList;