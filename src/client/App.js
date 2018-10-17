import React, { Component } from 'react';
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
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
