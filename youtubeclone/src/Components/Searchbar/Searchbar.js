import React from 'react';
import axios from 'axios';
import Config from '../../Config'
//components


class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }

    onTermChange  = (event) => {
        console.log(event.target.value);
        this.setState({
            term : event.target.value
        })
    }
    searchTerm = (event) => {
        event.preventDefault();
        axios.get(Config.YOUTUBE_API_BASE_PATH+'search',{
            params: {
                part: 'snippet',
                q: 'buildings',
                maxResults:15,
                key: Config.YOUTUBE_KEY
            }
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log("Submit")
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