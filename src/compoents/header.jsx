import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="header-text">🌿 Habit Tracker</span>
        <span className="header-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
