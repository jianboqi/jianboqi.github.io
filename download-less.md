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

#### 2023-07-16 (version 2.1.4-2023-07-16):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link">LESS-2.1.4-2023-07-16-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y">LESS-2.1.4-2023-07-16-win64</a>)

* The definition of instance of each object now support rotation and scaling, which means that for a import object, you can defined it to different locations with different rotations and scaling. This is made available by clicking the 【Extra Info】buttion in the Objects section of LESS GUI.
* For the LiDAR Module, Now, we can input a pulse information text file to define the origin and direction of each individual pulses, which enables to simualte more complex scanning patterns, such as mobile lidar.
* Photon counting LiDAR is implemented with solar noise considered.
* Incident PAR for each horizontal layer is outputed for the FPAR module.
* A very useful tool which is named **LESS Plugins** (【Tools】【LESS Plugins】) is newly introduced within LESS, this tool enables users to define a customized plugin based on LESS, some existing plugins include LAI3D to compute 3D LAI distribution, generate CHM from the 3D scene, etc.

#### 2023-05-18 (version 2.1.1-2023-05-18):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link">LESS-2.1.1-2023-05-18-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y">LESS-2.1.1-2023-05-18-win64</a>)

* We are pleased to announce that we added a very useful tool to generate python code automatically from GUI. (Tools->Generate Python Code), this tool
automatically generate a python code according to the parameters you set with GUI. With this code (and the provided Python SDK), you can simply modify
it and run without GUI. You can easily to do the batch processing with this new features by loop some of parameters.
* The Python interpreter embeded within LESS has been upgraded to Python 3.10
* New alphashape algorithm has been implemented for the tool 【3D Forest From LiDAR (ALS)】, which has much more higher efficiency.
* The 3D display of object (in 3D object viewer) can choose to display selected groups only.


#### 2023-04-11 (version 2.0.4-2023-04-11):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link">LESS-2.0.4-2023-04-11-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y">LESS-2.0.4-2023-04-11-win64</a>)

* A new module to convert ALS point cloud into LESS simulations(【Tools】【3D Forest From LiDAR (ALS)】). This tool automatically filters the point cloud, segments tree crown, estimates leaf area density, etc. 
* The Python SDK supports runtime modification of solar and view angles, leaf and soil spectral properties, which enables to fast simulate reflectance when changing optical properties without modifying structural properties if required.


#### 2023-03-02 (version 2.0.1-2023-03-02):
**Windows**:<a href="https://drive.google.com/file/d/1w9i5JTi9OftZEjQbCK7p96ocrgR-upee/view?usp=share_link">LESS-2.0.1-2023-03-02-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1KaJgoRpIjcXgWEbyPySi5A?pwd=kltq">LESS-2.0.1-2023-03-02-win64</a>)

* When importing OBJ file, users can specify the desired object size, and LESS will automatically scale the obj.
* Some bugs related to ALS2LESS have been fixed. Now, it support las file without GPS time.


#### 2022-11-26 (version 2.0-2022-11-26):
**Windows**:<a href="https://drive.google.com/file/d/1wWYwmAukr73d4N3PZ6j55WZgpcOqzzLb/view?usp=share_link">LESS-2.0-2022-11-26-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1HwbYy3SQEseOJwLTLEQDFw?pwd=lxo1">LESS-2.0-2022-11-26-win64</a>)

