import Mock from "mockjs";

import banner from './Banner.json';
import floor from './Floor.json';

Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})

//入口文件需要引入一下，相当于执行一次