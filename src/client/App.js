import React, { Component } from 'react';
import Header from './layouts/header';
import Content from './layouts/content';
import Footer from './layouts/footer';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
