import React ,{Component} from 'react';
class UserListing extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : [1,2,3,4,5,8]
        };
    }
    printUserList = () => {
        
        return (
            this.state.users.map((obj,index) => {
             return <h4 key={index}>{obj}</h4>   
            })
        );
    }
    render(){
        return (
            <div>
                <h2>User Listing</h2>
                {
                    this.printUserList()
                }
                
            </div>
        );
    }

} 
export default UserListing;