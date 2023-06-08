(function () {
    var timeline = function (id) {
        var selectors = {
            id: document.querySelector(id),
            item: document.querySelectorAll(id + " .item"),
            activeClass: "item--active",
            img: ".img"
        };
        
        // 将第一个时间轴项目激活，并设置时间轴背景图片为第一个项目的图片
        selectors.item[0].classList.add(selectors.activeClass);
        selectors.id.style.backgroundImage = 'url(' + selectors.item[0].querySelector(selectors.img).src + ')';
        
        // 获取时间轴项目的总数
        var itemLength = selectors.item.length;

        // 当页面滚动时，触发滚动事件
        window.onscroll = function () {
            var max, min;
            // 获取页面滚动的距离
            var pos = window.pageYOffset;
            Array.prototype.forEach.call(selectors.item, function (element, i) {
                // 获取当前时间轴项目的最小和最大高度
                min = element.offsetTop;
                max = element.offsetHeight + element.offsetTop;
                
                // 如果滚动到最后一个项目，并且超过了当前项目高度的一半，
                // 则将最后一个项目设置为激活状态，并设置背景图片为最后一个项目的图片
                if (i == itemLength - 2 && pos > min + element.offsetHeight / 2) {
                    Array.prototype.forEach.call(selectors.item, function (element) {
                        element.classList.remove(selectors.activeClass);
                    });
                    selectors.id.style.backgroundImage = 'url(' + selectors.item[itemLength - 1].querySelector(selectors.img).src + ')';
                    selectors.item[itemLength - 1].classList.add(selectors.activeClass);
                }
                // 如果当前滚动位置在当前项目的最小和最大高度之间，
                // 则将当前项目设置为激活状态，并设置背景图片为当前项目的图片
                else if (pos <= max - 10 && pos >= min) {
                    selectors.id.style.backgroundImage = 'url(' + element.querySelector(selectors.img).src + ')';
                    Array.prototype.forEach.call(selectors.item, function (element) {
                        element.classList.remove(selectors.activeClass);
                    });
                    element.classList.add(selectors.activeClass);
                }
            });
        };
    };
    timeline("#shell");
})();
