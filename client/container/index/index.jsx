import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
/**
 * 1.增加action-type
 * 2.改reducer
 * 3.改action
 * 4.调用action中的方法发射action
 */
@connect((state) => {
  return {
    cntData: state.cnt
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  clickHandler () {
    this.props.setCnt();
  }


  render () {
    let { cnt } = this.props.cntData;

    return (
        <div className="page-wrap main-page" ref="mainPage">
          首页
          <br/>
          <span>使用 react global state(redux store) 切换路由后数据还在</span>
          <br/>
          <button onClick={this.clickHandler.bind(this)}>点击数量加一</button>
          <button onClick={()=>this.props.subCnt()}>点击数量减一</button>
          <br/>
          <span>数量：</span><span>{cnt}</span>
        </div>
    )
  }
}
import './index.less';
