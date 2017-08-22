import * as CONSTANTS from '../actionTypes.js';
import { ajax } from '../../util/index.js';
let requestPrefix = 'http://localhost:8333';

// 设置 Cnt 的 action
export let setCnt = () => {
  return {
    type: CONSTANTS.ADD_CNT
  }
};
export let subCnt = () =>{
  return {
    type:CONSTANTS.SUB_CNT
  }
}

export default {
  setCnt,subCnt
}
