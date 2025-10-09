$(function() {
    // 导航栏滚动效果
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (scroll > 100) {
            $('.navbar-default').addClass('navbar-scroll');
            $('.navbar-default').css({
                'background-color': 'rgba(44, 62, 80, 0.95)',
                'box-shadow': '0 4px 15px rgba(0, 0, 0, 0.15)',
                'padding': '5px 0'
            });
        } else {
            $('.navbar-default').removeClass('navbar-scroll');
            $('.navbar-default').css({
                'background-color': '#2c3e50',
                'box-shadow': '0 2px 15px rgba(0, 0, 0, 0.1)',
                'padding': '10px 0'
            });
        }
    });

    // 搜索功能
    var pages = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead({
        minLength: 0,
        highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
    });

    $('#search-box').bind('typeahead:select', function(ev, suggestion) {
        window.location.href = suggestion.url;
    });

    // Markdown 内容样式转换
    $('#markdown-content-container table').addClass('table table-striped table-hover');
    $('#markdown-content-container img').addClass('img-responsive rounded shadow');
    $('#markdown-content-container pre').addClass('bg-light p-4 rounded shadow-sm');
    $('#markdown-content-container code').addClass('text-secondary');
    
    // 平滑滚动
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // 滚动时的淡入动画
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('is-visible');
            }
        });
    };
    
    // 初始检查
    fadeInOnScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', fadeInOnScroll);

    // 为重要内容添加动画类
    setTimeout(function() {
        $('.header-container').addClass('fade-in-up');
    }, 100);
    
    setTimeout(function() {
        $('.col-md-6, .col-sm-4').addClass('fade-in-section');
        fadeInOnScroll(); // 触发一次检查
    }, 300);

    // 图片悬停效果
    $('img').hover(function() {
        $(this).css('transform', 'scale(1.02)');
        $(this).css('transition', 'transform 0.3s ease');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    // 下拉菜单增强
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
    });

    // 移动菜单增强
    $('.navbar-toggle').on('click', function() {
        $('.navbar-nav').slideToggle();
    });

    // 响应式调整
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.navbar-nav').show();
        }
    });

    // 激活当前菜单项
    var currentPath = window.location.pathname;
    $('.navbar-nav a').each(function() {
        var href = $(this).attr('href');
        if (currentPath.includes(href) && href !== '/') {
            $(this).parent().addClass('active');
        }
    });

    // 通知条控制
    if ($('.marquee-wrap').length > 0) {
        $('.marquee-wrap').show();
    }

    // 回到顶部按钮
    if ($('#back-to-top').length === 0) {
        $('body').append('<button id="back-to-top" class="btn btn-primary btn-floating" style="position: fixed; bottom: 20px; right: 20px; z-index: 999; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); opacity: 0; transition: opacity 0.3s ease;"><i class="fa fa-arrow-up"></i></button>');
        
        $('#back-to-top').on('click', function() {
            $('html, body').animate({scrollTop: 0}, 800);
        });
        
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').css('opacity', '1');
            } else {
                $('#back-to-top').css('opacity', '0');
            }
        });
    }
});
