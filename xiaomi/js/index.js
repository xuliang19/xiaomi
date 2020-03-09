function throttle(callback, duration) {
    var lasttime = 0;
    return function () {
        // 这里now是scroll触发的时候
        var now = new Date().getTime();
        if (now - lasttime > duration) {
            callback();
            lasttime = now;
        }
    }
}
window.onscroll = throttle(function () {
    console.log("Hello")
}, 500)