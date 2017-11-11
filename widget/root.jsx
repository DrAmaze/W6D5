import React from 'react';
import Tabs from './tabs';
import Clock from './clock';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{(<Root/>, root)}</li>
        </ul>
      </div>
    );
  }
}
