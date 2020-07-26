import React from 'react';
import {connect} from 'react-redux';
import {fetchUserInfo} from '../redux/searchAction'
import Repoard from './Repocard';

class Widget extends React.Component{
    constructor(props){
        super(props)
        this.validateForm = this.validateForm.bind(this);
    }
    // Validate blank space in search field
    validateForm(event){
        event.preventDefault();
        let enterdUserName =  event.target.elements.gitUser;
        if (/\s/.test(enterdUserName.value) || enterdUserName.value==="" ) {
            window.alert("Please enter valid user name")
            enterdUserName.value = "";
            enterdUserName.focus();
            return false;
        }else{
            this.props.fetchUserInfo(enterdUserName.value);
        }
    }

    render(){
        const {user, repoList} = this.props;
        const userName = user.name ? user.name : "Not avalable";
        const city = user.location ? user.location : "Not avalable";
        const followers = user.followers ? user.followers : "Not avalable";
        const avatar = user.avatar_url ? <img className="hover-zoom"  src={user.avatar_url} width="auto" height="38px" alt="Profile Avatar"></img> : null;
        const renderRepoTile = repoList.length>0 ? repoList.map((item, i) => <Repoard key={item.id+i} data={item} ></Repoard>) : null ;                     
        return(
            <div className="container" >
                <div className="headerContainer" >
                    <div className="searchContainer">
                        <form  onSubmit={this.validateForm} >
                            <label  htmlFor="userName">Search GitHub user and get his repo list</label>
                            <input  id="userName" name='gitUser' type='text' placeholder="Enter Github user name" />
                            <input  id="userSubmit" type="submit" value="Search"/>
                        </form>
                        <div className="userInfoContainer">
                             <div className="userDetail">
                                 <p><b>Name:</b> {userName} </p>
                            </div>
                            <div className="userDetail">
                                <p><b>City:</b> {city}</p>
                            </div>
                            <div className="userDetail">
                                <p><b>Followers:</b> {followers}</p>
                            </div>
                           {avatar}
                        </div>
                    </div>
                </div>
                <div className="repoContainer">
                   {renderRepoTile}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        user: state.user,
        repoList: state.repoList,
    }
}

const mapDispatchToProos = dispatch =>{
    return{
        fetchUserInfo: (userName) => dispatch(fetchUserInfo(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProos) (Widget)