

# readable_backtrace

I found debug library very helpfull, but output very unreadable. As a noob I publish that snippet for other noobs ;)

## Usage

```javascript
var backtrace = require('readable_backtrace');
...
backtrace();
```

If you pass TRUE as parameter it will print out full paths to files.

Can print out
```bash
nextRoute
index.js:100:7
  pass
  index.js:145:5
    param
    index.js:138:11
      callbacks
      index.js:164:37
        routeTargetFnWrapper
        bind.js:176:5
          module.exports.index
          IndexController.js:13:3
            module.exports
            index.js:16:14
              new Stack
              index.js:33:18
                Object.printStackTrace.implementation.run
                stacktrace.js:43:29
                  Object.printStackTrace.implementation.createException
                  stacktrace.js:54:22
```


## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
