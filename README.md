#vite

##创建

````
npm init @vitejs/app 项目名
````

##集成vue-router

会报一个没有导出vue-router的错，删掉包，清缓存，在下载一次就好了

node5清缓存命令：
````
npm cache verify
````

##项目

script的setup属性不需要使用

````
export default {
    components:组件
}
````

的方式使用组件，只需要引入即可
##使用postcss-px2rem
新建postcss.config.js文件，输入

````
module.exports = () => ( {
    plugins: [
        require( 'postcss-px2rem' )( { remUnit: 16 } )
    ]
} )
````

##使用element字体图标资源报404

直接把字体资源复制一份放到public目录下，在index.html中引入
