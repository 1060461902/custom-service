import * as React from 'react';
import {Button,Input,Icon} from 'antd';

import './login.less';
import 'antd/dist/antd.css'

interface State{
    username:string;
    password:string;
}

export default class Login extends React.Component<any,State>{
    userNameInput:Input;
    passwordInput:Input;

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    emptyName:() => void = () => {
        this.setState({
            username:''
        });
        this.userNameInput.focus();
    }

    changeName:(e:React.ChangeEvent<HTMLInputElement>) => void  = (e) => {
        this.setState({
            username:e.target.value,
        })
    }

    emptyPwd:() => void = () => {
        this.setState({
            password:''
        });
        this.passwordInput.focus();
    }

    changePwd:(e:React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        this.setState({
            password:e.target.value,
        })
    }

    login = () => {
        const {username,password} = this.state;
        fetch('',{
            method:'post',
            headers:{
                'Content-Type':'apllication/json'
            },
            body:JSON.stringify({
                username,
                password,
            })
        }).then(function(res){
            if(res.status === 200){
                return res.json()
            }
        }).then(function(data){

        }).catch(function(err){
            console.log(err)
        });
    }

    render():JSX.Element{
        const {username,password} = this.state;
        const u_suffix = username ? <Icon type='close-circle' onClick={this.emptyName}></Icon>:null;
        const p_suffix = password ? <Icon type='close-circle' onClick={this.emptyPwd}></Icon>:null;
        let inputStyle:React.CSSProperties = {
            display:'block',
            width:'80%',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '20px'
        }
        let buttonStyle:React.CSSProperties = {
            left: '50%',
            transform: 'translateX(-50%)',
        }

        return(
            <div className='input-part'>
                <div>
                    <p className='login-title'>智能客服后台管理系统</p>
                </div>
                <Input
                    style={inputStyle}
                    placeholder='请输入账号'
                    prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25)'}}></Icon>}
                    suffix={u_suffix}
                    value={username}
                    onChange={this.changeName}
                    ref={node => this.userNameInput = node}>
                </Input>
                <Input
                    style={inputStyle}
                    type='password'
                    placeholder='请输入密码'
                    prefix={<Icon type='lock' style={{color:'rgba(0,0,0,.25)'}}></Icon>}
                    suffix={p_suffix}
                    value={password}
                    onChange={this.changePwd}
                    ref={node => this.passwordInput = node}>
                </Input>
                <Button
                    onClick={this.login}
                    type='primary'
                    style={buttonStyle}>登录</Button>
            </div>
        )
    }
}