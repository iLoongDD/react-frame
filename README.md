# react-frame
### react16+webpack3.9+react-router-dom4整个环境配置</br>
#### 参考网址：</br>
  1.[配置过程](https://github.com/brickspert/blog/issues/1)(过程还是这么个过程，不过配置方面由于版本的更新，变化还是很大的，需要多查查)  
  2.[eslint引入](https://www.cnblogs.com/le0zh/p/5619350.html)(按照自己的需要进行定义)  
  3.[webpack中文网](https://doc.webpack-china.org/guides/hot-module-replacement)  
  4.[webpack基本配置](https://www.cnblogs.com/null11/p/7491220.html)
#### 遇到的变化：  
  1.从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用，安装prop-types库来定义contextTypes。([react中文网](http://www.css88.com/react/docs/typechecking-with-proptypes.html))  
  2.react-router从4.0后进行了很大的更新。需要引入react-router-dom.在这个版本路由不需要写在一起，而是当做一个组件来使用。([react-router4初探](http://blog.csdn.net/sinat_17775997/article/details/69218382)）)  
   3.react-hot-loader配置热替换
