

$(function () {
    
    var pageSlider =PageSlider.case({
        callback: getPageSlidersCallback()
    });

    function getPageSlidersCallback() {
        return {
            1: function () {
                pageSlider1();
            },
            2: function () {
                pageSlider2();
            },
            3: function () {
                pageSlider3();
            },
            4: function () {
                pageSlider4();
            },
            5: function () {
                pageSlider5();
            },
            6: function () {
                pageSlider6();
            },
            7: function () {
                pageSlider7();
            },
            8: function () {
                pageSlider8();
            },
            9: function () {
                pageSlider9();
            },
            10: function () {
                pageSlider10();

            },
            11: function () {
                pageSlider11();
            }
        };
    }

    /*第一屏*/
    function pageSlider1() {
        
    }

    function pageSlider2() {
        var $li = $('.poetryWords ul li'),
            i = 0,
            interval = window.setInterval(function () {
                if (i == 4) {
                    window.clearInterval(interval);
                } else {
                    $li.eq(i).addClass('poetryWordsLiShow');
                    i++;
                }
            }, 1000);
    }
    function pageSlider3() { }
    function pageSlider4() { }
    function pageSlider5() { }
    function pageSlider6() { }
    function pageSlider7() { }
    function pageSlider8() { }
    function pageSlider9() { }
    function pageSlider10() { }
    function pageSlider11() { }

});