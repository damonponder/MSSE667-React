import React from './node_modules/react';

const toolbar = props => (
    <header>
        <nav>
            <div><a href="/"></a>The Logo</div>
            <div>
                <ul>
                    <li><a href="/execDashboard"></a>Graphs</li>
                    <li><a href="/spreadsheet"></a>Spreadsheet</li>
                    <li><a href="/presentation"></a>Presentation</li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;