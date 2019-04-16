import React from 'react';

//components


class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }

    onTermChange  = (event) => {
        this.setState({
            term : event.target.value
        })
    }
    searchTerm = (event) => {
        event.preventDefault();
        this.props.onSearchBarSubmit(this.state.term);
    }
    render() {
        return (
            <div>
               <form onSubmit={this.searchTerm} className="ui form">
                    <div className="field">
                         <input type="text" 
                        value={this.state.term} 
                        onChange={this.onTermChange}
                        placeholder="Search Bar" />
                    </div>
                </form>
            </div>);
    }

}
export default Searchbar