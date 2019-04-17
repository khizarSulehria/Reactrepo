import React from 'react';
//components


class VideoDetail extends React.Component{
 
        
        
    
    render() {
        return (
            <div>
    <iframe  src={"https://www.youtube.com/embed/"+this.props.videoId} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            </div>
        );
    }

}
export default VideoDetail