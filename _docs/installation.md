---
title: Installation
permalink: /docs/installation/
---

<br>

## Use LESS under linux

### GUI Version

Currently, the GUI version of LESS is only provided for Windows and Ubuntu 16.04.

It can be download here:  <a href="https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/LESS-1.8.6-ubuntu16.04-GUI.zip" onClick="ga('send', 'event', { eventCategory: 'LESSDownloadv1.8', eventAction: 'directdownload', eventLabel: 'LESSLin64bitv1.8.6'});">LESS-1.8.6-Ubuntu16.04-GUI</a>.

After downloading the package, unzip the file, start the program by `./less.sh`

If a Ubuntu server (e.g., has many cores) does not have a graphic interface, the GUI version of LESS is still usable. You can access the server from a remote client computer (with Ubuntu system) through `ssh -Y username@serverIP`, and then start LESS by `./less.sh`. The LESS GUI will display on your client computer, but the actual computation will take place on the server side.


### Command line Mode

For other Linux distributions, the GUI is not provided because of some difficulties to package all of them in a single installer.
However, the radiative transfer core is compiled and provided for CentOS 6.8. The workflow is:
**Generate scene file (windows or ubuntu)**->**upload scene file to linux**->**run with command line**. This is particularly useful when we want to do simulation with a powerful linux server (e.g., high performance computer or clusters).

After scene generation, under "Parameters" folder, there is a folder named "_scenefile", you can copy all the contents of the folder into the CentOS system.
and run with **`lessrt _scenefile/main.xml`**. If you are doing a batch simulation, you can also do all the simulations with **`lessrt _scenefile/nameofbatch*.xml`**

##### The command line version of LESS for CentOS can be downloaded from:
CentOS 6.8: [LESS-1.8.6-CentOS6.8-cmd.zip](https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/LESS-1.8.6-CentOS6.8-cmd.zip)

##### Using command line for Ubuntu system:
If your ubuntu system does not have a graphic user interface or you can only work in command line mode (e.g., servers), the command line is also accessable for Ubuntu. You can download it here,

Ubuntu 16.04: [LESS-1.8.6-Ubuntu16.04-cmd.zip](https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/LESS-1.8.6-Ubuntu16.04-cmd.zip).

Now, the workflow is: **Generate scene file (windows)**->**upload scene file to linux**->**run with command line**.

## Problems under Windows

* If you can not start LESS or can not launch simulations, please try to install VC runtime [VC_redist_2017.x64](https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/VC_redist_2017.x64.exe) and [vcredist_x64_2010.exe](https://github.com/jianboqi/lessrt/releases/download/LESS1.8.6/vcredist_x64_2010.exe)
* 不要安装在中文路径下
