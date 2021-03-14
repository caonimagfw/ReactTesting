# ReactTesting
 Hello FrontEnd Testing

## 1. set proxy 

## 2.component version:
* react : 16.14.0
* react-dom : 16.14.0
* @bable/core : 7.12.17
* @bable/cli : 7.12.17
* @bable/preset-es2015 : default
* @bable/preset-react : @7.12.13
* @babel/plugin-transform-react-jsx: ^7.12.13  
* @babel/helper-plugin-utils: ^7.12.13                    
* @babel/plugin-transform-react-jsx-development: ^7.12.12 
* @babel/preset-env : 7.12.17
* jsdom: 16.5.1
* jsdom-global :3.0.2
* enzyme : 3.11.0
* enzyme-adapter-react-16 : 1.15.6
* jest : 26.6.3
* jest-cli : 26.6.3
* babel-jest: 26.6.2
### install script 
~~~
npm i react@16.14.0 react-dom@16.14.0
npm i jquery

//contains jest-cli and jest/core
npm i jest@26.6.3 -D  
npm i @babel/core@7.12.17 -D
npm i @babel/cli@7.12.17 -D
// npm i @babel/preset-es2015 -D
npm i babel-core@7.0.0-bridge.0 -D
npm i babel-jest@26.6.3 -D
npm i @babel/preset-env@7.12.17 -D
npm i @babel/preset-react@7.12.13 -D
npm i @babel/plugin-transform-runtime@7.12.17 -D
npm i @babel/plugin-transform-react-jsx@7.12.13 -D
npm i @babel/plugin-transform-react-jsx-development@7.12.12 -D

npm i enzyme@3.11.0 -D
npm i enzyme-adapter-react-16@1.15.6 -D
npm i jsdom@16.5.1 jsdom-global@3.0.2 -D
npm i jest-xunit -D
npm i jest-html-reporters -D

~~~
## 3. npm cmd:
```
install : npm install [xxx] 
--save-dev( -D ): for unit test , save to development 
npm view react versions : get version list 
```
## 4. run test jest

mount: self and child 
shallow: only self , not contain child
render: for snapshot

## Ref 
####  Babel Browser List
>https://github.com/browserslist/browserslist

#### Babel Preset
>https://www.cnblogs.com/moqiutao/p/12980258.html
>https://juejin.cn/post/6844903612842246151

#### Babel V7
>https://babeljs.io/docs/en/v7-migration

#### Babel Preset
https://babeljs.io/docs/en/babel-preset-env

#### jest 
>https://juejin.cn/post/6844903763526828045
>https://segmentfault.com/a/1190000009220530
>https://www.sitepoint.com/test-react-components-jest/
>https://github.com/jest-community/awesome-jest

#### enzyme
>http://echizen.github.io/tech/2017/02-12-jest-enzyme-method
>https://github.com/enzymejs/enzyme/issues/341

#### mock API
>https://www.valentinog.com/blog/fake/

#### Reporter
>https://github.com/sscaff1/jest-xunit
>https://github.com/Hazyzh/jest-html-reporters
>https://github.com/Hargne/jest-html-reporter