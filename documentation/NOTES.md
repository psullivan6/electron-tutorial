# Notes

## Tutorial Notes

- Electron doesn't follow normal Semver, but follows Chromium versions, so it might be beneficial to install a specific version of electron
- Many of Electron's core modules are Node.js event emitters that adhere to Node's asynchronous event-driven architecture. (source: https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#calling-your-function-when-the-app-is-ready)
- Node's `process.platform` variable can help you to run code conditionally on certain platforms. Note that there are only three possible platforms that Electron can run in: win32 (Windows), linux (Linux), and darwin (macOS). (source: https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#managing-your-apps-window-lifecycle)
- you have a polyfilled require function that only has access to a limited set of APIs. (source: https://www.electronjs.org/docs/latest/tutorial/tutorial-preload#augmenting-the-renderer-with-a-preload-script)

## Misc. Takeaways

- cannot use inline styles or `style` tag because of content security meta tags
- Need to compile the various scripts to minify the code
- Communication between the platform/browser and the web app is via window variables setup via an Electron `contextBridge`
  - Should expose all relevant and custom created "API" functions in a single window variable
