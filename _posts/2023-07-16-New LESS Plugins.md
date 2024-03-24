---
layout: post
title: A new Plugin module has been released for developing customized plugins
author: LESS team
---

Recently, we have introduced a very useful new tool in LESS, which is the LESS Plugins. This tool is a python module that allows users to define their own
customized plugins based on LESS.

## How to use it
To use LESS Plugins, you can click 【Tools】【LESS Plugins】, and then you will see a dialog as follows.
This dialog list all the currently awailable plugins, on clicking each of them, you will see some description of the LESS.
![image](https://github.com/jianboqi/jianboqi.github.io/assets/1770654/b98f0b30-5353-4071-8275-56c9520c317e)

Choose one of the plugin, and click 【Run Plugin】, the specific GUI of the selected plugin will be shown, and you can input some parameters
and Run the plugin to get results.
![image](https://github.com/jianboqi/jianboqi.github.io/assets/1770654/c5329d6a-9f27-4c29-a43d-24b410d7d3fd)

## How to develop a new plugin
A demo plugin named APluginDevDemo is provided. You can copy this plugin a protype: copy this plugin ([LESS installation folder]/app/ython_script/LESSPlugins/StandardPlugins/APluginDevDemo) and rename the foler to your own plugin name (e.g., demo), then rename the APluginDevDemo.py to your own (e.g., demo), then modify the info.json, especially the PluginName attribute to your own name (e.g., demo). Write you own code with in run (or thread_fun) function of demo.py.

## Run plugin from Python script
If you want to do batch processing or run the plugin within you code, you can click 【File】【Example code to invoke plugin from Python script】in the GUI of LESS Plugin (not the main GUI). Then you can get an example code as follows. You prepare the paramters as json object, can you can invoke the plugin.
![image](https://github.com/jianboqi/jianboqi.github.io/assets/1770654/006fb54f-b594-4da2-84e7-f26573dae110)

![image](https://github.com/jianboqi/jianboqi.github.io/assets/1770654/c6bc4945-06ef-47bb-bfc0-f9cc5797e1ae)



