import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({index: num});
  }

  render() {
    return (
      <article>
        <h1></h1>
        <ul>s</ul>
    </article>
    );
  }
}
