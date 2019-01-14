/**
 * sider声明文件
 */
import * as React from 'react';

interface Props{
    current:('rightcount'|'feedback');
}

interface State{
    username:string;
    current:('rightcount'|'feedback');
}

declare class Sider extends React.Component<Props,State>{
    constructor(props:Props);
    exit:() => void;
    render:() => JSX.Element;
}

export default Sider;