* Some new features have been realized for the GUI
* The visulization of 3D scene has been greatly improved in its performance.
* The 3D viewer is able to pick object and show its name.
* The object in the 2D view is highlighted if a tree position is selected.
* More details about the new features, please refer to [New-features-in-GUI](http://lessrt.org/blog/2022/11/26/New-features-in-GUI/)

#### 2022-11-12 (version 2.0-2022-11-12):
**Windows**:<a href="https://drive.google.com/file/d/1cfjNY1_BlxtctihEgYZQwGAVdQJlGhG0/view?usp=sharing">LESS-2.0-2022-11-12-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1M34AfXVSI5PV6bh-19HuFQ?pwd=6pcp">LESS-2.0-2022-11-12-win64</a>)

* The simple crown generator(Tools->3D Object Creation-> Simple Crown Generator) has been improved to create both facet and turbid crowns. A new feature that considers the within-crown clumping of leaves is introduced.

<img src="https://user-images.githubusercontent.com/1770654/201458164-17599ee5-2da9-4c71-88a5-0af9d650a544.png" height="250"/>


#### 2022-10-04 (version 2.0-2022-10-04):
**Windows**:<a href="https://drive.google.com/file/d/1SEo0VsFaP-sHppvtQgdo6e5EMiUVZfdV/view?usp=sharing">LESS-2.0-2022-10-04-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1o5eJ5KjXNQcqnauO8eIyhg?pwd=3dpr">LESS-2.0-2022-10-04-win64</a>. 提取码/Code: 3dpr)

* A new mode that uses turbid medium to describe canopy structures is introduced, it supports image, BRF, FPAR simulaiton etc. In this new mode, tree crowns can be represented with alphashapes to describe the complex crown boundaries.
* The Simple Crown Generator tool supports creating crown boundaries.

<img src="http://lessrt.org/img/content/turbidsim3dview.png" height="250"/>
<img src="http://lessrt.org/img/content/turbidsim.png" height="250"/>

##### 2022-07-08 (`version 1.9.9-2022-07-08`):
**Windows**:<a href="https://drive.google.com/file/d/1Rg85Fh56lvT3S4jCsVNmDEdIjpfmJ2tA/view?usp=sharing">LESS-1.9.9-2022-07-08-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/18LzG7bGKCebZ7KR6fxDVNA">LESS-1.9.9-2022-07-08-win64</a>. 提取码/Code: nb27)

* A new module to convert airborne lidar data into 3D scenes for LESS simulations.
* A new image viewer and waveform viewer have been added.
* A new crown generator using asymmetric gaussian function to describe different crown shapes.

<img src="http://lessrt.org/img/content/combine.png" height="250"/>

##### 2022-06-03 (`version 1.9.9-2022-06-03`):
**Windows**:<a href="https://drive.google.com/file/d/16fbuDZ0zbrEQvsQX5n6vZIz8M41k-3P_/view?usp=sharing">LESS-1.9.9-2022-06-03-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1bZPNAjwVCH-xsgzVmy_EDQ">LESS-1.9.9-2022-06-03-win64</a>. 提取码/Code: 3fhg)

* Optimize the LiDAR simulator by given some predefined lidar sensor parameters.
* Add the scan angle to exported point cloud file.
* A new function to convert txt file to las format, which is more convenient for processing with other lidar tools (Process->"txt->las")

##### 2022-05-08 (`version 1.9.9-2022-05-08`):
**Windows**:<a href="https://drive.google.com/file/d/16fbuDZ0zbrEQvsQX5n6vZIz8M41k-3P_/view?usp=sharing">LESS-1.9.9-2022-05-08-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1bdHCCgOCNobvWtsMMelk9g">LESS-1.9.9-2022-05-08-win64</a>. 提取码/Code: vs7b)

* This version adds a GUI interface for 6S.
* Fixed some bugs when simulating four-components images

##### 2022-04-20 (`version 1.9.9-2022-04-20`):
**Windows**:<a href="https://drive.google.com/file/d/1bE4HMGeZjL3bWaTHDyobSoTotM0WQgvC/view?usp=sharing" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2022-04-20','Win64');">LESS-1.9.9-2022-04-20-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1ard0HG1Pm4nAiUWaG2yxsA">LESS-1.9.9-2022-04-20-win64</a>. 提取码/Code: ix9r)

* A new model named LESS1D is released, this model provides an GUI to input 1D-like paramters (e.g., lai, lad), but simulations are performed in 3D mode. In short, It is as easy as 1D models, but as accurate as 3D models.

![less1dss.png]({{site.baseurl}}/img/content/less1dss.png)

* the module to calcualte LAI has been improved to compute a sub-region LAI.
* A few bugs reported by users have been fixed.

##### 2022-03-10 (`version 1.9.9-2022-03-10`):
**Windows**:<a href="https://drive.google.com/file/d/1ikLWZmaU84CiOSF9XyObs8dcjF3zhD6p/view?usp=sharing" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2022-03-10','Win64');">LESS-1.9.9-2022-03-10-26-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1D0qcWK5AlM9LwpDPwxrdHw">LESS-1.9.9-2022-03-10-win64</a>. 提取码/Code: 6hwh)

* This release adds a new functionality to simulate orthophoto map(choose orthographic sensor, and a new option "Orthophoto Map" will be shown in the Observation section).
* Py6S has been added to the embeded python intepreter, you can also use it through the pytho console at the bottom of the LESS GUI.
* A new fisheye simulation mode has been added to simulate direct transmittance, i.e., each pixel in the image store the transmitance values (0-1).
* Some new functionalities have been optimazied related to GUI, e.g., you can locate the object name in the object list by drawing a polygon in the 2D view and cliking Locate.

##### 2021-12-26 (`version 1.9.9-2021-12-26`):
**Windows**:<a href="https://drive.google.com/file/d/189N5-oCRUmRLWhFmQWCauBsK45XgUchM/view?usp=sharing" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2021-11-25','Win64');">LESS-1.9.9-2021-12-26-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/19lhkMRp2fKSWYDpgIauxdw" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2021-11-25','Win64');">LESS-1.9.9-2021-12-26-win64</a>. 提取码/Code: md4r)

