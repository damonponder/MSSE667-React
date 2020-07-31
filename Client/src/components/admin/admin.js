import React, {Component} from 'react';
import './admin.style.scss'
import Line from '../line/line';
import Pie from '../pie/pie';
import DoughNutChart from '../doughnut/doughnut'
import BarChart from '../bar/bar'
import Toolbar from '../Toolbar/ToolBar';


export default class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Toolbar/>
                </div>
                   <div className='Chart1'><Line/><Pie/></div>
                    <div className='Chart2'><DoughNutChart/><BarChart/></div>   
            </React.Fragment>
        )
    }
}