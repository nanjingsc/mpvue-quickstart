# mpvue-quickstart

> fork 自 [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)修改而来。

## 说明
* 使用`flyio`封装了网络请求，主要在request做了拦截，添加了cookie，同时response根据接口ret做了拦截;
* 注入this.$api;
* 封装了部分小程序接口转为promise；
* 使用[min](https://meili.github.io/min/),主要为了使用min构建的小程序组件库，配置文件见`min.config.json`；


## 基本用法
``` bash
$ npm install -g vue-cli
$ vue init nanjingsc/mpvue-quickstart my-project
$ cd my-project
$ npm install
$ min build
$ npm run dev
```

更多详细文档请查阅 [quickstart](http://mpvue.com/mpvue/quickstart/)。

bug 或者交流建议等请反馈到 [mpvue/issues](https://github.com/Meituan-Dianping/mpvue/issues)。
