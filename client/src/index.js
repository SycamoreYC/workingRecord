import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import FlexibleBoxes from './FlexibleBoxes';
import MoveCursor from './MoveCursor';

const Home = () =>
  <div>
    <h2>Welcome to my silly working record </h2>
  </div>
const BasicExample = () => (
  <Router style={{height: '100%'}}>
    <div style={{display: 'flex', height: '100%'}}>
      <ul style={{width: '20%', listStyle: 'none', minWidth: '150px'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flexibleBoxes">flexible boxes</Link></li>
        <li><Link to="/movecursor">move cursor</Link></li>
      </ul>

      <div style={{padding: '20px', display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Route exact path="/" component={Home}/>
        <Route path="/flexibleBoxes" component={FlexibleBoxes}/>
        <Route path="/movecursor" component={MoveCursor} />
      </div>
    </div>
  </Router>
)

ReactDOM.render(
  <BasicExample />,
  document.getElementById('app')
);

module.hot.accept();
