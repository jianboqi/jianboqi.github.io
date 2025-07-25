---
title: Download LESS
layout: page
permalink: /download-less/
sectionid: page_dowload
published: true
---


#### New release:

If you have problems under Windows,please refer to [problems under windows](http://lessrt.org/docs/installation/)
`[注：请避免安装在中文路径以及有空格的路径中][Please avoid installing in a path with spaces]`
<br>
<br>

##### When using LESS in your work, please cite:
```bibtex
Qi, J., Xie, D., Yin, T., Yan, G., Gastellu-Etchegorry, J.-P., Li, L., Zhang, W., Mu, X., Norford, L.K., 2019b. LESS: LargE-Scale remote sensing data and image simulation framework over heterogeneous 3D scenes. Remote Sensing of Environment 221, 695–706. https://doi.org/10.1016/j.rse.2018.11.036
```
##### If you want to get news of LESS, please subscribe by email: [Subscribe](https://forms.office.com/r/ML6Rs1ghAQ)

### LESS-2.1.8 (2025.07.25):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.8-2025-07-25-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.8-2025-07-25-win64</a>)
* In the new version, A new LESS PyCodeEditor has been added, this editor can be used to edit Python code for doing simulations. It also provides an 'less' object, allowing users to use this object to manipulate the parameters of the GUI, which means users can modify the parameters of the GUI using python code. This features benefits the batch processing.
* A new plugin named ReconstructTreeFromPointCloud has been added, this new plugin allows users to reconstruct tree object from single tree point cloud (from ALS, UVA lidar, and TLS lidar)
* A new plugin to generate 3D scenes from urban buiding shapefile.
* 新版本中，增加了一个Python代码编辑器LESS PyCodeEditor,在编辑器中可以直接编辑和运行python代码，以更方便地使用LESS的功能。同时，该编辑器提供了一个默认的less对象，基于该对象可以实现对GUI图形界面的参数的控制，以方便利用代码进行批处理和模拟。
* 增加了一个新的单木重建插件，利用该插件，可以实现对单木点云重建单木三维结构，输出OBJ文件。
* 增加了一个从shapefile文件生成建筑物三维场景的插件。
<div><img width="600" height="380" alt="codeeditor" src="https://github.com/user-attachments/assets/181064b0-fe06-48f7-9f26-fc06f075f78a" /></div>

### LESS-2.1.8 (2025.04.12):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.8-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.8-win64</a>)
* In the new version, the ALS2LESS tool has been upgraded. It now supports individual trees that have been pre-segmented. In the las file, different individual trees are distinguished by the treeID field.
* The LiDAR simulation module has significantly improved the efficiency of generating pulses and added a batch processing method for TLS simulation.
* A mobile LiDAR simulation plugin has been added, which can generate the trajectory of mobile LiDAR.
* A forestry inventory plugin has been added, which can automatically extract tree height, diameter at breast height, and other information from forest scenes.
* A plugin named ReconstructTreeFromPointCloud has been added for reconstructing tree structures from terrestrial/SLAM LiDAR. It can take the segmented point cloud of individual trees as input, automatically extract the trunk to generate an obj file, and create a canopy envelope.
* The AutoGUI function with a graphical interface has been added. This allows users to control interface parameters by entering Python scripts in the interface. It enables script-based modification of some parameters, facilitating batch processing.
The model has been coupled with the Farquar model and others, adding a photosynthesis module that can simulate three-dimensional light distribution and photosynthesis.
* 新版本中，对于ALS2LESS工具进行了升级，目前支持预先分割好的单木，在las文件中，通过treeID字段来区分不同的单木。
* 激光雷达模拟模块，大幅提高了生成pulse的效率，以及增加了TLS模拟时，激光雷达批处理方式。
* 添加了一个移动激光雷达模拟插件，可以生成移动激光雷达的路径
* 添加了一个forestryinventory插件，可以对森林场景自动提取树高，胸径等信息。
* 添加了从地基/SLAM激光雷达重建树木结构的插件ReconstructTreeFromPointCloud，可以输入单木分割好之后的点云，自动提取树干生成obj文件，并生成树冠外包络。
* 增加了图形界面的AutoGUI功能，即通过在界面输入Python 脚本的方式来控制界面的参数，可以对一些参数进行脚本化修改，方便批处理。
* 耦合Farquar等模型，增加了光合作用模块，可以实现三维光分布、光合作用的模拟。
  


### LESS-2.1.7 (2024.10.13):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.7-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.7-win64</a>)
* A new Plugin named `GenerateSlantedMesh` has been added, which genrate simple terrain with slopes.
* We have modified the strategy to processing meshes to avoid a double copy of OBJ files, which saves a lot of disk when simulation project have a large number of OBJ files.
* Some bugs have been fixed.
* 新版本中我们增加了一个`GenerateSlantedMesh`插件，该插件可以产生不同朝向和坡度下的单坡面地形。
* 我们该改变了处理OBJ文件的策略，避免了模拟过程中重复复制OBJ文件到运行目录，减少了储存空间的使用，提高了加载效率。

### LESS-2.1.6 (2024.9.19):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.6-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.6-win64</a>)
* From version 2.1.6 (2024.9.19), we have changed a bit the version scheme. The version of LESS is named by VERSION NUMBER (e.g., LESS-2.1.6) + DATE (e.g., 2024-07-09). Before now, if you want to update LESS, you must redownload the whole LESS installers and reinstall it. Up to now, from version 2.1.6, we have added a functions to update LESS through patch, which means that for some small bug fix, you need not to download the LESS, you can use the [Help][Update] to get a patch to update LESS. We release new LESS on this website when VERSION NUMBER is changed, i.e., you only need to download LESS when VERSION NUMBER is changed. For the DATE, you can get updated through the  [Help][Update].
* This version also added a bug report tool to help to report bugs to us. It can be accessed by [Help][Contact] when you meet problems. This tool can help you to upload necessary files and log infomation to us.
* 从2.1.6版本起，我们增加了一个在线更新LESS的功能。LESS每个版本的命名仍然是`版本号（例如LESS-2.1.6）`+`日期（例如2024-07-09）`，以后该网站仅提供大版本更新，即当我们修改版本号时，你仍然需要从该网站下载LESS进行重新安装更新，但是一些小的修复或者更新将通过patch的形式，即在【Help】【Update】菜单处进行更新，通过这种方式更新会修改LESS版本的日期。
* 在新的版本中，我们还增加了一个bug提交功能，通过[Help][Contact]菜单，你可以提交当前模拟工程的文件和日志，当你提交之后，我们将收到你的反馈，并通过邮件联系你。


### 2024-07-19 (version 2.1.5-2024-07-19):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.5-2024-07-19-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.5-2024-07-19-win64</a>)
* This is a regular update version which has fixed several bugs. E.g., reading OBJ files with textures, inputting albedo maps.


### 2024-04-26 (version 2.1.5-2024-04-26):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.5-2024-04-26-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.5-2024-04-26-win64</a>)

* The primary updates for this version are to increase the usability of the model, i.e., making it more easy-to-use.
* We added a lot of tooltips on the GUI, when you move your mouse on this icon "i" , you will imediately get a text to describe the functionality, which will be more intuitive.
* We moved the defintion of non-Lambertian BRDF model, RPV, ART and Soilspect, to the Optical Database section. Now any object (rather than only terrain before) can be assigned an non-lambertian BRDF model.
* A new Sensor TRAC to simulate the LAI measurement instrument has been added to the GUI, in the sensor section.
* 这个版本我们在模型易用性方面做了许多优化，尤其是在GUI界面上添加了许多帮助提示，当鼠标移动到相应的按钮或者文字上上，会弹出该功能的一个说明，可以更好地理解该功能的用法。
* 这个版本另一个比较大的改进在于将以前只能用于地形上的非朗伯反射模型，比如RPV、积雪ART、土壤Soilspect模型等，移动到了Optical Database处进行统一定义，好处在于其他导入的地物也可以设置非朗伯反射模型。
* 在GUI增加了一个新的传感器类型，trac，可以用于模拟TRAC LAI测量仪器。

### 2024-03-19 (version 2.1.5-2024-03-19):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link" target="_blank">LESS-2.1.5-2024-03-19-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y" target="_blank">LESS-2.1.5-2024-03-19-win64</a>)

* Support SIF simulation under turbid medium canopy representation, including both SIF image and canopy totoal SIF.
* Multi-level SIF simulation.
* Now FPAR simulation only output the total value by default to avoid large output files.
* Improvement of a plugin multiangle plot

### 2023-11-29 (version 2.1.5-2023-11-29):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link">LESS-2.1.5-2023-11-29-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y">LESS-2.1.5-2023-11-29-win64</a>)

* a new plugin has been added to compute directional gap fractions.
* ImageViewer handles no data value
* Support to import a temperature file to simualate temperature distribution
* Simulating Solar Induced Fluorescence with abitary wavelength
* A few bugs have been fixed.

### 2023-08-19 (version 2.1.4-2023-08-19):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link">LESS-2.1.4-2023-08-19-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y">LESS-2.1.4-2023-08-19-win64</a>)

* This version introduce a major improvement for LESS---Solar Induced Fluorescence (SIF), this supports multiangle sif simulation with Photontracing,
  and sif images by Orthographic, perspective and Fisheye sensors.
* A new plugin to simulate directional brightness temperature for thermal radiation is implemented. It can simulate multiple directional BT simultaneously by batch-processing images automatically
* A few bugs have been fixed.
![20230819113919](https://github.com/jianboqi/jianboqi.github.io/assets/1770654/f1ad33a2-b6e7-46d0-b335-0dd75ccee8f9)
![微信截图_20230820095653(1)](https://github.com/jianboqi/jianboqi.github.io/assets/1770654/5d733d0e-b000-4ee4-9db2-e469cef75bd8)

#### 2023-07-16 (version 2.1.4-2023-07-16):
**Windows**:<a href="https://drive.google.com/drive/folders/1JeV4XfI8cIztB3kx27AP-1rlX8IvYkHO?usp=share_link">LESS-2.1.4-2023-07-16-win64</a>. (百度网盘下载：<a href="https://pan.baidu.com/s/1WoFUrZ2bMRkDDuTWVqq8Fg?pwd=a75y">LESS-2.1.4-2023-07-16-win64</a>)

* The definition of instance of each object now support rotation and scaling, which means that for a import object, you can defined it to different locations with different rotations and scaling. This is made available by clicking the 【Extra Info】buttion in the Objects section of LESS GUI.
* For the LiDAR Module, Now, we can input a pulse information text file to define the origin and direction of each individual pulses, which enables to simualte more complex scanning patterns, such as mobile lidar.
* Photon counting LiDAR is implemented with solar noise considered.
* Incident PAR for each horizontal layer is outputed for the FPAR module.
* A very useful tool which is named **LESS Plugins** (【Tools】【LESS Plugins】) is newly introduced within LESS, this tool enables users to define a customized plugin based on LESS, some existing plugins include LAI3D to compute 3D LAI distribution, generate CHM from the 3D scene, etc. More details: [LESS Plugins description](http://lessrt.org/blog/2023/07/16/New-LESS-Plugins/)

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
