import React, {Component} from 'react';
import './admin.style.scss'
import Line from '../line/line';
import Pie from '../pie/pie';


export default class Admin extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <Line/><Pie/>
                </div>
            </React.Fragment>
        )
    }
}