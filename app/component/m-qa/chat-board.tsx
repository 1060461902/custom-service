import * as React from 'react'

import {AnswerItem,QuestionItem,BottomInput} from './question-item'
import Item from 'antd/lib/list/Item';

interface State{

}

export default class ChatBoard extends React.Component<any,State>{
    test = [
        {
            type:'text',
            content:'请在下方输入您的问题',
            src:''
        },
        {
            type:'result',
            content:'这是问题的答案',
            resultArray:[
                {
                    linkName:'asdqwe',
                    url:'http://124124124'
                },
                {
                    linkName:'as315dqw',
                    url:'http://124124124'
                },
                {
                    linkName:'中文',
                    url:'http://124124124'
                }
            ],
            src:''
        },
        {
            type:'feedback',
            src:''
        },
        {
            type:'text',
            content:'请在下方输入您的问题',
            src:''
        },
        {
            type:'result',
            content:'这是问题的答案',
            resultArray:[
                {
                    linkName:'asdqwe',
                    url:'http://124124124'
                },
                {
                    linkName:'as315dqw',
                    url:'http://124124124'
                },
                {
                    linkName:'中文',
                    url:'http://124124124'
                }
            ],
            src:''
        },
        {
            type:'feedback',
            src:''
        },
        {
            type:'text',
            content:'请在下方输入您的问题',
            src:''
        },
        {
            type:'result',
            content:'这是问题的答案',
            resultArray:[
                {
                    linkName:'asdqwe',
                    url:'http://124124124'
                },
                {
                    linkName:'as315dqw',
                    url:'http://124124124'
                },
                {
                    linkName:'中文',
                    url:'http://124124124'
                }
            ],
            src:''
        },
        {
            type:'feedback',
            src:''
        },
        {
            type:'text',
            content:'请在下方输入您的问题',
            src:''
        },
        {
            type:'result',
            content:'这是问题的答案',
            resultArray:[
                {
                    linkName:'asdqwe',
                    url:'http://124124124'
                },
                {
                    linkName:'as315dqw',
                    url:'http://124124124'
                },
                {
                    linkName:'中文',
                    url:'http://124124124'
                }
            ],
            src:''
        },
        {
            type:'feedback',
            src:''
        }
    ];
    constructor(props:any){
        super(props);
        this.state = {

        }
    }

    render():JSX.Element{
        return (
            <div>
                <ul style={{listStyle:'none',padding:'0 0 40px'}}>
                    {
                        this.test.map((item,index) => {
                            return (
                                <AnswerItem
                                    key={index}
                                    type={item.type as 'text'|'result'|'feedback'}
                                    content={item.content}
                                    src={item.src}
                                    resultArray={item.resultArray}>
                                </AnswerItem>
                            )
                        })
                    }
                </ul>
                <BottomInput/>
            </div>
        )
    }
}