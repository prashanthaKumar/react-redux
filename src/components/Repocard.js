import React from 'react'
import '../App.css';
import followers from '../images/star.png';
import blankwindow  from '../images/newWindow.png';
function Repoard(props) {
    const {data} = props;
    return (
      <div className="repoCardWrapper">
          <div className="userDetail">
            <div className="repoDetail">
                <div className="repoWrapper" >
                  <a href={data.html_url} target="_blank" alt={data.name} rel="noopener noreferrer"><p>{data.name}</p></a> <p><img alt="new window" src={blankwindow} width="14px" height="14px" /></p>
                </div>
                <div className="starWrapper" >
                    <p><img src={followers} alt="Star" width="18px" height="18px" /></p> <p> {data.stargazers_count}</p>
                </div>
            </div>
            <div className="repoDetail langDetail">
              <div className="starWrapper">
              <b>[{data.language}]</b> 
              </div>
            </div>
              <div className="descDetail">
                    <p>{data.description}</p>
              </div>
          </div>
      </div>
        
    )
 
}

export default Repoard