---
title: Download LESS
layout: page
permalink: /download-less/
sectionid: page_dowload
published: true
---


#### New release:

If you have problems under Windows,please refer to [problems under windows](http://lessrt.org/docs/installation/)
`[注：请不要使用中文路径]`
<br>
<br>

##### 2019-4-10 (`version 1.8.8`):
**Windows**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.8.8/LESS-1.8.8-win64.exe" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.8'});">LESS-1.8.8-win64</a>. 

**Linux**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.8.8/LESS-1.8.8-Ubuntu16.04.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.8'});">LESS-1.8.8-Ubuntu16.04</a>. 

* Update the calculation of four components, when the number of bands is larger than or equal to 5, the output four-component image will contain 5 bands, the first one is the type i.e., 1-illuminated soil, 2- illuminated object, 3-shaded soil, 4-shaded object. The others are proportions of each component.
* The LAI module now can output vertical profile of LAI
* Fix some bugs envolved in FPAR/Albedo simulation
* The 2D display has been enhanced, which can show the tree crown except for the tree position.

##### 2019-3-11 (`version 1.8.7`):
**Windows**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.8.7/LESS-1.8.7-win64.exe" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.7'});">LESS-1.8.7-win64</a>. 

**Linux**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.8.7/LESS-1.8.7-Ubuntu16.04.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.7'});">LESS-1.8.7-Ubuntu16.04</a>. 

* Add a new Database which contains several tree objects(OBJ file) under folder "LESS/app/Database"
* A new linechart tool is added to plot optical properties


##### 2018-11-30(`version 1.8.6`):

Windows: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/LESS-1.8.6.exe" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.6'});">LESS-1.8.6-Windows</a>. 

Linux-Ubuntu 16.04: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/LESS-1.8.6-ubuntu16.04-GUI.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSLin64bitv1.8.6'});">LESS-1.8.6-Ubuntu16.04-GUI</a>. 

For more information of using LESS under linux,e.g., CentOS, please refer to [Use LESS under Linux](http://lessrt.org/docs/installation/)

* Prosect-5 and Prospect-D have been integrated into LESS.
* Vertical profile of fPAR for each scene component can be simulated.

![prospect_fpar1.jpg]({{site.baseurl}}/img/content/prospect_fpar1.jpg)

2018-11-08(`version 1.8.5`): Download it from here: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS1.8.5/LESS-1.8.5.exe" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.5'});">LESS V1.8.5</a>

* The reflectance of each pixel of the terrain can be different by inputing a land albedo map.
* Using triangle mesh as the terrain.

2018-9-14(`version 1.8.4`): Download it from here: <a href="https://github.com/jianboqi/lessrt/releases/download/1.8.4/LESS-1.8.4.exe" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.7', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.8.4'});">LESS V1.8.4</a>

* Simulating four component products (e.g., sunlit leaf, sunlit soil, shaded soil, shaded leaf).
* Introduce repetitive scene for simulating horizontally infinite scenes.
* Large-scale thermal infrared images (brightness temperature). 

2018-1-11(`version 1.7`): Download it from here: <a href="https://mega.nz/#!y54UhZYR!KtuD8s4LD-u0ipar3Y_I79T7NegOJwwudMPV7xDUQY0" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.7', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.7'});">LESS V1.7</a>

* Circular Fisheye camera, with different projections.

![fisheye.png]({{site.baseurl}}/img/content/fisheye.png)
* be able to set NoDataValue

2017-10-15(`version 1.6`): Download it from here: <a href="https://mega.nz/#!O4RzHQrS!XemIk_kCFUj5XwEb2URvjRQiSXpeB9qH_D4P-pLfgpQ" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.6', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.3'});">LESS V1.6</a>

* Upward and downward solar radiation calculation
* Many bugs fixed

2017-5-18(`version 1.3`): Download it from here: <a href="/projects/less/lessRelease/LESS-1.3.exe.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.3', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.3'});">LESS V1.3</a>

* A complete new tool to extract tree positions from CHM map.
* Supporting land cover map (each land cover type can be assigned with its own optical property), <a href="http://7xawu0.com1.z0.glb.clouddn.com/landcover.png">example</a>.


2017-3-29(`version 1.2`): Download it from here: <a href="/projects/less/lessRelease/LESS-1.2.exe.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.2', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.1'});">LESS V1.2</a>

* A new tool to define object position by mouse click.
* Supporting background image, which is useful when creating scenes based on maps (e.g. land cover map)
* Supporting output synthesized RGB image to have a better view of the created scene. 
* Fix some bugs when import from optical database


2017-3-27(`version 1.1`): Download it from here: <a href="/projects/less/lessRelease/LESS-1.1.exe.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.1', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.1'});">LESS V1.1</a>

* Unlimited band numbers.
* Add bandwidth features for band definition
* A new tool to define band number and bandwidth, especially for large number of bands.
* A new tool to define instances of objects by poisson distributon and Polygons.
* select optical properties from some predefined database.


Old release:

A windows 64bit version can be downloaded from here:
<a href="/projects/less/lessRelease/LESS-1.0.exe.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.0', eventAction: 'directdownload', eventLabel: 'LESSWin64bitv1.0'});">LESS1.0</a>

An example simulation project can be downlowded:
<a href="/projects/less/lessRelease/Example.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadexample', eventAction: 'directdownload', eventLabel: 'LESSWin64bit'});">Exmaple</a>
