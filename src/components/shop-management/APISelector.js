import React from "react";


// A drop down menu that displays from the DND5E API based on
// the request passed into the props
class APISelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }

        this.waitForData = this.waitForData.bind(this);

        this.reRender = this.reRender.bind(this);
    }

    async componentDidMount() {
       this.forceUpdate();
    }

    async componentDidUpdate() {
        const response = await fetch(this.props.url);
        const json = await response.json();

        if (json.results){
           this.setState(
            {
                data: json.results,
            }
        )} else {
            this.setState({
                data: json.equipment
            })
            
        }
    }

    waitForData() {
        if(this.state.data.length === 0) {
            return <option key="loading">Loading</option>
        } else {
            let items = [];
            this.state.data.forEach((e) => {
                items.push(<option key={e.index} value={e.index}>{e.name}</option>);
            })
            return items;
        }

    }

    reRender() {
            this.forceUpdate();
    }

    render() {
        return(
            <select onChange={this.props.cb}>
                {this.waitForData()}
            </select>
        )
    }
}

export default APISelector;