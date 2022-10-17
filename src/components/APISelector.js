import React from "react";


class APISelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }

        this.waitForData = this.waitForData.bind(this);
    }

    async componentDidMount() {
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
        console.log(this.state.data)
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

    render() {
        return(
            <select>
                {this.waitForData()}
            </select>
        )
    }
}

export default APISelector;