#使用 using guide

```
npm install //下载模块
npm run dev //webpack开发模式打包
npm run base //webpack默认模式打包
npm run server //启动开发模式下热部署的webpack微型服务器
```

###注意 waring
webpack配置文件是根据app文件夹**根目录**下的```/\.(tsx|jsx|js)$/```类型的文件来————判定入口、生成html文件，app/\*.(tsx|jsx|js)与public/\*.html要一一对应

###UI库 UI library
同时支持阿里的antd与微软的fabric