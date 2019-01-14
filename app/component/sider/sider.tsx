import * as React from 'react';
import {Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu,Item = Menu.Item;

import 'antd/dist/antd.css';
import './sider.less';

let logo = require('./gtn-logo.png');

interface Props{
    
}

interface State{
    username:string;
    current:string;
}

export default class Sider extends React.Component<Props,State>{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            current:'statistics'
        }
    }

    exit:() => void = () => {

    }

    render():JSX.Element{
        return (
            <div>
                <div id='left-menu'>
                    <img src={logo} id='logo'/>
                    <Menu
                        theme='dark'
                        style={{width:255}}
                        mode='inline'
                        selectedKeys={[this.state.current]}>
                        <SubMenu key='statistics' title={<span><Icon type='pie-chart'/>统计</span>}>
                            <Item key='1'><a href='./m-qa.html'>正确率统计</a></Item>
                        </SubMenu>
                        <Item key='feedback'><Icon type='smile'/>反馈</Item>
                    </Menu>
                </div>
                <div id='right-wrap'>
                    <Menu mode='horizontal'>
                        <SubMenu title={<span><Icon type='user'/>{this.state.username}</span>}>
                            <Item key='setting:1' onClick={this.exit}>退出</Item>
                        </SubMenu>
                    </Menu>
                    <div className='right-box'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}