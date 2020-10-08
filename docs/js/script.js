$(function () {
    // モーダルを出す
    $('.inline').modaal();

    ///ページ内リンクをふわっと
    $('.menu ul li a').click(function () {
        // スクロールの速度
        var speed = 700; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});
