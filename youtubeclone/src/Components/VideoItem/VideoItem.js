import React from 'react';
//components


class VideoItem extends React.Component{
 

    
    render() {
        return (
            <div className="item list-item" key={this.props.key} onClick={()=> { this.props.selectVideo(this.props.videoItem.id.videoId) } } >
                <div className="image">
                    <img src={this.props.videoItem.snippet.thumbnails.medium.url}  className="listimg"/>
                </div>
                <div className="content">
                <a className="header">{this.props.videoItem.snippet.title}</a>
                <div className="meta">
                    <span>{ this.props.videoItem.snippet.channelTitle }</span>
                </div>
                <div className="description">
                    <p></p>
                </div>
               
                </div>
            </div>
            );
    }

}
export default VideoItem