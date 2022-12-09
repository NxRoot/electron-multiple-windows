# Electron Multiple Windows 
Example of electron app with multiple windows.

## Description
* This example was inspired by [this issue](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/623), and an old [approach](https://medium.com/@ZoeDreams/multiple-electron-windows-using-a-view-manager-and-react-js-6d8b1e209faf) from 2017.
* Bundles are now handled individually, instead of duplicating the entire bundle.
* Redirection is done with [@electron-forge/plugin-webpack](https://www.electronforge.io/config/plugins/webpack) entrypoints, instead of react-router.

## How does it work
### The real magic happens in the webpack entrypoints:

```js
"plugins": [
  [
    "@electron-forge/plugin-webpack",
    {
      "mainConfig": "./webpack.main.config.js",
      "renderer": {
        "config": "./webpack.renderer.config.js",
        "entryPoints": [
          {
            "html": "./src/windows/index.html",
            "js": "./src/windows/home/index.tsx",   // Window 1
            "name": "main_window"
          },
          {
            "html": "./src/windows/index.html",
            "js": "./src/windows/other/index.tsx",  // Window 2
            "name": "other"
          }
        ]
      }
    }
  ]
]
```
As you can see the `html` index is always the same, but the `js` bundles are poiting to different locations.

### How to manage shared imports
You probably want to share **styles** or **providers** across all your windows:

<img src="https://i.ibb.co/V32QRdZ/indexmodules.png" style="width: 200px" alt="Alt text" title="Optional title">

> The default `index.tsx` is always the top level of your application where you can wrap providers.

**Component imports are managed **automatically** by webpack configuration.** (Each bundle requires used imports only)
 