import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from '../layouts/Header';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';
import store from '../store/index';
import '../styles/app.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default {App};
