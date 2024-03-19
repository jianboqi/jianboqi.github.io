---
title: FAQ
permalink: /docs/FAQ/
---

<br/>
**This section  gives answers for questions that are frequently asked by users during the use of LESS. If you meet problems, you can first refer to this section to check if other users have the same problem**

<style>
  // Adding 'Contents' headline to the TOC
#markdown-toc::before {
    content: "Contents";
    font-weight: bold;
}

// Using numbers instead of bullets for listing
#markdown-toc ul {
    list-style: none;
}
  
#markdown-toc {
    border: 1px solid #aaa;
    padding: 1.5em;
    list-style: none;
    display: inline-block;
}
#markdown-toc li ul{
    list-style: none;
}
</style>

 * Do not remove this line (it will not be displayed)
{:toc}

<br/>

##### 1. When you replace an OBJ file with different structures, why simulation gives the same results?
This is mainly because of the cache mechanism. In LESS, an OBJ file will be first converted to a binary file, which will then be loaded for simulation. This aim of this mechanism is to reduce the loadding time when you do the next simulation within the same scene. Thus, if you change the OBJ file for a previous simulation, but keep the OBJ name unchanged. The next simulation will load the previously cached binary file. Then the simulation results will be the same. An solution is to disable this caching feature by uncheck the 【Cache OBJ file】 in the 【Objects】panel in the LESS GUI.

##### 2. 使用Simple Crown Creator创建具有聚集效应的树冠场景时，生成的OBJ文件只有树干而没有树冠轮廓？
这个可能的原因是计算机的用户名是中文，因为该工具会默认使用用户名下的临时文件路径创建临时文件，所以最好采用英文路径。很多时候类似的问题，也是因为中文路径造成的，因此，建议将LESS安装在非中文路径中更好。

