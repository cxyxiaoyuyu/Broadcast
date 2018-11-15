$().ready(function(){
   //固定导航条
   $(window).scroll(function(){
        if($(this).scrollTop() >= 165)
        {
            $('#guide-ban').css({
                'position': 'fixed',
                'top': '0px',
                'height': '52px',
                'width': '100%',
                'margin-left': '0',
                'padding-left': '28px',
                'z-index': '6'
            })
        }
        if($(this).scrollTop() < 165)
        {
            $('#guide-ban').css({
               ' width': '95%',
                'position': 'relative',
                'z-index': '0'
            })
        }
   })


//登录界面
    $('#menu-login').click(function(){
        $('#login').show('slow');
        /*-------遮罩层-------*/
        $('<div id="mask"></div>').appendTo($('body'));

        maskWidth = $(document).width();
        maskHeight = $(document).height();
        $('#mask').css({
            'opacity': 0.3,
            'background': '#222',
            'position':'absolute',
            'left':0,
            'top': 0,
                'z-index':3,
            'width': maskWidth,
            'height': maskHeight
        });
    });
    $('.guanbi-img').click(function(){
        $('#login').hide(1000);
        $('#mask').remove();
    });

    $('#search input').focus(function(){
        console.log('111111');
        $(this).addClass('input_css');
    });

    $('#search select').focus(function(){
        console.log('222');
        $(this).addClass('input_css');
    });







//轮播图
    $('#pre').click(function(){
        var current = parseInt($('#img-container').css('left'));
        var offset = current + 192 + 'px';

        if(current % 192 != 0){
            return;
        }
        if(parseInt(current) == 0){
            offset = 0 + 'px';
        }
        $('#img-container').animate({
            'left': offset
        },800);
    });

    $('#next').click(function(){
        var current = parseInt($('#img-container').css('left'));
        var offset = current - 192 + 'px';
        console.log(current);
        if(current % 192 != 0){
            return;
        }

        if(parseInt(current) == -960){
            offset = -960 + 'px';
        }
        $('#img-container').animate({
            'left': offset
        },800);
    });

      var Time = 86399;
  setInterval(function(){
      Time--;
      var hour = parseInt(Time / 3600);
      var min = parseInt(Time % 3600 /60);
      var sec = Time % 60;
      $('.time').html(hour+":"+min+":"+sec);
  },1000);




// info.js
    var i = 0;
    d = $('#img-list div img');
    for(i=0;i<d.length;i++){
        d[i].index = i;
        d.mouseover(function(){
            $(this).each(function(){
                $('#max-img img').attr('src',$(this)[0].src);
            })
        });
    }


    $('#color a').click(function(){
        $(this).css('border','2px solid red').siblings().css('border','1px solid #ddd');
        $('#color label').css('border','none');
        console.log($(this).html());
    });

    $('#color .red').click(function(){
        $('#max-img img').attr('src','http://img13.360buyimg.com/n1/s450x450_jfs/t4642/110/753072126/121222/5556881f/58d484a0N1d9d2ebf.jpg');
        $('#imga img').attr('src','http://img13.360buyimg.com/n1/s450x450_jfs/t4642/110/753072126/121222/5556881f/58d484a0N1d9d2ebf.jpg');
        $('#imgb img').attr('src','http://img13.360buyimg.com/n1/s450x450_jfs/t4687/100/757699373/96935/a525baf1/58d484a0N8892cf20.jpg');
        $('#imgc img').attr('src','http://img13.360buyimg.com/n1/s450x450_jfs/t4213/188/2630508476/47226/165ccf13/58d484a1N756d7fee.jpg');
        $('#imgd img').attr('src','http://img13.360buyimg.com/n1/s450x450_jfs/t4336/270/2616814065/51831/8c5c2a5a/58d484a1N335e29ed.jpg');
        $('#imge img').attr('src','http://img13.360buyimg.com/n1/s450x450_jfs/t3202/29/9559963603/113490/2001250c/58d484a1Nfb150c98.jpg');
    })

    $('#type a').click(function(){
        $(this).css('border','2px solid red').siblings().css('border','1px solid #eee');
        $('#type label').css('border','none');
    });

    $('#rom a').click(function(){
        $(this).css('border','2px solid red').siblings().css('border','1px solid #eee');
        $('#rom label').css('border','none');
    });
    $('#ram a').click(function(){
        $(this).css('border','2px solid red').siblings().css('border','1px solid #eee');
        $('#ram label').css('border','none');
    });

    $('#num .add').click(function(){
        var value =  parseInt($('#num input').val());
        value += 1;
        $('#num input').val(value);
    });

    $('#num .sub').click(function(){
        var value =  parseInt($('#num input').val());
        value -= 1;
        if(value <= 0){
            value = 0;
        }
        $('#num input').val(value);
    });

//放大镜
    $('#max-img').mousemove(function(e){
        $('#magnifier').fadeIn(100);
        $('#maxbox').fadeIn(100);

        var mvleft = e.pageX -81 - $('#magnifier').innerWidth()/2;
        var mvtop = e.pageY - 322 - $('#magnifier').innerHeight()/2; var maxmvleft = $(this).innerWidth() - $('#magnifier').innerWidth(); var maxmvtop = $(this).innerHeight() - $('#magnifier').innerHeight();
        if(mvleft <= 0 ){
            mvleft = 0;
        }
        if(mvleft >= maxmvleft){
            mvleft = maxmvleft;
        }
        if(mvtop <= 0){
            mvtop = 0;
        }
        if(mvtop >= maxmvtop){
            mvtop = maxmvtop;
        }
        $('#magnifier').css({
            'left': mvleft,
            'top': mvtop
        })

        var scalex = parseInt($('#magnifier').css('left')) / $(this).innerWidth();
        var scaley = parseInt($('#magnifier').css('top')) / $(this).innerHeight();

        maxboxleft = $('#maxbox img').innerWidth() * scalex;
        maxboxtop = $('#maxbox img').innerHeight() * scaley;
        $('#maxbox').scrollLeft(maxboxleft);
        $('#maxbox').scrollTop(maxboxtop);

    })

    $('#max-img').mouseout(function(){
        $('#magnifier').fadeOut(100);
        $('#maxbox').fadeOut(100);
    })

    //admin.js
   $('.fa-pencil').click(function(){
       $('.adduser').fadeIn(500);
        $('<div id="mask"></div>').appendTo($('body'));

        maskWidth = $(document).width();
        maskHeight = $(document).height();
        $('#mask').css({
            'opacity': 0.3,
            'background': '#222',
            'position':'absolute',
            'left':0,
            'top': 0,
                'z-index':3,
            'width': maskWidth,
            'height': maskHeight
        });
        $('.fa-close').click(function(){
            $('.adduser').fadeOut(1000);
            $('#mask').remove();
        })
   })
   $('.addusr').click(function(){
       $('.adduser').fadeIn(500);
        $('<div id="mask"></div>').appendTo($('body'));

        maskWidth = $(document).width();
        maskHeight = $(document).height();
        $('#mask').css({
            'opacity': 0.3,
            'background': '#222',
            'position':'absolute',
            'left':0,
            'top': 0,
                'z-index':3,
            'width': maskWidth,
            'height': maskHeight
        });
        $('.fa-close').click(function(){
            $('.adduser').fadeOut(1000);
            $('#mask').remove();
        })
   })


    $('.fa-trash-o').click(function(){
    })



    $('.fa-key').click(function(){
        $('.chpasswd').fadeIn(500);
        $('<div id="mask"></div>').appendTo($('body'));

        maskWidth = $(document).width();
        maskHeight = $(document).height();
        $('#mask').css({
            'opacity': 0.3,
            'background': '#222',
            'position':'absolute',
            'left':0,
            'top': 0,
                'z-index':3,
            'width': maskWidth,
            'height': maskHeight
        });
        $('.fa-close').click(function(){
            $('.chpasswd').fadeOut(1000);
            $('#mask').remove();
        })
    })

    $('.saveadd').click(function(){
        $('.addsave').fadeIn(500);
        $('<div id="mask"></div>').appendTo($('body'));

        maskWidth = $(document).width();
        maskHeight = $(document).height();
        $('#mask').css({
            'opacity': 0.3,
            'background': '#222',
            'position':'absolute',
            'left':0,
            'top': 0,
                'z-index':3,
            'width': maskWidth,
            'height': maskHeight
        });
        $('.fa-close').click(function(){
            $('.addsave').fadeOut(1000);
            $('#mask').remove();
        })
    })

    $('.change').click(function(){
        $('.chstate').fadeIn(500);
        $('<div id="mask"></div>').appendTo($('body'));

        maskWidth = $(document).width();
        maskHeight = $(document).height();
        $('#mask').css({
            'opacity': 0.3,
            'background': '#222',
            'position':'absolute',
            'left':0,
            'top': 0,
                'z-index':3,
            'width': maskWidth,
            'height': maskHeight
        });
        $('.fa-close').click(function(){
            $('.chstate').fadeOut(1000);
            $('#mask').remove();
        })
    })

    $('.fa-trash-o').click(function(){
        console.log('delete');
        $(this).parents('tr').remove();
    })

});


