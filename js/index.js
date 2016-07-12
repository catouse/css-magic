var contents = [{
    name: 'simple',
    title: '简单',
    items: [
        {name: 'links', title: '链接', classes: ':link,:hover,:visited,:active,:focus'},
        {name: 'root', title: ':root', classes: ':root'},
        {name: 'drop-cap', title: '首字下沉', classes: ':first-letter'},
        {name: 'bold-first-line', title: '首行加粗', classes: ':first-line'},
        {name: 'focus-input', title: '表单输入框聚焦', classes: ':focus'},
        {name: 'image-scale', title: '图像缩放效果', classes: ':hover'},
        {name: 'image-flip', title: '背景翻转效果', classes: ':hover'},
        {name: 'fix-border', title: '修正边框', classes: ':last-child'},
        {name: 'table-striped', title: '表格隔行变色', classes: ':nth-child'},
        {name: 'selection-style', title: '选中文本外观', classes: '::selection'},
        {name: 'disabled-style', title: '禁用文本外观', classes: ':disabled'}
]}, {
    name: 'advance',
    title: '高级',
    items: [
        {name: 'hide-empty-content', title: '隐藏空内容', classes: ':empty'},
        {name: 'show-empty-links', title: '处理空链接', classes: ':empty', star: false},
        {name: 'select-inputs', title: '选中表单控件（不包括按钮）', classes: ':not'},
        {name: 'toggle-button', title: '按钮切换', classes: ':hover'},
        {name: 'dropdown-menu', title: '下拉菜单', classes: ':hover'},
        {name: 'triangle', title: '三角形', classes: ':before/:after'},
        {name: 'dropdown-icon', title: '下拉菜单三角形图标', classes: ':before/:after'},
        {name: 'chat-arrow', title: '会话箭头', classes: ':before/:after'},
        {name: 'chat-arrow-with-border', title: '带边框的会话三角形', classes: ':before,:after'},
        {name: 'corner-label', title: '角标', classes: ':before/:after'},
        {name: 'arrow-shape', title: '箭头形状', classes: ':before,:after'},
        {name: 'corner-tape', title: '切角遮挡', classes: ':before,:after', star: false},
        {name: 'clearfix', title: '清除浮动', classes: ':before,:after'},
        {name: 'css-tooltip', title: '纯 CSS 实现工具提示', classes: ':before/:after'},
        {name: 'font-icons', title: '字体图标', classes: ':before/:after'},
        {name: 'sprite-icons', title: 'Sprite 图标', classes: ':before/:after'},
        {name: 'button-skin', title: '按钮交互外观', classes: ':before/:after'},
        {name: 'css-shapes', title: '不规则形状', classes: ':before/:after'},
        {name: 'expand-hit-area', title: '增加点击区域', classes: ':before/:after'},
        {name: 'css-logo', title: '绘制 Logo', classes: ':before,:after', star: false},
        {name: 'css-icons', title: '绘制图标', classes: ':before,:after', star: false},
        {name: 'css-images', title: '绘制图形', classes: ':before,:after', star: false},
        {name: 'css-loading-spinners', title: 'CSS loading 动画', classes: ':before,:after'},
        {name: 'circle-progress-bar', title: '环形进度条', classes: ':before,:after', star: false},
        {name: 'breadcumb', title: '面包屑导航', classes: ':before/:after'},
        {name: 'comma-list', title: '行内逗号分割列表', classes: ':before/:after', star: false},
        {name: 'corner-badge', title: '右上角徽标', classes: ':before/:after'},
        {name: 'highlight-content', title: '聚焦内容', classes: ':before/:after', star: false},
        {name: 'css-backdrop', title: '遮罩效果', classes: ':before/:after', star: false},
        {name: 'irregular-shadow', title: '不规则阴影', classes: ':before,:after', star: false},
        {name: 'top-shadow', title: '顶层内阴影', classes: ':before/:after'},
        {name: 'auto-dock-bar', title: '自动隐藏 dock 栏', classes: ':hover'},
        {name: 'toc-highlight', title: 'TOC 内容聚焦', classes: ':target'}
]}, {
    name: 'professor',
    title: '专家',
    items: [{name: 'responsive-square', title: '自适应正方形', classes: ':before/:after'},
        {name: 'responsive-media', title: '等比例自适应媒体内容', classes: ':before/:after'},
        {name: 'flip-card', title: '翻转卡片', classes: ':hover'},
        {name: 'md-input', title: '占位标签输入框', classes: ':focus'},
        {name: 'file-input-control', title: '文件上传控件外观', classes: ':before,:after', star: false},
        {name: 'ratio-and-checkbox', title: '单选框和复选框外观', classes: ':checked'},
        {name: 'switch', title: '开关', classes: ':checked'},
        {name: 'checkbox-and-ratio-skin', title: '重置单选和复选外观', classes: ':checked,:before,:after'},
        {name: 'css-tabs', title: '纯 CSS 实现标签页', classes: ':hover,:active,:checked,:nth-of-type', star: false},
        {name: 'css-collapse-panel', title: '纯 CSS 实现折叠面板', classes: ':checked', star: false},
        {name: 'css-carousel', title: '纯 CSS 实现折叠面板', classes: ':checked', star: false},
        {name: 'css-modal', title: '纯 CSS 实现对话框', classes: ':checked', star: false},
        {name: 'css-treeview', title: '纯 CSS 实现树形菜单', classes: ':checked', star: false
    }]
}];

