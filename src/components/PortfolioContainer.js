import React, { Component } from "react";
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Journal from './pages/Journal';
import Resume from './pages/Resume';

class Portfolio extends Component {
  state = {
    currentPage: 'About'
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === 'About') {
      return <About />;
    } else if (this.state.currentPage === 'Projects') {
      return <Projects />;
    } else if (this.state.currentPage === 'Journal') {
      return <Journal />;
    } else {
      return <Resume />;
    }
  };

  render() {
    return (
      <>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </>
    );
  }
}

export default Portfolio;