* This release fixs several small bugs related to LiDAR simulations.

##### 2021-11-25 (`version 1.9.9-2021-11-25`):
**Windows**:<a href="https://drive.google.com/file/d/18sgtm6jA1h7AEFnZxuGo1E5zcT3nICsw/view?usp=sharing" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2021-11-25','Win64');">LESS-1.9.9-2021-11-25-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1MTv2BCGgDNlWzlBUhq_SFA" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2021-11-25','Win64');">LESS-1.9.9-2021-11-25-win64</a>. 提取码/Code: ka4y)

* This release mainly optimize the LiDAR simulation module, especially the intensity simulation.


##### 2021-11-04 (`version 1.9.9-2021-11-04`):
**Windows**:<a href="https://drive.google.com/file/d/1haKP1wJxvjWoTprFN5_aQb8BL9e31gpS/view?usp=sharing" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2021-11-04','Win64');">LESS-1.9.9-2021-11-04-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1goWIvzZ3AuuYnZ5KLaL-YA" onClick="ga('send', 'event', 'LESSDownload','V1.9.9-2021-11-04','Win64');">LESS-1.9.9-2021-11-04-win64</a>. 提取码/Code: kpi9)

* This release contains the feature to simulate multispectral/hyperspectral Lidar waveforms and pointcloud.
* The GUI of LiDAR module has been optimzied to visually illustrate the parameters.

##### 2021-7-19 (`version 1.9.9.3`):
**Windows**:<a href="https://drive.google.com/file/d/1Z98bgQAj-_52hwlO7Vze7U9nDTwrTSXv/view?usp=sharing" onClick="ga('send', 'event', 'LESSDownload','V1.9.9.3','Win64');">LESS-1.9.9.3-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1jiapCQb1_dtHa2-tS09vvg" onClick="ga('send', 'event', 'LESSDownload','V1.9.0','Win64');">LESS-1.9.9.3-win64</a>. 提取码/Code: m3m7)

* This release mainly optimizes the Lidar module.
* It is a preparation for the next version 2.0.

##### 2021-2-24 (`version 1.9.9`):
**Windows**: <a href="https://pan.baidu.com/s/1mWF7x5pinoRM6yzwVbGLAw" onClick="ga('send', 'event', 'LESSDownload','V1.9.0','Win64');">LESS-1.9.9-win64</a>.(提取码/Code: 1b9w)

* This release is mainly for fixing some bugs reported by users.

##### 2020-7-4 (`version 1.9.0`):
**Windows**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.9.0/LESS-1.9.0-win64.exe" onClick="ga('send', 'event', 'LESSDownload','V1.9.0','Win64');">LESS-1.9.0-win64</a>. (网盘下载：<a target="_blank" href="https://jimbohome.synology.me:5001/d/f/562776447041709851" onClick="ga('send', 'event', 'LESSDownload','V1.9.0','Win64');">LESS-1.9.0-win64</a>)

**Linux**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.9.0/LESS-1.9.0-Ubuntu16.04.zip" onClick="ga('send', 'event', 'LESSDownload','V1.9.0','Ubuntu16.04');">LESS-1.9.0-Ubuntu16.04</a>. 

* An updated GUI based Batch Tool to support more parameters.
* a complete new Python SDK, which enables users to control almost every parameters (including scene objects) for batch processing.
* A new simple tree crown tool to create tree crowns by inputing paramters, such as leaf angle distribution.
* Some bugs reported by users have been fixed (many thanks for their support).
* A new LiDAR simulator tool (Extensions->Lidar Simulator) has been released (Contribution from Mr. Yaotao Luo).

##### 2019-4-10 (`version 1.8.8`):
**Windows**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.8.8/LESS-1.8.8-win64.exe" onClick="ga('send', 'event', 'LESSDownload','V1.8.8','Win64');">LESS-1.8.8-win64</a>. (百度网盘下载：<a target="_blank" href="https://pan.baidu.com/s/15i7BpX9p1WfsPMGxzxwLBg" onClick="ga('send', 'event', 'LESSDownload','V1.8.8','Win64');">LESS-1.8.8-win64</a>)

**Linux**: <a href="https://github.com/jianboqi/lessrt/releases/download/LESS-1.8.8/LESS-1.8.8-Ubuntu16.04.zip" onClick="ga('send', 'event', 'LESSDownload','V1.8.8','Ubuntu16.04');">LESS-1.8.8-Ubuntu16.04</a>. 

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