$(function() {
    $('#lead').css('height', $(window).height());

    var $contentList = $('#contentList');

    var updateContents = function() {
        $contentList.empty();
        var index = 5;
        $.each(contents, function(sectionIndex, section) {
            var $cell = $('<div class="cell-4"><div class="tile"></div></div>');
            var $tile = $cell.children('.tile');
            $tile.append('<div class="heading"><div class="title">' + section.title + '</div></div>');
            var $list = $('<div class="list section"/>', {id: 'section-' + section.name}).data('section', section);
            $.each(section.items, function(itemIndex, item) {
                var $a = $('<a>', {
                    href: 'part/' + item.name + '.html',
                    'class': 'item with-avatar multi-lines'
                }).data({item: item});
                var avatarText = index < 6 ? '1~5' : index;
                $a.append($('<div/>', {'class': 'avatar rounded', 'data-skin': index}).text(avatarText));
                var $content = $('<div class="content"/>');
                $content.append('<div class="title strong">' + item.title + '</div>');
                var $subContent = $('<small class="magic-classes"/>');
                var subContent = $.map(item.classes.split(','), function(clz) {
                    return '<span class="code">' + clz + '</span>';
                });
                $subContent.html(subContent.join(' '));
                $content.append($subContent);
                $a.append($content);
                if(item.star !== false) {
                    $a.append('<i class="icon icon-star text-yellow"/>');
                }
                $list.append($a);
                index++;
            });
            $tile.append($list);
            $contentList.append($cell);
        });
    };

    updateContents();

    $('#contentList .item > .avatar').each(function(idx) {
        $(this).skin({skin: idx, dark: true, hueSpace: 7});
    });

    var scrolling = false;
    var scrollToContent = function() {
        scrolling = true;
        $.scrollTo({
            endY: $(window).height(),
            duration: 500,
            callback: function() {
                scrolling = false;
            }
        });
    };
    
    $('#scrollBtn').on($.TapName, scrollToContent);

    var srollCallback;
    $(window).on('listenScroll', function(e, isInScroll, scrollDirection, scrollTop) {
        if(isInScroll && scrollDirection === 'down' && scrollTop < $(window).height() && !scrolling) {
            clearTimeout(srollCallback);
            srollCallback = setTimeout(scrollToContent, 100);
         } /* else if(isInScroll && scrollDirection === 'up' && scrollTop < $(window).height() && !scrolling) {
        //     scrolling = true;
        //     $.scrollTo({
        //         endY: 0,
        //         duration: 500,
        //         callback: function() {
        //             scrolling = false;
        //         }
        //     });
        // }*/
    });

    $contentList.modal({
        selector: 'a.item',
        trigger: 'click',
        name: "contentModal",
        displayed: function(options) {
            var $target = options.$target;
            var $element = $(options.element);
            var $heading = $('<header class="heading divider"/>');
            var item = $element.data('item');
            $heading.append($element.find('.avatar').clone().attr('data-skin', null));
            $heading.append($element.find('.content > .title').clone());
            if(item.star !== false) $heading.find('.title').append('&nbsp;&nbsp;<i class="icon icon-star text-yellow"></i>');
            $heading.append('<nav class="nav"><a data-dismiss="display"><i class="icon icon-remove muted"></i></a></nav>');
            $target.prepend($heading);

            var $magic = $('<div class="footer"><div class="list-item multi-lines gray divider-top"><div class="content"><div class="subtitle">魔法类</div><div class="magic-classes">' + $element.find('.magic-classes').html() + '</div></div></div></div>')
            $target.append($magic);
        }
    });
});
