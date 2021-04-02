## 介绍
适用于**avm多端**以及**原生微信小程序**图表库

此源码是基于[chart.js（2.9）](https://github.com/chartjs/Chart.js/tree/2.9)改造的avm版本，可适用于多端以及原生微信小程序。一般情况你不需要关心此源码，只需要使用即可

## 使用

使用同[chart.js](https://github.com/chartjs/Chart.js/tree/2.9)基本一致，点击[查看文档](https://www.chartjs.org/docs/latest/)。

### 在avm使用

1. 使用 [APICloud Studio 3](https://www.apicloud.com/studio3?uzchannel=30) 作为开发工具。
2. 下载本源码，二级目录[avm-demo](https://github.com/apicloudcom/chart.js//tree/master/avm-demo)为demo目录。
3. 在开发工具中新建项目，并将demo导入新建的项目中，注意更新 config.xml 中的 appid 为你项目的 appid。
4. 使用 AppLoader 进行真机同步调试预览。
5. 或者提交项目源码，并为当前项目云编译自定义 Loader 进行真机同步调试预览。
6. [云编译](https://www.apicloud.com/appoverview?uzchannel=30) 生成 Android & iOS App 以及微信小程序源码包。

### 在原生微信小程序中使用

1. 下载本源码，二级目录[wx-demo](https://github.com/apicloudcom/chart.js//tree/master/wx-demo)为微信的demo目录。
2. 打开微信开发者工具，导入wx-demo

### 在浏览器中运行使用

1. 直接运行二级目录[samples](https://github.com/apicloudcom/chart.js//tree/master/samples)中的index.html在浏览器


## License

MIT © [APICloud](https://www.apicloud.com)