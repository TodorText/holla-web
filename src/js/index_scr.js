var clientWidth = document.documentElement.clientWidth;
var mobile = clientWidth < 800;
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var mySwiper;
window.onresize = function() {
    clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 800) {
        document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 3.2 + 'px'
    } else {
        document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 19.2 + 'px'
    }
};
window.addEventListener('orientationchange',
    function() {
        clientWidth = document.documentElement.clientWidth;
        if (clientWidth < 800) {
            document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 3.2 + 'px'
        } else {
            document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 19.2 + 'px'
        }
    },
    false);
$(function() {
    if (mobile) {
        var canvas = document.getElementById('videoCanvas');
        var player = new jsmpeg('/src/images/mobile/mobile.mpg', {
            canvas: canvas,
            autoplay: true,
            loop: true,
            audio: false
        })
    }
    $('.section1 .holla .mobile-download').click(function() {
        if (isAndroid) {
            location.href = 'https://play.google.com/store/apps/details?id=com.exutech.chacha&referrer=utm_source%3Dappinvite'
        } else {
            location.href = 'https://itunes.apple.com/app/apple-store/id1125318983?mt=8'
        }
    });
    $('.section1 .monkey .mobile-download').click(function() {
        if (isAndroid) {
            location.href = 'https://play.google.com/store/apps/details?id=cool.monkey.android'
        } else {
            location.href = 'https://itunes.apple.com/us/app/monkey/id1165924249?mt=8'
        }
    });
    if (!mobile) {
        $('#section9').hide()
    } else {
        $('#secParent').append('<div id="section9" class="section section9"><div class="thunder before"></div><div class="arrow before"></div><div class="building before"></div><div class="hr container before"><div class="mask"></div><div class="title"><span class="lang-container lang-CH">人才招聘</span><span class="lang-container lang-EN">Job Vacancies</span></div><div class="description"><span class="lang-container lang-CH">开放、包容、有纪律的 HOLLA Group 正持续不断扩充力量，如果你对工作有激情、对结果有追求，欢迎移步我们的招聘主页⬇️</span><span class="lang-container lang-EN">More job opportunities please visit our linkedin page：</span></div><div class="lagou"><img src="src/images/lagou@2x.png"><span><span class="lang-container lang-CH">拉勾网</span><span class="lang-container lang-EN">拉勾网</span></span></div></div><div class="location container before"><div class="title"><span class="lang-container lang-CH">北京</span><span class="lang-container lang-EN">Beijing</span></div><div class="description"><div class="white"><span class="lang-container lang-CH">东城区</span><span class="lang-container lang-EN">Address：Room 10803, Galaxy Soho A， Dongcheng District, Beijing, China</span><span class="lang-container lang-CH">银河SOHO-A座 10803, 10805室</span><span class="lang-container lang-EN"></span></div></div><div class="title sec-title"><span class="lang-container lang-CH">洛杉矶</span><span class="lang-container lang-EN">Los Angeles</span></div><div class="description"><div class="white">5792 West Jefferson Blvd., Los Angeles, CA, 90016</div></div><div class="copy">© 2018 HOLLA Group<span class="lang-container lang-CH"><br>京ICP备18049823号</span></div></div><div class="mask before"></div></div>')
    }
    if (isAndroid) {
        $('.section1 .mobile-download').attr('src', 'src/images/mobile/google-play@2x.png')
    }
    $('.mobile-menu').click(function() {
        if ($('.mobile-menu').attr('src').indexOf('close') === -1) {
            var $siteHeadImg = $('.site-head .img');
            $siteHeadImg.attr('pre-src', $siteHeadImg.attr('src'));
            $siteHeadImg.attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-02@2x.png');
            $('.mobile-menu').hide();
            $('.mobile-menu').css('padding', 0);
            $('.mobile-menu').attr('src', '/src/images/mobile/close@2x.png');
            $('.mobile-menu').fadeIn();
            if (wavemenu) {
                wavemenu.destroy()
            }
            var wavemenu = bodymovin.loadAnimation({
                container: $('#menu-wave')[0],
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '/static/json/01_wave_start.json'
            });
            wavemenu.addEventListener('complete',
                function() {
                    wavemenu.destroy();
                    bodymovin.loadAnimation({
                        container: $('#menu-wave')[0],
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/static/json/01_wave_loop.json'
                    })
                });
            $('.mobile-menu-cover').fadeIn(250);
            $('.lang-out').fadeIn();
            $('.navigation').fadeIn();
            $('#menu-wave').fadeIn()
        } else {
            $siteHeadImg = $('.site-head .img');
            $siteHeadImg.attr('src', $siteHeadImg.attr('pre-src'));
            $('.mobile-menu').hide();
            $('.mobile-menu').css('padding', '0.04rem');
            $('.mobile-menu').attr('src', '/src/images/mobile/menu@2x.png');
            $('.mobile-menu').fadeIn();
            $('.mobile-menu-cover').fadeOut(250);
            $('.lang-out').fadeOut();
            $('.navigation').fadeOut();
            $('#menu-wave').fadeOut()
        }
    });
    var $navigationButton = $('#navigation').children('.button');
    var $navigationDot = $('#navigation').find('.dot');
    var $section1Wave = $('#section2 #wave');
    var section2Loaded = false;
    var section3Loaded = false;
    var section4Loaded = false;
    var section5Loaded = false;
    var section6Loaded = false;
    var section7Loaded = false;
    var section8Loaded = false;
    var section9Loaded = false;
    var lang = 'CH';
    var env = {
        1 : {
            which: 'holla',
            text: {
                holla: {
                    CH: ['随机视频聊天', '即时约会', '与你的 BFF', '认识新朋友'],
                    EN: ['Instant video matches', 'Make your filters', 'Join the party', 'All over the world']
                },
                monkey: {
                    CH: ['Meet new friends', 'Chats start', 'Add time', 'Monkey vibe'],
                    EN: ['Meet new friends', 'Chats start', 'Add time', 'Monkey vibe']
                }
            },
            description: {
                holla: {
                    CH: ['拒绝等待，极速连接', '超越时间，跨越空间', '你的真实，ta 能看见', '来自世界各地'],
                    EN: ['Chat instantly', 'Fun video effects', 'Match over interests', 'Find the right soul']
                },
                monkey: {
                    CH: ['face to face', 'with 15 seconds', 'keep chatting', 'over similar interests'],
                    EN: ['face to face', 'with 15 seconds', 'keep chatting', 'over similar interests']
                }
            }
        }
    };
    var moving = false;
    var moveCount = {
        holla: 0,
        monkey: 0
    };
    function move(which) {
        if (moving) {
            return
        }
        var moveImgList = document.querySelectorAll('.section1 .carousel-container.' + which + '-content .img');
        for (var i = 0; i < moveImgList.length; i++) {
            if ($(moveImgList[i]).attr('class').indexOf('left') !== -1) {
                return
            }
        }
        moving = true;
        var container = which === 'holla' ? '.ink-container': '.word-container';
        $('.section1 .carousel-container.' + which + '-content .zero img').attr('src', $('.section1 .carousel-container.' + which + '-content .one img').attr('src'));
        moveImgList.forEach(function(element) {
            switch ($(element).attr('class')) {
                case 'img zero':
                    $(element).attr('class', 'img four');
                    break;
                case 'img one':
                    $(element).attr('class', 'img zero');
                    break;
                case 'img two':
                    $(element).attr('class', 'img one');
                    break;
                case 'img three':
                    $(element).attr('class', 'img two');
                    break;
                case 'img four':
                    $(element).attr('class', 'img three');
                    break
            }
        });
        moveCount[which]++;
        if (moveCount[which] > 3) {
            moveCount[which] = 0
        }
        if (which === 'holla') {
            if (moveCount[which] === 0) {
                $('.section1 ' + container + ' .title span').addClass('wrap')
            } else {
                $('.section1 ' + container + ' .title span').removeClass('wrap')
            }
            $('.section1 ' + container + ' .title .lang-CH').text(env[1].text[which].CH[moveCount[which]]);
            $('.section1 ' + container + ' .description .lang-CH').text(env[1].description[which].CH[moveCount[which]]);
            $('.section1 ' + container + ' .title .lang-EN').text(env[1].text[which].EN[moveCount[which]]);
            $('.section1 ' + container + ' .description .lang-EN').text(env[1].description[which].EN[moveCount[which]])
        } else {
            $('.section1 ' + container + ' .title span').text(env[1].text[which].CH[moveCount[which]]);
            $('.section1 ' + container + ' .description span').text(env[1].description[which].CH[moveCount[which]])
        }
        moving = false
    }
    var newsCH = [{
        icon: 'src/images/36kr.jpg',
        url: 'http://36kr.com/p/5092695.html',
        date: '2017-09-13',
        title: '在日趋同质化的实时视频社交赛道，「HOLLA」用减法赢得近千万用户',
        content: '当下，视频社交正值风口，FACEBOOK也在加码视频社交，在实时社交呼声尤其高的2017年，诞生于2016年8月的HOLLA算是该细分赛道的前辈产品。如同Monkey, 美国市场也是 HOLLA 最大的市场，但是HOLLA 更面向全球，覆盖90几个国家，并在70多个国家已经超过社交榜前50'
    },
        {
            icon: 'src/images/souhu.png',
            url: 'http://www.sohu.com/a/212264608_355020',
            date: '2017-12-20',
            title: '这个中国90后正在变革美国00后的社交方式，10天收购最大竞争对手',
            content: '2017年11月，HOLLA收购了最大竞争对手Monkey APP，这个一度排名北美社交软件下载榜第五的APP，在美国00后中的影响力丝毫不比Facebook逊色。这次被大观资本创始合伙人范路形容为“惊艳”的收购，让HOLLA控制了2个在美国社交排行榜排名前40的APP，在视频交友这个细分领域占到了90％以上的份额。'
        },
        {
            icon: 'src/images/36kr.jpg',
            url: 'http://36kr.com/p/5108839.html',
            date: '2017-12-20',
            title: '出海[HOLLA]收了[Monkey]！美国00后视频社交也尽在手中',
            content: '「HOLLA」一举收购了自己最大的竞品「Monkey」！在北美实时视频社交的赛道上，「HOLLA」是身先士卒的老前辈，「Monkey」则是不甘示弱的佼佼者，双方同属陌生社交的随机匹配派，主打00后用户'
        },
        {
            icon: 'src/images/sina.jpg',
            url: 'http://k.sina.com.cn/article_6105713761_16bedcc610190046hv.html?from=news&subch=onews',
            date: '2018-02-23',
            title: '红星专访福布斯精英榜②丨90后CEO陶沙：走投无路最容易成功',
            content: '2017年7月，凭借这一成就，陶沙入围了2017年福布斯中国30位30岁以下精英榜。近日，他更是在短短10天内收购了最大竞争对手Monkey APP,从而创下收购史上“佳话”，引得业内惊叹'
        },
        {
            icon: 'src/images/souhu.png',
            url: 'http://www.sohu.com/a/225067971_247350',
            date: '2018-03-07',
            title: '占领北美视频社交90%份额，这位90后海归做了个视频版探探',
            content: '简单说来，HOLLA的产品形态可以类比视频+社交版的探探，其用户来自欧美、东亚、中东等90多个国家，其中美国是其最大的市场，目前HOLLA在 70多个国家的App商店中排名社交榜前50'
        },
        {
            icon: 'src/images/heishi.jpeg',
            url: 'https://baijiahao.baidu.com/s?id=1594379115131296126&wfr=spider&for=pc',
            date: '2018-03-28',
            title: 'HOLLA CEO 陶沙：一年增长2000万全球用户，积累了这些经验',
            content: '作HOLLA在诞生后的6个月就实现了公司的盈亏平衡，1年不到就收购了最大的竞争对手Monkey，收购Monkey后的HOLLA团队现在同时运营着这两个美国社交榜排名前30的App。同为陌生人视频交友软件，Monkey和HOLLA最大的不同是，相比HOLLA，Monkey更加年轻化'
        },
        {
            icon: 'src/images/jiemian.jpg',
            url: 'https://www.jiemian.com/article/1952790.html',
            date: '2018-02-24',
            title: '收购了竞争对手之后 HOLLA想成为海外最大的陌生人社交公司',
            content: '“HOLLA会建立自己的产品矩阵，通过不同的形式服务不同的用户，但最终都是为了解决年轻人的陌生人社交问题”，收购Monkey之后，陶沙已经为HOLLA勾画了更大的蓝图。'
        },
        {
            icon: 'src/images/souhucaijing.jpeg',
            url: 'http://www.sohu.com/a/233448576_100119172',
            date: '2018-05-31',
            title: 'HOLLA Group 携手拉美青年领袖团发扬创业精神',
            content: '作为中国当代最具活力的创业公司之一，HOLLA Group在拉美青年干部代表团的交流会上分享如何快速在全球市场迅速崛起的经验，并引起拉美青年干部的广泛关注。HOLLA Group成立于2016年下半年，是一家主打海外市场的移动互联网公司。截止2018年年初，HOLLA Group旗下的两款产品HOLLA、Monkey累计获取了遍布全世界一百多个国家的数千万用户'
        },
        {
            icon: 'src/images/chuangyebang.png',
            url: 'https://baijiahao.baidu.com/s?id=1595553422152206827&wfr=spider&for=pc',
            date: '2018-03-21',
            title: '90后创的视频交友社区，几秒内和世界各地有趣的人嗨聊，不到2年收购美国最大竞争对手',
            content: '简单说来，HOLLA的产品形态可以类比视频+社交版的探探，其用户来自欧美、东亚、中东等90多个国家，其中美国是其最大的市场，目前HOLLA在 70多个国家的App商店中排名社交榜前50'
        },
        {
            icon: 'src/images/souhu.png',
            url: 'https://www.sohu.com/a/226321630_144325',
            date: '2018-03-25',
            title: '每天几十万北美人在玩的视频社交Top1，竟出自这家中国公司',
            content: '当你点开HOLLA，首先能选择几个表情符号：笑脸、伤心、淡定……它们是你情绪的注解。几秒钟匹配后，屏幕上就会出现对方的脸：可能是一位法国小哥、俄罗斯妹子，或是你隔壁的同事。尽管跨越重洋，只要你会说几句英语，就能正常沟通。如果你show上一段才艺，更能打动一颗陌生的心。'
        },
        {
            icon: 'src/images/dongdiankeji.png',
            url: 'https://cn.technode.com/post/2018-03-08/holla/',
            date: '2018-03-08',
            title: 'HOLLA：全美第一的随机视频社交 APP，00 后的世界了解一下？| 创业',
            content: '2017 年 5 月，HOLLA 进入美国社交软件榜前 30；8 月完成 20 亿用户配对。如今，HOLLA 已被翻译成 17 种语言、覆盖 200 多个国家和地区，也使得 HOLLA 赢得上千万人民币的投资，每年有几千万元的可观收入。'
        },
        {
            icon: 'src/images/fenghuangwang.png',
            url: 'http://finance.ifeng.com/a/20180711/16379254_0.shtml',
            date: '2018-07-11',
            title: 'HOLLA Group勇夺Google Demo Day亚洲首次路演预热冠军',
            content: '近日，HOLLA Group在由Google for Entrepreneurs与联合创业办公社（People Square）共同主办的“Let’s go”出海项目路演中，击败其余八项创业项目并勇夺第一。Google for Entrepreneurs是谷歌于2014年成立的项目，旨在利用google强大的行业领域资源为优秀的创业公司与投资方搭建强劲的联系。截止目前，已有超过100家的全球顶级VC参与到谷歌Demo Day的路演评审中。'
        }];
    var newsEN = [{
        icon: 'src/images/Venturebeat.png',
        url: 'https://venturebeat.com/2018/02/06/holla-acquires-monkey-to-expand-video-chat-for-dating-and-friend-discovery/',
        date: '2018-02-6',
        title: 'Holla acquires Monkey to expand video chat for dating and friend discovery',
        content: 'Video chat app Holla acquired competitor Monkey today. Holla acquired Monkey’s brand assets and now runs operations for both apps out of Holla offices in Beijing and Los Angeles. Monkey employees, including founders Ben Pasternak and Isaiah Turner, will not join Holla. Additional terms of the deal were not disclosed.'
    },
        {
            icon: 'src/images/BuzzFeed.png',
            url: 'https://www.buzzfeed.com/denisgloba/how-generation-z-is-making-new-friends-and-connect-3h2jn?utm_term=.akn9VQ48V#.jawOad9Ya',
            date: '2018-06-05',
            title: 'How Generation Z Is Making New Friends And Connecting With Them',
            content: 'HOLLA is a social video app that is poised to take the lead when it comes to injecting the fun and seamlessness of social media connections back into the current social media climate. Here’s how it works:'
        },
        {
            icon: 'src/images/Odyssey.png',
            url: 'https://www.theodysseyonline.com/this-is-how-people-all-over-are-making-new-friends',
            date: '2018-01-24',
            title: 'This Is How People All Over Are Making New Friends',
            content: 'Despite social media being such a prevalent factor in our daily lives, it can become difficult to genuinely connect with new people through the internet. Apps such as Monkey have been used by teens and more recently, HOLLA has been increasing amongst college-aged students and individuals.'
        },
        {
            icon: 'src/images/FORBES.png',
            url: 'https://www.forbes.com/sites/marcusnoel/2018/05/18/hey-facebook-gen-z-is-finding-new-ways-to-connect-socially/#668329f81468',
            date: '2018-05-18',
            title: 'Hey Facebook, Gen Z Is Finding New Ways To Connect Socially',
            content: 'This app aims to offer a more authentic and engaging chat experience compared to traditional text-only social apps. Utilizing an interest-based algorithm, users of similar demographics are matched and given the opportunity to chat. HOLLA also has a 2-Player mode feature where users can tag-team with friends and match with others for twice the fun.'
        },
        {
            icon: 'src/images/hitechgazette.png',
            url: 'https://hitechgazette.com/holla-app-review-random-video-chat-app-different/',
            date: '2018-03-02',
            title: 'HOLLA App Review | Random Video Chat App – How it’s different?',
            content: 'Holla App is the recent ‘in’ thing in the world of random video chat apps. Because gone are the days that simple voice calls worked. Video calling has become a hobby rather than something we do to get in touch.'
        },
        {
            icon: 'src/images/SydneyMorningHerald.jpg',
            url: 'https://www.smh.com.au/technology/aussie-whizkid-ben-pasternak-eyes-next-project-after-selling-video-chat-app-monkey-to-rival-20180101-h0c7ea.html',
            date: '2018-01-02',
            title: 'Aussie whiz-kid Ben Pasternak eyes next project after selling video chat app Monkey to rival',
            content: 'Monkey, which raised $US2 million in venture capital before being sold and amassed close to 3 million users who made over 1 billion calls, was purchased late last year by rival app HOLLA, which has offices in Beijing and Los Angeles. '
        },
        {
            icon: 'src/images/medium.png',
            url: 'https://medium.com/@kyle_34288/this-app-wants-to-change-the-way-you-celebrate-halloween-1607f85d6e7f',
            date: '2017-10-20',
            title: 'This App wants to change the way you celebrate Halloween',
            content: 'HOLLA is a random video chat app inviting users from all over the world to participate in a digital costume contest. They’re building special functionality into the app for the 3 day campaign and installing a leaderboard so you can see how your costume ranks in real time. '
        },
        {
            icon: 'src/images/Mashable.jpg',
            url: 'https://mashable.com/2017/01/19/monkey-social-networking-app-teenagers/#_NIXvJ.yhmqG',
            date: '2017-01-19',
            title: 'Forget Facebook, forget Snapchat: Teens are doing it themselves',
            content: 'Monkey is an iOS app for people who have friends, and then they have "internet friends." It\'s a way to find more of the latter, the pair say, rather than connecting with people from school or your neighbourhood. Although, like every other app out there, Monkey still wants to mine your phone\'s contacts'
        }];
    function initSwiper() {
        mySwiper = new Swiper('.news-container', {
            slidesPerView: 'auto',
            grabCursor: true,
            allowTouchMove: mobile,
            speed: 600,
            on: {
                slideNextTransitionStart: function() {
                    if (!mobile) {
                        $('.navigation').fadeOut();
                        $('.site-head').fadeOut()
                    }
                },
                reachBeginning: function() {
                    if (!mobile) {
                        $('.navigation').fadeIn();
                        $('.site-head').fadeIn()
                    }
                }
            }
        })
    }
    $('.lang-out span').click(function() {
        var newsContainer = $('#section7 .news-container');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        lang = $(this).text();
        $('.lang-container').hide();
        $('.lang-' + lang).show();
        $('#section7 .arrow.right').fadeIn();
        $('#section7 .arrow.left').fadeOut();
        var newsContainerTransition = newsContainer.css('transition');
        newsContainer.css('transition', 'none');
        newsContainer.fadeOut('normal',
            function() {
                $('#section7 .news-container .swiper-wrapper').html(addNews(lang));
                if (mySwiper) {
                    mySwiper.slideTo(0)
                }
                newsContainer.fadeIn('normal',
                    function() {
                        if (mySwiper) {
                            mySwiper.destroy();
                            initSwiper()
                        }
                        newsContainer.css('transition', newsContainerTransition)
                    })
            });
        if (lang === 'CH') {
            $('.section8 .cooperate').css('padding-top', '1.19rem')
        } else {
            $('.section8 .cooperate').css('padding-top', '.49rem')
        }
        if (mobile) {
            $('.mobile-menu').hide();
            $('.mobile-menu').css('padding', '0.04rem');
            $('.mobile-menu').attr('src', '/src/images/mobile/menu@2x.png');
            $('.mobile-menu').fadeIn();
            $('.mobile-menu-cover').fadeOut(250);
            $('.lang-out').fadeOut();
            $('.navigation').fadeOut();
            $('#menu-wave').fadeOut()
        } else {
            $('.navigation').fadeIn();
            $('.site-head').fadeIn()
        }
    });
    function addNews() {
        var news = (lang === 'CH' ? newsCH: newsEN);
        var result = '';
        for (var i = 0; i < news.length; i += 2) {
            result += '<div class="swiper-slide news-column ' + getNewsClass(i) + '"><a href="' + news[i].url + '" target="_blank"><div class="news"><div class="info"><img src="' + news[i].icon + '" alt="" class="icon"><span class="date">' + news[i].date + '</span></div><div class="title">' + news[i].title + '</div><div class="content">' + news[i].content + '</div></div></a>' + (news[i + 1] ? '<a href="' + news[i + 1].url + '" target="_blank"><div class="news"><div class="info"><img src="' + news[i + 1].icon + '" alt="" class="icon"><span class="date">' + news[i + 1].date + '</span></div><div class="title">' + news[i + 1].title + '</div><div class="content">' + news[i + 1].content + '</div></div></a>': '') + '</div>'
        }
        return result
    }
    function getNewsClass(index) {
        switch (index % 3) {
            case 1:
                return 'three';
            case 2:
                return 'two';
            case 0:
                return 'one'
        }
    }
    $('.navigation-item').click(function() {
        if (mobile) {
            setTimeout(function() {
                    $('.mobile-menu').hide();
                    $('.mobile-menu').css('padding', '0.04rem');
                    $('.mobile-menu').attr('src', '/src/images/mobile/menu@2x.png');
                    $('.mobile-menu').fadeIn();
                    $('.mobile-menu-cover').fadeOut(250);
                    $('.lang-out').fadeOut();
                    $('.navigation').fadeOut();
                    $('#menu-wave').fadeOut()
                },
                1000)
        }
        $.fn.fullpage.moveTo($(this).attr('data-page'))
    });
    $('.site-head').click(function() {
        $.fn.fullpage.moveTo(1)
    });
    $('.progress-bar').removeClass('before');
    $('#secParent').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        verticalCentered: false,
        onLeave: function(origin, destination, direction) {
            if (origin) {
                origin = origin.index + 1
            } else {
                origin = 1
            }
            if (destination) {
                destination = destination.index + 1
            } else {
                destination = 1
            }
            if (origin === 2 && destination > origin) {
                $('#section2 #arrow').animate({
                        filter: 'blur(5px)',
                        opacity: 0,
                        width: '.9rem',
                        height: '.57rem'
                    },
                    200);
                $section1Wave.animate({
                        opacity: 0,
                        bottom: -$section1Wave.height()
                    },
                    300);
                $('#section2 .video-sub-container').animate({
                        top: '-.4rem',
                        opacity: 0
                    },
                    200);
                $('.section1-img-container').addClass('in-section2');
                if (destination > 3) {
                    $('.section1-img-container').addClass('in-section3')
                }
            }
            if (destination === 1) {
                $('.section1-img-container').addClass('in-section3')
            }
            if (destination === 2) {
                $('#section2 #arrow').animate({
                        filter: 'blur(0)',
                        opacity: 1,
                        width: '.3rem',
                        height: '.19rem'
                    },
                    200);
                $section1Wave.animate({
                        opacity: 1,
                        bottom: 0
                    },
                    300);
                $('#section2 .video-sub-container').animate({
                        top: '0',
                        opacity: 1
                    },
                    200);
                $('.section1-img-container').removeClass('in-section3');
                $('.section1-img-container').removeClass('in-section2');
                $('#rocket').fadeOut()
            }
            if (destination === 3 || origin === 3) {
                $('.section3 .map-gradient').hide()
            }
            if (origin === 3 && destination > origin) {
                $('#section3 .map').animate({
                        top: '.3rem',
                        opacity: 0
                    },
                    200);
                if (mobile) {
                    $('#section3 #word').addClass('before');
                    $('#section3 #cloud').animate({
                            top: '2.1rem',
                            opacity: 0
                        },
                        200)
                } else {
                    $('#section3 #word').animate({
                            top: '5.07rem',
                            opacity: 0
                        },
                        200);
                    $('#section3 #cloud').animate({
                            top: '2.4rem',
                            opacity: 0
                        },
                        200)
                }
                $('#rocket').animate({
                        bottom: -$('#rocket').height(),
                        opacity: 0
                    },
                    200);
                $('.section1-img-container').addClass('in-section3')
            }
            if (destination === 3) {
                if (section2Loaded) {
                    $('#section3 .map').animate({
                            top: '.9rem',
                            opacity: 1
                        },
                        200);
                    if (mobile) {
                        $('#section3 #word').removeClass('before');
                        $('#section3 #cloud').animate({
                                top: '1.6rem',
                                opacity: 1
                            },
                            200)
                    } else {
                        $('#section3 #word').animate({
                                top: '5.67rem',
                                opacity: 1
                            },
                            200);
                        $('#section3 #cloud').animate({
                                top: '3rem',
                                opacity: 1
                            },
                            200)
                    }
                    $('#rocket').animate({
                            bottom: '0',
                            opacity: 1
                        },
                        200);
                    $('.section1-img-container').removeClass('in-section3')
                }
            }
            if (origin === 4 && destination > origin) {
                $('#section4 .word').addClass('after')
            }
            if (destination === 4 && destination < origin) {
                $('#section4 .word').removeClass('after')
            }
            if (origin === 6 && destination > origin) {
                $('.section6 > *').addClass('after')
            }
            if (destination === 6) {
                $('.section6 > *').removeClass('after')
            }
            if (origin === 7) {
                $('.site-head').fadeIn()
            }
            if (origin === 7 && destination < origin) {
                $('.section7 *').addClass('after')
            }
            if (origin === 7 && destination > origin) {
                $('.section7 *').addClass('after')
            }
            if (destination === 7) {
                $('.section7 .arrow.left').hide()
            }
            if (destination === 8) {
                $('.section8 *').css('visibility', 'visible')
            }
            if (destination === 9) {
                setTimeout(function() {
                        $('.section8 *').css('visibility', 'hidden')
                    },
                    500)
            }
        },
        afterLoad: function(origin, destination, direction) {
            if (origin) {
                origin = origin.index + 1
            } else {
                origin = 1
            }
            if (destination) {
                destination = destination.index + 1
            } else {
                destination = 1
            }
            if (!mobile) {
                $('.navigation').show()
            }
            $('.progress-bar div').removeClass('active');
            $('.progress-bar div').eq(destination - 1).addClass('active');
            $navigationDot.removeClass('active');
            $navigationDot.eq(destination - 2).addClass('active');
            if (destination >= 6 || destination === 1) {
                $('#navigation .dot-container').addClass('hide');
                $navigationButton.removeClass('active');
                if (destination !== 1) {
                    $navigationButton.eq(destination - (destination === 9 ? 5 : 4)).addClass('active')
                } else {
                    $navigationButton.eq(0).addClass('active')
                }
            } else {
                $navigationButton.removeClass('active');
                $navigationButton.eq(1).addClass('active');
                $('#navigation .dot-container').removeClass('hide')
            }
            $('#navigation').removeClass('white');
            $('#navigation').removeClass('brand');
            $('.site-head .img').attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-02@2x.png');
            if (destination === 2 || destination === 4 || destination === 1 || destination === 7) {
                $('.mobile-menu').addClass('white')
            } else {
                $('.mobile-menu').removeClass('white')
            }
            if (destination === 2) {
                $('.section1-img-container').addClass('in-section1');
                setTimeout(function() {
                        $('#section2 video').animate({
                                opacity: 1
                            },
                            200);
                        if (!mobile) {
                            $('#section2 video')[0].play()
                        }
                    },
                    870);
                setTimeout(function() {
                        $('#section2 .video-container div').animate({
                                opacity: 1
                            },
                            200);
                        $('#section2 .video-container img').animate({
                                opacity: 1
                            },
                            200)
                    },
                    1070);
                setTimeout(function() {
                        var wave = bodymovin.loadAnimation({
                            container: $section1Wave[0],
                            renderer: 'svg',
                            loop: false,
                            autoplay: true,
                            path: '/static/json/01_wave_start.json'
                        });
                        wave.addEventListener('complete',
                            function() {
                                wave.destroy();
                                bodymovin.loadAnimation({
                                    container: $section1Wave[0],
                                    renderer: 'svg',
                                    loop: true,
                                    autoplay: true,
                                    path: '/static/json/01_wave_loop.json'
                                })
                            })
                    },
                    1270);
                if (!mobile) {
                    $('#section2 video')[0].addEventListener('playing',
                        function() {
                            $('#section2 .video-img').hide()
                        },
                        true)
                }
                $('.lang-out').removeClass('dark');
                $('.lang-out').addClass('light');
                if (!mobile) {
                    $('.section2 video')[0].play()
                }
                setTimeout(function() {
                        $('.section2 .video-img').hide();
                        $('.section2 #videoCanvas').css('visibility', 'visible')
                    },
                    30000)
            }
            if (destination === 3) {
                $('.lang-out').removeClass('light');
                $('.lang-out').addClass('dark');
                $('#rocket').fadeIn();
                if (!section2Loaded) {
                    section2Loaded = true;
                    setTimeout(function() {
                            $('#section3 .map').animate({
                                    'padding-top': '0'
                                },
                                400);
                            $('#section3 .map').animate({
                                    opacity: 1
                                },
                                600);
                            $('#section3 .map-gradient').addClass('shine')
                        },
                        300);
                    setTimeout(function() {
                            if (mobile) {
                                $('#section3 #title').removeClass('before')
                            } else {
                                $('#section3 #title').animate({
                                        'padding-top': '0',
                                        'opacity': 1
                                    },
                                    300)
                            }
                        },
                        700);
                    setTimeout(function() {
                            if (mobile) {
                                $('#section3 #description').removeClass('before')
                            } else {
                                $('#section3 #description').animate({
                                        'padding-top': '0',
                                        'opacity': 1
                                    },
                                    300)
                            }
                        },
                        900);
                    setTimeout(function() {
                            var wave = bodymovin.loadAnimation({
                                container: $('#rocket')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/02_rocket_start.json'
                            });
                            wave.addEventListener('complete',
                                function() {
                                    wave.destroy();
                                    bodymovin.loadAnimation({
                                        container: $('#rocket')[0],
                                        renderer: 'svg',
                                        loop: true,
                                        autoplay: true,
                                        path: '/static/json/02_rocket_loop.json'
                                    })
                                });
                            bodymovin.loadAnimation({
                                container: $('#section3 #cloud')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/02_cloud.json'
                            });
                            $('#section3 #cloud').animate({
                                    left: '3.56rem',
                                    opacity: 1
                                },
                                300)
                        },
                        1100)
                }
                setTimeout(function() {
                        $('.section3 .map-gradient').fadeIn()
                    },
                    1000)
            }
            if (destination === 4) {
                $('.lang-out').removeClass('dark');
                $('.lang-out').addClass('light');
                if (!section3Loaded) {
                    section3Loaded = true;
                    setTimeout(function() {
                            $('#section4 .photo').animate({
                                    'padding-top': '0',
                                    'opacity': 1
                                },
                                100);
                            $('#section4 .shadow').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section4 .word').animate({
                                    'padding-top': '0',
                                    'opacity': 1
                                },
                                200)
                        },
                        300)
                }
                setTimeout(function() {
                        if (!mobile) {
                            $('#navigation').addClass('white')
                        }
                    },
                    100)
            }
            if (destination === 5) {
                $('.lang-out').removeClass('light');
                $('.lang-out').addClass('dark');
                if (!section4Loaded) {
                    section4Loaded = true;
                    if (!mobile) {
                        setTimeout(function() {
                                $('.section5 img.beijing').removeClass('before')
                            },
                            200);
                        setTimeout(function() {
                                $('.section5 img.la').removeClass('before')
                            },
                            300)
                    } else {
                        $('.section5 .yellow-one').animate({
                                opacity: 1
                            },
                            300)
                    }
                    setTimeout(function() {
                            $('.section5 .title').removeClass('before');
                            if (mobile) {
                                $('.section5 .la').addClass('animate');
                                $('.section5 .beijing').addClass('animate')
                            }
                            $('.section5 .description').removeClass('before')
                        },
                        300);
                    setTimeout(function() {
                            $('.section5 .yellow-one').removeClass('before')
                        },
                        1500);
                    setTimeout(function() {
                            $('.section5 div.beijing').removeClass('before');
                            $('.section5 div.la').removeClass('before');
                            $('.section5 .yellow-two').removeClass('before');
                            $('.section5 .yellow-three').removeClass('before')
                        },
                        1700);
                    setTimeout(function() {
                            $('#section5 .planet_left').removeClass('before');
                            $('#section5 .planet_right').removeClass('before');
                            bodymovin.loadAnimation({
                                container: $('#section5 .planet_left')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/04_planet_left.json'
                            });
                            bodymovin.loadAnimation({
                                container: $('#section5 .planet_right')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/03_planet_right.json'
                            })
                        },
                        900)
                }
            }
            if (destination === 1) {
                $('.lang-out').removeClass('dark');
                $('.lang-out').addClass('light');
                if (!mobile) {
                    $('#navigation').addClass('brand');
                    $('#navigation').addClass('white')
                }
                $('#section1 .product').css('opacity', 1);
                $('.site-head .img').attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-03@2x.png');
                if (!section5Loaded) {
                    section5Loaded = true;
                    $('.section1 .carousel-container.monkey-content').click(move.bind(this, 'monkey'));
                    $('.section1 .carousel-container.holla-content').click(move.bind(this, 'holla'));
                    setTimeout(function() {
                            $('.section1 .product').removeClass('before');
                            bodymovin.loadAnimation({
                                container: $('#section1 .holla .logo')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/05_HOLLAlogo.json'
                            });
                            bodymovin.loadAnimation({
                                container: $('#section1 .monkey .logo')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/05_MonkeyLogo.json'
                            })
                        },
                        200);
                    if (!mobile) {
                        setTimeout(function() {
                                $('.section1 .product').addClass('out')
                            },
                            500);
                        setTimeout(function() {
                                $('.section1 .product').removeClass('out');
                                $('.section1 .product').addClass('in')
                            },
                            700);
                        setTimeout(function() {
                                $('.section1 .product').removeClass('in')
                            },
                            1000)
                    }
                    setTimeout(function() {
                            $('.section1 .product .title').removeClass('before');
                            $('.section1 .product .download').removeClass('before');
                            $('.pinpai').css('opacity', 1)
                        },
                        1300);
                    setTimeout(function() {
                            var wave = bodymovin.loadAnimation({
                                container: $('#section1 .spotlight-left')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/05_spotlight_start.json'
                            });
                            wave.addEventListener('complete',
                                function() {
                                    wave.destroy();
                                    bodymovin.loadAnimation({
                                        container: $('#section1 .spotlight-left')[0],
                                        renderer: 'svg',
                                        loop: true,
                                        autoplay: true,
                                        path: '/static/json/05_spotlight_loop.json'
                                    })
                                });
                            var wave1 = bodymovin.loadAnimation({
                                container: $('#section1 .spotlight-right')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/05_spotlight_start.json'
                            });
                            wave1.addEventListener('complete',
                                function() {
                                    wave1.destroy();
                                    bodymovin.loadAnimation({
                                        container: $('#section1 .spotlight-right')[0],
                                        renderer: 'svg',
                                        loop: true,
                                        autoplay: true,
                                        path: '/static/json/05_spotlight_loop.json'
                                    })
                                })
                        },
                        1300);
                    setTimeout(function() {
                            $('#section1 .pinpai').removeClass('before');
                            $('#section1 .mobile-download').removeClass('before')
                        },
                        2100);
                    bodymovin.loadAnimation({
                        container: $('#section1 .wave')[0],
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/static/json/06_HOLLAsea.json'
                    });
                    bodymovin.loadAnimation({
                        container: $('#section1 .monkey-banana')[0],
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/static/json/07_monkey&banana.json'
                    })
                }
                $('#section1 .holla .logo').click(function() {
                    if (mobile || $('#section1 .cover').css('display') === 'block') {
                        return
                    }
                    $.fn.fullpage.setAllowScrolling(false);
                    $('.lang-out').hide();
                    $('#section1 .cover').fadeIn();
                    $('#section1 .close').show();
                    $('#section1 .holla-content').show();
                    $('#section1 .pro').fadeOut();
                    $('.site-head .img').attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-02@2x.png');
                    $('#section1 .holla').css({
                        'left': '1.28rem',
                        'margin-top': '-3.2rem'
                    });
                    $('#section1 .holla .logo').css({
                        right: '.32rem'
                    });
                    $('#section1 .logo').addClass('no-hover');
                    $('#section1 .monkey').hide();
                    $('#navigation').removeClass('brand');
                    $('#navigation').removeClass('white');
                    $('#navigation').addClass('blur-7');
                    $('.site-head').addClass('blur-7');
                    $('#section1 .holla .title').attr('src', '/src/images/holl-atext-black@2x.png');
                    env[1].which = 'holla';
                    setTimeout(function() {
                            $('#section1  .logo').css({
                                left: '0',
                                right: '0'
                            })
                        },
                        330);
                    setTimeout(function() {
                        $('#section1 .holla-content.ink-container').addClass('normal');
                        $('#section1 .holla-content.ink-container').addClass('plus')
                    });
                    setTimeout(function() {
                            $('#section1 .holla-content .one').addClass('left');
                            $('#section1 .holla-content .one').animate({
                                    opacity: 1
                                },
                                200)
                        },
                        430);
                    setTimeout(function() {
                            $('#section1 .holla-content.ink-container').removeClass('plus')
                        },
                        630);
                    setTimeout(function() {
                            $('#section1 .holla-content .one').removeClass('left')
                        },
                        930);
                    setTimeout(function() {
                            $('#section1 .holla-content .two').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .holla-content .two').addClass('left')
                        },
                        500);
                    setTimeout(function() {
                            $('#section1 .holla-content .two').removeClass('left')
                        },
                        1000);
                    setTimeout(function() {
                            $('#section1 .holla-content .three').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .holla-content .three').addClass('left')
                        },
                        570);
                    setTimeout(function() {
                            $('#section1 .holla-content .three').removeClass('left')
                        },
                        1070);
                    setTimeout(function() {
                            $('#section1 .holla-content .four').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .holla-content .four').addClass('left')
                        },
                        640);
                    setTimeout(function() {
                            $('#section1 .holla-content .four').removeClass('left')
                        },
                        1140);
                    return false
                });
                $('#section1 .monkey .logo').click(function() {
                    if (mobile || $('#section1 .cover').css('display') === 'block') {
                        return
                    }
                    $.fn.fullpage.setAllowScrolling(false);
                    $('.lang-out').hide();
                    $('#section1 .cover').fadeIn();
                    $('#section1 .close').show();
                    $('#section1 .monkey-content').show();
                    $('#section1 .pro').fadeOut();
                    $('.site-head .img').attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-02@2x.png');
                    $('#section1 .monkey').css({
                        'right': '1.28rem',
                        'margin-top': '-3.2rem'
                    });
                    $('#section1 .monkey .logo').css({
                        left: '.32rem'
                    });
                    $('#section1 .logo').addClass('no-hover');
                    $('#section1 .holla').hide();
                    $('#navigation').removeClass('brand');
                    $('#navigation').removeClass('white');
                    $('#navigation').addClass('blur-7');
                    $('.site-head').addClass('blur-7');
                    $('#section1 .monkey .title').attr('src', '/src/images/monkeytext-black@2x.png');
                    env[1].which = 'monkey';
                    setTimeout(function() {
                            $('#section1  .logo').css({
                                left: '0',
                                right: '0'
                            })
                        },
                        330);
                    setTimeout(function() {
                            $('#section1 .monkey-content .one').addClass('left');
                            $('#section1 .monkey-content .one').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .monkey-content .word .title').addClass('word-left');
                            $('#section1 .monkey-content.hand').addClass('up')
                        },
                        430);
                    setTimeout(function() {
                            $('#section1 .monkey-content .word .description').addClass('word-left')
                        },
                        630);
                    setTimeout(function() {
                            $('#section1 .monkey-content .one').removeClass('left');
                            $('#section1 .monkey-content .word .title').addClass('true')
                        },
                        930);
                    setTimeout(function() {
                            $('#section1 .monkey-content .two').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .monkey-content .two').addClass('left')
                        },
                        500);
                    setTimeout(function() {
                            $('#section1 .monkey-content .two').removeClass('left')
                        },
                        1000);
                    setTimeout(function() {
                            $('#section1 .monkey-content .three').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .monkey-content .three').addClass('left')
                        },
                        570);
                    setTimeout(function() {
                            $('#section1 .monkey-content .three').removeClass('left')
                        },
                        1070);
                    setTimeout(function() {
                            $('#section1 .monkey-content .four').animate({
                                    opacity: 1
                                },
                                200);
                            $('#section1 .monkey-content .four').addClass('left')
                        },
                        640);
                    setTimeout(function() {
                            $('#section1 .monkey-content .four').removeClass('left');
                            $('#section1 .monkey-content .word .description').addClass('true')
                        },
                        1140);
                    return false
                });
                $('#section1 .close').click(function() {
                    $.fn.fullpage.setAllowScrolling(true);
                    $('.lang-out').show();
                    $('#section1 .cover').fadeOut();
                    $('#section1 .content').hide();
                    $('#section1 .pro').fadeIn();
                    $('#navigation').addClass('brand');
                    $('#navigation').addClass('white');
                    $('.site-head .img').attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-03@2x.png');
                    $('#section1 .monkey').css({
                        'right': '5.64rem',
                        'margin-top': '-2.8rem'
                    });
                    $('#section1 .holla').css({
                        'left': '5.64rem',
                        'margin-top': '-2.8rem'
                    });
                    $('#section1 .holla').show();
                    $('#section1 .monkey').show();
                    $('#navigation').removeClass('blur-7');
                    $('.site-head').removeClass('blur-7');
                    $('#section1 .monkey .title').attr('src', '/src/images/monkeytext@2x.png');
                    $('#section1 .holla .title').attr('src', '/src/images/holl-atext@2x.png');
                    $('#section1 .logo').removeClass('no-hover');
                    $('#section1 .holla-content.ink-container').removeClass('normal')
                })
            }
            if (destination === 6) {
                $('.lang-out').removeClass('dark');
                $('.lang-out').addClass('light');
                if (!section6Loaded) {
                    section6Loaded = true;
                    setTimeout(function() {
                            $('.section6 .container').removeClass('before')
                        },
                        500);
                    setTimeout(function() {
                            var wave6 = bodymovin.loadAnimation({
                                container: $('#section6 .bee')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/08_bee_start.json'
                            });
                            wave6.addEventListener('complete',
                                function() {
                                    wave6.destroy();
                                    bodymovin.loadAnimation({
                                        container: $('#section6 .bee')[0],
                                        renderer: 'svg',
                                        loop: true,
                                        autoplay: true,
                                        path: '/static/json/08_bee_loop.json'
                                    })
                                })
                        },
                        500);
                    setTimeout(function() {
                            bodymovin.loadAnimation({
                                container: $('#section6 .grass')[0],
                                renderer: 'svg',
                                loop: false,
                                autoplay: true,
                                path: '/static/json/08_grass.json'
                            });
                            $('.section6 .grass').removeClass('before');
                            $('.section6 .container').addClass('shadow')
                        },
                        600);
                    $('.section6 .column').click(function() {
                        $('.section6 .column').removeClass('no-hover');
                        if ( + $(this).children('.detail-container').css('opacity') === 1) {
                            $('.section6 .column').addClass('no-hover')
                        }
                    })
                }
            }
            if (destination === 7) {
                $('.section7 *').removeClass('after');
                $('.lang-out').removeClass('dark');
                $('.lang-out').addClass('light');
                if (!mobile) {
                    $('.section7 .arrow.right').fadeIn();
                    $('#navigation').addClass('brand');
                    $('#navigation').addClass('white')
                }
                $('.site-head .img').attr('src', '/src/images/' + (mobile ? 'mobile/': '') + 'holla-group-logo-03@2x.png');
                $('#section7 .news-container .swiper-wrapper').html(addNews(lang));
                initSwiper();
                $('#section7 .arrow.left').mouseover(function() {
                    mySwiper.slideTo(0);
                    $('#section7 .arrow.right').show();
                    $('#section7 .arrow.left').hide()
                });
                $('#section7 .arrow.right').mouseover(function() {
                    mySwiper.slideTo(3);
                    $('#section7 .arrow.left').show();
                    $('#section7 .arrow.right').hide()
                });
                if (!section7Loaded) {
                    section7Loaded = true;
                    setTimeout(function() {
                            if (mobile) {
                                bodymovin.loadAnimation({
                                    container: $('#section7 .line')[0],
                                    renderer: 'svg',
                                    loop: false,
                                    autoplay: true,
                                    path: '/static/json/line-mobile.json'
                                })
                            } else {
                                bodymovin.loadAnimation({
                                    container: $('#section7 .line')[0],
                                    renderer: 'svg',
                                    loop: false,
                                    autoplay: true,
                                    path: '/static/json/09_line.json'
                                })
                            }
                            setTimeout(function() {
                                    $('#section7 .news-container').removeClass('before')
                                },
                                800)
                        },
                        400);
                    setTimeout(function() {
                            bodymovin.loadAnimation({
                                container: $('#section7 .camera')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/09_camera.json'
                            });
                            $('#section7 .camera').removeClass('before')
                        },
                        1200)
                }
            }
            if (destination === 8) {
                $('.lang-out').removeClass('light');
                $('.lang-out').addClass('dark');
                if (!section8Loaded) {
                    section8Loaded = true;
                    setTimeout(function() {
                            $('#section8 .cooperate').removeClass('before');
                            $('#section8 .location').removeClass('before')
                        },
                        200);
                    setTimeout(function() {
                            $('#section8 .hr').removeClass('before')
                        },
                        400);
                    setTimeout(function() {
                            $('#section8 .mask').removeClass('before')
                        },
                        600);
                    setTimeout(function() {
                            bodymovin.loadAnimation({
                                container: $('#section8 .thunder')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/10_thunder.json'
                            });
                            bodymovin.loadAnimation({
                                container: $('#section8 .arrow')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/10_arrow.json'
                            });
                            bodymovin.loadAnimation({
                                container: $('#section8 .building')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/10_building.json'
                            });
                            $('#section8 .thunder').removeClass('before');
                            $('#section8 .arrow').removeClass('before');
                            $('#section8 .building').removeClass('before')
                        },
                        700)
                }
            }
            if (destination === 9) {
                $('.lang-out').removeClass('light');
                $('.lang-out').addClass('dark');
                if (!section9Loaded) {
                    section9Loaded = true;
                    setTimeout(function() {
                            $('#section9 .cooperate').removeClass('before');
                            $('#section9 .location').removeClass('before')
                        },
                        200);
                    setTimeout(function() {
                            $('#section9 .hr').removeClass('before')
                        },
                        400);
                    setTimeout(function() {
                            $('#section9 .mask').removeClass('before')
                        },
                        600);
                    setTimeout(function() {
                            bodymovin.loadAnimation({
                                container: $('#section9 .thunder')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/10_thunder.json'
                            });
                            bodymovin.loadAnimation({
                                container: $('#section9 .arrow')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/10_arrow.json'
                            });
                            bodymovin.loadAnimation({
                                container: $('#section9 .building')[0],
                                renderer: 'svg',
                                loop: true,
                                autoplay: true,
                                path: '/static/json/10_building.json'
                            });
                            $('#section9 .thunder').removeClass('before');
                            $('#section9 .arrow').removeClass('before');
                            $('#section9 .building').removeClass('before')
                        },
                        700)
                }
            }
        }
    });
    $.fn.fullpage.setKeyboardScrolling(false)
});