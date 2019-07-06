<h1 align="center">Ftb Cli 👋</h1>
<p align="center">
  <img src="https://badge.fury.io/js/ftb-cli.svg" />
  <a href=" ">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ftb-family/ftb-cli/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ftb-family/ftb-cli/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

<h6 align="center">React 版本已经发布 😂😝😂. 正在开发基于vue的模板</h6>

## 前言
本项目是一个命令行工具，支持创建`vue`和`react`的项目，是否使用单元测试, eslint取决于你; 同时该命令行也支持创建npm package, 纯js库, vue插件, react插件,完备的开发环境，支持发布到npm.

[English](./README.md) | 简体中文

### 🏠 [首页](https://github.com/ftb-family/ftb-cli#readme)

## 安装

```sh
npm install ftb-cli -g
```

## 使用

创建vue和react项目:
```sh
# name ~ [vue, react]
ftb init [name]
```

创建npm package项目:
```sh
# name ~ [js, vue, react]
ftb add [name]
```

## 本地开发调试
```js 
git clone https://github.com/ftb-family/ftb-cli.git

cd ftb-cli

npm install

cd packages/ftb-cli

npm link

ftb init react
```

## 作者

👤 **biyuqiwan@163.com**

* Github: [@ BiYuqi](https://github.com/BiYuqi )

## 🤝 贡献
欢迎贡献代码，提交issue和PR!<br />[issues page](https://github.com/ftb-family/ftb-cli/issues). 

## 更新日志
[更新日志](./packages/ftb-cli/CHANGELOG.md)

## 📝 License

Copyright © 2019 [biyuqiwan@163.com](https://github.com/ ).<br />
This project is [MIT](https://github.com/ftb-family/ftb-cli/blob/master/LICENSE) licensed.