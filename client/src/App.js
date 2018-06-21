import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import GroupList from './components/Groups/GroupList';
import Nav from './components/Navigation/Nav';
import Filter from './components/UserControl/Filter';
import GroupMaker from './components/UserControl/GroupMaker';
import MiniProfile from './components/UserControl/MiniProfile';
import './css/reset.css'
import './css/app.css'

class App extends Component {
  async componentDidMount() {
    const body = await this.callApi();
    console.log(body);
  }

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    return body;
  }
  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="topRow">
          <GroupMaker/>
          <MiniProfile/>
        </div>
        <Filter/>
        <GroupList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
