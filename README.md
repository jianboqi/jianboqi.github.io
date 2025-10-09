# LESS 三维辐射传输模型官网

## 本地开发与预览

要在本地预览网站，需要安装 Ruby 和 Jekyll。请按照以下步骤操作：

### 安装 Ruby 和 Jekyll

1. 从 [RubyInstaller.org](https://rubyinstaller.org/downloads/) 下载并安装 Ruby+
Devkit 版本（建议使用 2.7.x 版本，与 GitHub Pages 兼容）

2. 安装过程中确保勾选 "Add Ruby executables to your PATH"

3. 安装完成后，打开命令提示符，切换到 RubyGems 的国内镜像源以提高下载速度：
   ```bash
   gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
   ```

4. 安装 Jekyll 和相关依赖：
   ```bash
   gem install jekyll bundler github-pages
   ```

### 运行本地服务器

1. 克隆此仓库并进入项目目录：
   ```bash
   git clone https://github.com/jianboqi/jianboqi.github.io.git
   cd jianboqi.github.io
   ```

2. 安装项目依赖：
   ```bash
   bundle install
   ```

3. 启动本地服务器：
   ```bash
   bundle exec jekyll serve
   ```

4. 打开浏览器，访问 `http://localhost:4000` 查看网站预览

## 部署到 GitHub Pages

1. 确保你已经完成了上述本地开发环境的设置

2. 对网站进行修改和测试后，将更改提交到 GitHub 仓库：
   ```bash
   git add .
   git commit -m "更新说明"
   git push origin master
   ```

3. GitHub Pages 会自动构建并部署你的网站，通常在几分钟内完成

4. 部署完成后，访问 `http://lessrt.org` 查看在线网站

## 配置说明

### 关键配置文件

- `_config.yml`: 网站的主要配置文件，包含标题、描述、URL、插件等设置
- `Gemfile`: 项目依赖配置文件，指定了使用的 Ruby gems
- `css/main.scss`: 主样式文件，导入了自定义的现代化主题
- `css/modern-theme.scss`: 自定义的现代化主题样式
- `js/main.js`: 网站的交互脚本，包含动画效果和交互功能

### 特别注意事项

1. 本网站使用了自定义的现代化主题样式，通过禁用 GitHub Pages 的默认主题来确保自定义样式能够正确加载

2. 为了与 GitHub Pages 的构建环境保持兼容，我们使用了 `github-pages` gem，它包含了所有 GitHub Pages 支持的插件和依赖

3. 网站内容使用 Markdown 格式编写，存放在 `_posts`、`_docs`、`_about` 和 `_resources` 目录中

## 故障排除

如果在本地预览或部署过程中遇到问题，可以尝试以下解决方案：

1. **依赖安装失败**：确保使用了正确的 Ruby 版本，并切换到了国内的镜像源

2. **构建错误**：检查 Markdown 文件格式是否正确，配置文件是否有语法错误

3. **样式不生效**：确认 `_config.yml` 中已正确禁用了默认主题

4. **GitHub Pages 部署失败**：查看 GitHub Actions 的构建日志，了解具体错误信息

## 联系方式

如有任何问题或建议，请联系：jianboqi@gmail.com