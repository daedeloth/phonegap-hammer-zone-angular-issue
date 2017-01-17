No tick call when using phonegap + hammerjs + angularjs or zonejs + android
===========================================================================
I have an app built in angular2 that works fine in browser and when phonegap-bundled for iOS. It uses hammerjs to handle touch events like pan and pinch.

However, when I bundle it for Android, things go haywire.

After some debugging I managed to isolate the problem to "tick" not being called as often as it should. On iOS and in browser (any browser really, even IE), during any drag action the tick method is called on even the slightest move. When bundled for android, it is only called at the end of the drag, and even then not always.

I've added a console.log in core.umd.js to monitor the tick method calls, so I'm pretty sure the problem originates here.

Anyone else noticed similar behaviour?

Getting started
---------------
```bash
npm install
jspm install
npm start
```

Building (phonegap)
-------------------
* Make sure you have grunt installed.

```bash
npm install
node_modules/jspm/jspm.js install
grunt
```

Now zip the content from the build/ folder and upload it to build.phonegap.com.