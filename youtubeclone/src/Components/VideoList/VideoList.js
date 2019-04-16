import React from 'react';
//components
import VideoItem from '../VideoItem/VideoItem';


class VideoList extends React.Component{
    

    printList = (list) => {
        let response = '';
        if(this.props.videoList.length > 0){
            response =   this.props.videoList.map((videoItem,index) => {
                return ( <VideoItem videoItem={videoItem} 
                          key={index}
                         selectVideo={ this.props.selectVideo } /> );
               // console.log("snippet",videoItem.snippet.title);
            });
        }
        return response;
    }

    render() {
        return (
            <div className="ui list">
               {this.printList(this.props.videoList)}
            </div>);
    }

}
export default VideoList