/**
 * 侧边菜单组件
 */
import React from 'react';
import {Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu,Item = Menu.Item;

import 'antd/dist/antd.css';
import './sider.less';

let logo = require('./gtn-logo.png');

export default class Sider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            current:props.current
        }
    }

    exit = () => {

    }

    render(){
        return (
            <div>
                <div id='left-menu'>
                    <img src={logo} id='logo'/>
                    <Menu
                        theme='dark'
                        style={{width:255}}
                        mode='inline'
                        selectedKeys={[this.state.current]}>
                        <Item key='rightcount'><span><a href='./m-qa.html'><Icon type='pie-chart'/>统计</a></span></Item>
                        <Item key='feedback'><span><Icon type='smile'/><a href='./feedback.html'>反馈</a></span></Item>
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