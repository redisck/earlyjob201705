import React, {Component} from 'react';
export default class Samsung extends Component {
  //表示接收上下文对象
  static contextTypes = {
    name: React.PropTypes.string
  }

  render() {
    console.log(this.context,'f');
    return (
      <div>
        {this.context.name}
        Samsung
      </div>
    )
  }
}
