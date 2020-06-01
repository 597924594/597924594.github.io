var btn = document.getElementById('canvas_btn')
var canvas = document.getElementById('canvas')
var cv = document.getElementById('cv')
btn.onclick = function () {
    //点击按钮关闭起始页
    canvas.style.display = 'none'
    cv.style.display = 'block'
}
var menu_text = document.querySelector('#menu_text')
var date = new Date()
var hh = date.getHours()
var menu_date = function () {
    if (hh < 6) {
        menu_text.innerHTML = '凌晨好'
    } else if (hh < 9) {
        menu_text.innerHTML = '早上好'
    } else if (hh < 12) {
        menu_text.innerHTML = '上午好'
    } else if (hh < 13) {
        menu_text.innerHTML = '中午好'
    } else if (hh < 17) {
        menu_text.innerHTML = '下午好'
    } else if (hh < 19) {
        menu_text.innerHTML = '傍晚好'
    } else if (hh < 22) {
        menu_text.innerHTML = '晚上好'
    } else {
        menu_text.innerHTML = '晚安'
    }
}
menu_date()
