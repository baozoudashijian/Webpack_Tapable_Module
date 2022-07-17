# Webpack_Tapable_Module
研究Webpack中的Tapable

## 重点

1. webpack通过tapable将实现与流程解耦，所有具体实现通过插件形式存在
2. tapable中主要提供同步与异步两种钩子

## 同步钩子 SyncHook

1. 同步钩子通过tap注册回调
2. 同步钩子以call方法执行

## 异步钩子 SyncParallelHook

1. 异步钩子通过tapAsync或者tapPromise注册回调
2. 通过callAsync或者promise方法执行    
