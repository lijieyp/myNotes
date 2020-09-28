## import声明

> import声明有两种用法,一个是直接import一个模块,另一个是带from的import,它能引入模块里的一些信息。

```javascript
imoprt "mod"; // 引入一个模块
import v from "mod"; 把模块默认的导出值放入变量v
```

带from的import细分又有三种用法,我们可以分别看下例子:

- import x from "./a.js";   引入模块中导出的默认值.
- import {a as x,modify} from "./a.js";   引入模块中的变量.
- import * as x from "./a.js";   把模块中的所有的变量以类似对象属性的方式引入.

第一种方式还可以跟后两种组合使用.

- import d,{a as x,modify} from "./a.js"
- import d, * as x from "./a.js"



## export声明

模块中导出变量的方式有两种,一种是独立使用export声明,另一种是直接在声明型语句前添加export关键字。

独立使用export声明就是一个export关键字加上变量名列表,例如:

```javascript
export {a, b, c};
```

我们也可以直接在声明型语句前添加export关键字,这里的export可以加在任何声明性质的语句之前,整理如下:

- var
- function(含async和generator)
- class
- let
- const

export还有一种特殊的用法,就是跟default联合使用.export default表示导出一个默认变量值,它可以用于function和class.这里导出的变量是没有名称的,可以使用import x from "./a.js"这样的语法,在模块中引入.

export default还支持一种语法,后面跟一个表达式,例如:

```javascript
var a = {};
export default a;
```

但是,这里的行为跟导出变量是不一致的,这里导出的是值,导出的就是普通变量a的值,以后a的变化与导出的值就无关了,修改变量a,不会使得其他模块中引入的default值发生改变.

在import语句前无法加入export,但是我们可以直接使用export from语法.

export a from "a.js"