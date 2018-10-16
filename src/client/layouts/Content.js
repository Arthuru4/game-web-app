import React, {Component} from 'react';

export default class Content extends Component {
    render() {
        return (
            <div className='game-content'>
                <iframe src="../../../game/index.html" width="1280px" height="720px"></iframe>
            </div>
        )
    }
}