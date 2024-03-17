---
title: Applications
layout: page
permalink: /applications/
sectionid: page_applications
published: true
---
<br/>

#### Understanding the theory of LESS
<hr>

The aim of LESS is to simulate the radiation interactions within intricate landscapes, such as forests and urban structures. The following two figures succinctly outline the primary functionalities of LESS. By inputting landscape structural data, component spectra, illumination/observation geometries, and other necessary information, LESS utilizes ray tracing techniques to solve the 3D radiative transfer problem. It then generates remotely sensed signals, encompassing canopy reflectance, LiDAR data, multispectral images, Solar-Induced Fluorescence (SIF), as well as various process parameters like Fraction of Photosynthetically Active Radiation (FPAR) and photosynthesis rates.

This process is often referred to as "forward simulation or modeling". Unlike other 1D models, LESS does not rely on assumptions that abstract the canopy as homogeneous layers. Instead, it employs explicitly described structures to represent landscape elements, even down to the detailed structures of individual leaves or shoots. Consequently, LESS is renowned for its precision. Since the ray tracing technique utilized by LESS simulates light scattering at each ray-object intersection point based on fundamental physical laws (e.g., Lambertian reflection), simulations conducted by models like LESS are sometimes termed "first principle" simulations.

In summary, LESS yields considerably accurate results for light scattering within complex landscapes, facilitating various applications such as forest parameter retrieval, comprehension of remote sensing mechanisms, and sensor instrument design.
 * Light scattering within a forest canopy:
<img src="http://lessrt.org/img/content/scattering.jpg" width="500"/>
<br/>

 * The diagram of LESS's functionality:
<img src="http://lessrt.org/img/content/lessequation.jpg" width="600"/>


#### Why LESS is useful ?
<hr>
LESS facilitates the aforementioned applications by providing remote sensing observations alongside corresponding "ground truth" measurements. For instance, consider the retrieval of vegetation parameters from canopy reflectance, a fundamental goal in forest remote sensing. To establish a retrieval model, it is imperative to understand the relationship between reflectance and vegetation parameters. While field measurements can offer such insights, they are often laborious and site-specific. Alternatively, employing 3D simulations with LESS serves as an economical alternative. By utilizing the simulated reflectance alongside the ground truth parameters provided by LESS (refer to the figure below), we can establish a regression model or machine learning algorithm. Subsequently, real remote sensing reflectance can be inputted into this model to estimate vegetation parameters. Finally, field measurements can be utilized to validate the accuracy of the model.

 * LESS provides remote sensing observations and the corresponding "ground truth" measurements:
<img src="http://lessrt.org/img/content/lessapp.jpg" width="600"/>

<br/>

#### Selected applications
<hr>

#### Selected image demos
<hr>

##### 1. Hotspot effect captured by a perspective camera (flight height around 500 m).
<img src="/img/content/hotspot.gif" width="500" height="500" />

##### 2. Downwelling solar radiation changing with time over rugged terrain (12 km × 12 km)
<img src="/img/content/downwelling_radiation.gif" width="500" height="375" />

##### 3. PAR distribution absobed by understory and ground at different time

<img src="https://user-images.githubusercontent.com/1770654/202586563-8a33a024-3147-43a8-8c1b-1e2ef34a6866.gif" width="500"/>
