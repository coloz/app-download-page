# App下载页面  
App下载页面，可用于IOS、android App发布。  

## 使用方法  
推荐使用方法就是让手机扫二维码进入到本页面  
进入页面后，android手机会自动下载apk文件，ios会自动打开app store的app页面，微信会提示选择浏览器打开  

## 编译  
先修改配置：  
```js
export const CONFIG = {
    title: '点灯·blinker',                                  // app名称
    icon: 'assets/icon.png',                                // app图标
    url_ios: 'https://apps.apple.com/cn/app/idxxxxxxxxxx',  // app store页面地址
    url_android: 'https://xxx.com/app.apk'                  // android apk资源地址
}
```

```
npm i
ng build --prod
```

## 部署  
https://angular.cn/guide/deployment