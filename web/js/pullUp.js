/**
 * 上拉加载
 * https://juejin.cn/post/6847902215844298759
 */
const preloadDistance = 100; // 提前多少个像素点开始加载


// 获取当前滚动条的位置 
function getScrollTop() {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

// 获取当前可视范围的高度 
function getClientHeight() {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}

// 获取文档完整的高度 
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}


// const pullUpTextEle = document.getElementById('pullDownText'),
//     refreshContainerEle = document.getElementById('refreshContainer');


// 节流函数
const throttle = function (method, context) {
    clearTimeout(method.timeId);
    method.timeId = setTimeout(function () {
        //console.log("Loading");
        method.call(context);
    }, 300);
};


// 模拟获取数据
function fetchData() {
    setTimeout(function() {
         pullUpLoad()
     }, 500);
 }

window.onscroll = function() {
    if (getScrollHeight() - (getScrollTop() + getClientHeight()) < preloadDistance) {
        //console.log("page="+page+" totalPage="+totalPage);
        if(page<=totalPage){
            //pullUpTextEle.innerText = 'Loading...';
            $('#pullUpText').css("display","block");
            throttle(fetchData);
        }
    }
};

