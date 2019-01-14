import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Sider from './component/sider/sider';
import Feedback from './component/feedback/feedback';

ReactDOM.render(
<Sider current='feedback'>
    <Feedback/>
</Sider>,document.getElementById('app'));