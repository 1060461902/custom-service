import * as React from 'react';
import {Avatar,Button,Input} from 'antd';

import 'antd/dist/antd.css';

/**
 * text:纯文本;result:结果;feedback:反馈;
 */

interface Result{
    linkName:string;
    url:string;
}

interface AnswerPropsForm{
    key:number;
    type:('text'|'result'|'feedback');
    src?:string;
    content?:string;
    resultArray?:Array<Result>;
}

interface QuestionPropsForm{
    content:string
}

interface BottomInputState{
    content:string
}

export function AnswerItem(props:AnswerPropsForm):JSX.Element{
    let header:JSX.Element;
    let board:JSX.Element;
    if(props.src){
        header = <Avatar src={props.src}></Avatar>
    }else{
        header = <Avatar style={{ backgroundColor: '#87d068' }} icon='user'></Avatar>
    }
    switch(props.type){
        case 'text':
            board = <p>{props.content}</p>
            break;
        case 'result':
            board = (
                <div>
                    <div style={{textAlign:'left'}}>
                        {props.content}
                    </div>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        {
                            props.resultArray.map(function(item:Result,index:number){
                                return <li key={index}><a href={item.url}>{item.linkName}</a></li>
                            })
                        }
                    </ul>
                </div>
            )
            break;
        case 'feedback':
            board = (
                <div>
                    <p>请点击下方按钮反馈</p>
                    <div>
                        <Button style={{float:"right"}}>反馈</Button>
                    </div>
                </div>
            )
            break;
    }
    return(
        <li style={{padding:'10px 5%',color:'#ffffff'}}>
            <div style={{display:'inline-block',width:'15%',float:'left'}}>
                {header}
            </div>
            <div style={{display:'inline-block',width:'85%',backgroundColor:'#87d068',padding:'5px',borderRadius:'5px'}}>
                <div style={{width:0,height:0,borderWidth:'10px',borderStyle:'dashed solid dashed dashed',fontSize:0,lineHeight:0,borderColor:'transparent #87d068 transparent transparent',position:'absolute',transform:'translateX(-20px)'}}></div>
                {board}
            </div>
        </li>
    )
}

export function QuestionItem(props:QuestionPropsForm):JSX.Element{
    return(
        <div>
            <p>{props.content}</p>
        </div>
    )
}

export class BottomInput extends React.Component<any,BottomInputState>{
    constructor(props:any){
        super(props);
        this.state = {
            content:''
        }
    }

    render():JSX.Element{
        return (
            <div style={{padding:'0 5%',position:'fixed',bottom:'10px',width:'100%'}}>
                <Input style={{width:'70%',}}></Input>
                <Button type='primary' style={{width:'30%',}}>发送</Button>
            </div>
        )
    }
}