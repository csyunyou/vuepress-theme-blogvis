# vuepress-theme-blogvis

> 基于vuepress实现的带有可视化风格的博客主题

demo:https://csyunyou.github.io/vuepress-theme-blogvis-demo/vue/

## 特性
- [x] 可视化主题:bar_chart:
- [x] 归档 
- [x] 分类
- [x] 主页
- [ ] 搜索
- [ ] 分页
- [ ] 性能优化
- [ ] 样式美化
- [ ] 移动端响应式

## 使用方法
``` 
clone整个项目
npm install//yarn install
npm run docs:dev

构建:npm run docs:build
//后面看情况会决定是否发布npm包
```

### 目录结构
```
.
├── README.md
├── articles
│   ├── .vuepress
│   │   ├── config.js //主题配置项
│   │   ├── public
│   │   │   ├── coverphoto.jpg //主页封面照片
│   │   │   └── postCover// 每篇博客的封面照片，文件名需要和博客中cover字段中指定的一样
│   │   └── theme //主题
│   ├── node.md //博客1
│   ├── react.md //博客2
│   ├── vis.md //博客3
│   └── vue.md //博客4
└── package.json
```

### 博客格式
```
---
category: web //类别
date: 2018-03-01 17:12 //时间
cover: vueCover.png //封面照片
---
# vue
## 概述
Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页面应用的Web应用框架。 2016年一项针对JavaScript的调查表明<!-- more -->，Vue有着89%的开发者满意度。 在GitHub上，该项目平均每天能收获95颗星，为Github有史以来星标数第10多的项目。
```

### config.js配置项
```
themeConfig: {
    blogger:'云灬游',
    categories:[{label:'数据可视化',val:'vis'},{label:'Web前端',val:'web'},{label:'Node',val:'node'}],//分类，label用于在网页显示，val用于在每篇文章的frontmatter中作为标记值
    repo: 'https://github.com/csyunyou', // 添加 github 链接
    coverPhoto:'coverphoto.jpg', // 主页封面照片
    defaultPostCover:'defaultPostCover.jpeg', //博客的默认封面图片
    categoryColorMap:['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628'],
    motto:'拥有的从来都是侥幸，无常才是人生的常态，所有的成熟都是从失去开始',//座右铭
    interval:1//归档周期（月），如1表示每个月进行一次归档
}
```

## License
[WTFPL](http://www.wtfpl.net/txt/copying/)
