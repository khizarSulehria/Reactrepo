import React from 'react';
import axios from 'axios';
import Config from '../../Config'
import './App.css'
//components
import Searchbar from '../Searchbar/Searchbar';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videoList : [],
            videoId : null
        }
    }
    
    onSearchBarSubmit = (term) => {
        //let data = [];
        
        axios.get(Config.YOUTUBE_API_BASE_PATH+'search',{
            params: {
                part: 'snippet',
                q: term,
                maxResults:15,
                key: Config.YOUTUBE_KEY
            }
        })
        .then( (response)  =>  this.setState({ videoList : response.data.items,videoId:null })  )
        .catch(function (error) {
            console.log(error);
          });
       // console.log("Submit")
    }

    selectVideo = (videoId) => {
        this.setState({
            videoId
        })
    }

    render() {
       // console.log("RENDER ",this.state.videoList);
        return (
            <div className="wrapper" >
                <div className="ui container">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <Searchbar onSearchBarSubmit={this.onSearchBarSubmit} />
                        </div>
                        {this.state.videoId &&
                        <div className="nine wide column">
                        <VideoDetail videoId={this.state.videoId}/>
                        </div>
                        }
                        <div className="seven wide column">
                            <VideoList videoList={this.state.videoList} selectVideo={this.selectVideo}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    componentDidMount(){
        this.onSearchBarSubmit("Pubg");
    }
}
export default App