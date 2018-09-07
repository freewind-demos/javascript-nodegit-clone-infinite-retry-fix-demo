JavaScript Nodegit Clone Infinite Retries Fix Demo
==================================================

在Nodegit中有一个问题，当我们使用username/password去clone一个repo时，如果有误，它不会退出，而是进入死循环，一直重试。

这个issue位于: <https://github.com/nodegit/nodegit/issues/1133>

错误原因应该是来自由底层使用的libgit2库：<https://github.com/nodegit/nodegit/issues/1133#issuecomment-271148133>

所以我们只能手动的记录一下重试次数，发现次数过多时，自己throw一个error强迫它退出。

在我们这个Demo里，直接写死了一个错误的用户名和密码，供重现问题：

```
node demo.js
```

输出如下：

```
---------------- credentials (tries: 1)---------------
---------------- credentials (tries: 2)---------------
---------------- credentials (tries: 3)---------------
Authentication is failed with 3 tries, please check your username and password
{ Error: Method clone has thrown an error. errno: -1, errorFunction: 'Clone.clone' }
```

注意
---

在Mac下使用nodegit比较麻烦，参考这里的准备工作：<https://github.com/freewind-demos/javascript-nodegit-clone-demo>