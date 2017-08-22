import React,{Component} from 'react';
import Father from "./Father";
export default class GrandFather extends Component{
  //定义下层组件的上下文对象的类型，规定上下文对象的名称和类型
  static childContextTypes = {
      name:React.PropTypes.string
  }
  //返回上下文对象
  getChildContext(){
     return {name:'zfpx'};
  }
    render(){
        return (
            <div>
              <Father>

              </Father>
            </div>
        )
    }
}
