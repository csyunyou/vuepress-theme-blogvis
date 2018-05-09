// dcos/.vuepress/config.js
module.exports = {
    // theme:'blogvis',
    dest: './dist', // 设置输出目录
    base: '/vuepress-theme-blogvis-demo/',
    themeConfig: {
        // 添加导航栏
        blogger:'云灬游',
        categories:[{label:'数据可视化',val:'vis'},{label:'Web前端',val:'web'},{label:'Node',val:'node'}],
        // coverPhont:'./'
        repo: 'https://github.com/csyunyou', // 添加 github 链接
        coverPhoto:'coverphoto.jpg',
        defaultPostCover:'defaultPostCover.jpeg',
        categoryColorMap:['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628'],
        motto:'拥有的从来都是侥幸，无常才是人生的常态，所有的成熟都是从失去开始',
        interval:1
    }
}