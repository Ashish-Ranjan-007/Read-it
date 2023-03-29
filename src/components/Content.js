import React from 'react'
import Posts from './Posts'
import Leftpane from './Leftpane';
import Rightpane from './Rightpane';
import "./App.css";


function Content() {
  return (
    <div className='pane-container'>
        {/*left pane  */}
        <Leftpane />
        {/* Posts */}
        <Posts />
        {/* right pane  */}
        <Rightpane />
    </div>
  )
}

export default Content