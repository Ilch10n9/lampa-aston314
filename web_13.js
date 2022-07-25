(function () {
    'use strict';
    var catalogs = [
        {
            title: "LIBVIO",
            link: "https://www.libvio.me",
            category: [{
                title: '电影',
                url: 'https://www.libvio.me/type/1.html'
              }, {
                title: '剧集',
                url: 'https://www.libvio.me/type/2.html'
              }, {
                title: '日韩剧',
                url: 'https://www.libvio.me/type/15.html'
              },{
                title: '国产剧',
                url: 'https://www.libvio.me/type/13.html'
              }, {
                title: '欧美剧',
                url: 'https://www.libvio.me/type/16.html'
              }, {
                title: '港台剧',
                url: 'https://www.libvio.me/type/14.html'
              }, {
                title: '动漫',
                url: 'https://www.libvio.me/type/4.html'
              }],
            list: {
                page: {
                    selector: ".hidden-xs"
                },
                videoscontainer: {
                    selector: ".stui-vodlist__box",
                    attrName: "",
                    filter: ""
                },
                title: {
                    selector: "a.stui-vodlist__thumb",
                    attrName: "title",
                    filter: ""
                },
                thumb: {
                    selector: "a.stui-vodlist__thumb",
                    attrName: "data-original",
                    filter: ""
                },
                link: {
                    selector: "a.stui-vodlist__thumb",
                    attrName: "href",
                    filter: ""
                }
            }
        },
        {
            title: "完美看看",
            link: "https://www.wanmeikk.me",
            category: [{
                title:"电影",
                url:"https://www.wanmeikk.me/category/1.html"
             },
             {
                title:"韩剧",
                url:"https://www.wanmeikk.me/category/3.html"
             },
             {
                title:"国产剧",
                url:"https://www.wanmeikk.me/category/5.html"
             },
             {
                title:"欧美剧",
                url:"https://www.wanmeikk.me/category/2.html"
             },
             {
                title:"日剧",
                url:"https://www.wanmeikk.me/category/4.html"
             },
             {
                title:"动漫",
                url:"https://www.wanmeikk.me/category/6.html"
             },
             {
                title:"综艺",
                url:"https://www.wanmeikk.me/category/7.html"
             }],
             list: {
                 page: {
                     selector: ".hidden-xs"
                 },
                 videoscontainer: {
                     selector: ".stui-vodlist__box",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "title",
                     filter: ""
                 },
                 thumb: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "在线之家",
            link: "https://www.zxzj.vip",
            category: [{
                title:"电影",
                url:"https://zxzj.vip/list/1.html"
             },
             {
                title:"美剧",
                url:"https://zxzj.vip/list/2.html"
             },
             {
                title:"韩剧",
                url:"https://zxzj.vip/list/3.html"
             },
             {
                title:"日剧",
                url:"https://zxzj.vip/list/4.html"
             },
             {
                title:"泰剧",
                url:"https://zxzj.vip/list/5.html"
             },
             {
                title:"动漫",
                url:"https://zxzj.vip/list/6.html"
             }],
             list: {
                 page: {
                     selector: ".hidden-xs"
                 },
                 videoscontainer: {
                     selector: ".stui-vodlist__box",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "title",
                     filter: ""
                 },
                 thumb: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "秋霞电影",
            link: "https://www.7xiady.cc",
            category: [{
                title:"电影",
                url:"https://www.7xiady.cc/type/dianying"
             },
             {
                title:"连续剧",
                url:"https://www.7xiady.cc/type/lianxuju"
             },
             {
                title:"动漫",
                url:"https://www.7xiady.cc/type/dongman"
             },
             {
                title:"综艺",
                url:"https://www.7xiady.cc/type/zongyi"
             }],
             list: {
                 page: {
                     selector: ".hidden-xs"
                 },
                 videoscontainer: {
                     selector: "li.stui-vodlist__item",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "title",
                     filter: ""
                 },
                 thumb: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "a.stui-vodlist__thumb",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "欧乐影院",
            link: "https://www.olevod.com",
            category: [{
                title:"电影",
                url:"https://www.olevod.com/index.php/vod/show/id/1.html"
             },
             {
                title:"电视剧",
                url:"https://www.olevod.com/index.php/vod/show/id/2.html"
             },
             {
                title:"国产剧",
                url:"https://olevod.com/index.php/vod/show/id/202.html"
             },
             {
                title:"日韩剧",
                url:"https://www.olevod.com/index.php/vod/show/id/204.html"
             },
             {
                title:"欧美剧",
                url:"https://www.olevod.com/index.php/vod/show/id/201.html"
             },
             {
                title:"港台剧",
                url:"https://www.olevod.com/index.php/vod/show/id/203.html"
             },
             {
                title:"综艺",
                url:"https://www.olevod.com/index.php/vod/show/id/3.html"
             },
             {
                title:"动漫",
                url:"https://www.olevod.com/index.php/vod/show/id/4.html"
             }],
             list: {
                 page: {
                     selector: ".hidden_xs"
                 },
                 videoscontainer: {
                     selector: "ul.vodlist li",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "a",
                     attrName: "title",
                     filter: ""
                 },
                 thumb: {
                     selector: "a",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "a",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "厂长资源",
            link: "https://www.czspp.com",
            category: [{
                title:"电影",
                url:"https://www.czspp.com/zuixindianying"
             },
             {
                title:"电视剧",
                url:"https://www.czspp.com/dsj"
             },
             {
                title:"美剧",
                url:"https://www.czspp.com/meijutt"
             },
             {
                title:"韩剧",
                url:"https://www.czspp.com/hanjutv"
             },
             {
                title:"国产剧",
                url:"https://www.czspp.com/gcj"
             },
             {
                title:"动漫",
                url:"https://www.czspp.com/dm"
             },
             {
                title:"番剧",
                url:"https://www.czspp.com/fanju"
             },
             {
                title:"豆瓣电影Top250",
                url:"https://www.czspp.com/gaofenyingshi"
             }],
             list: {
                 page: {
                     selector: ".pagenavi_txt"
                 },
                 videoscontainer: {
                     selector: "div.bt_img.mi_ne_kd.mrb > ul > li > a",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "img",
                     attrName: "alt",
                     filter: ""
                 },
                 thumb: {
                     selector: "img",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "COKEMV影视",
            link: "https://cokemv.me",
            category: [{
                title:"电影",
                url:"https://cokemv.me/vodshow/5-----------.html"
             },
             {
                title:"电视剧",
                url:"https://cokemv.me/vodshow/2-----------.html"
             },
             {
                title:"动漫",
                url:"https://cokemv.me/vodshow/4-----------.html"
             },
             {
                title:"综艺",
                url:"https://cokemv.me/vodshow/3-----------.html"
             }],
             list: {
                 page: {
                     selector: "#page"
                 },
                 videoscontainer: {
                     selector: "div.module-items.module-poster-items-base > a",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "img.lazy.lazyload",
                     attrName: "alt",
                     filter: ""
                 },
                 thumb: {
                     selector: "img.lazy.lazyload",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "乐猪TV",
            link: "http://www.lezhutv.com",
            category: [{
                title:"电影",
                url:"http://www.lezhutv.com/type/1-1.html"
             },
             {
                title:"连续剧",
                url:"http://www.lezhutv.com/type/2-1.html"
             },
             {
                title:"韩剧",
                url:"http://www.lezhutv.com/type/14-1.html"
             },
             {
                title:"美剧",
                url:"http://www.lezhutv.com/type/15-1.html"
             },
             {
                title:"动漫",
                url:"http://www.lezhutv.com/type/4-1.html"
             },
             {
                title:"综艺",
                url:"http://www.lezhutv.com/type/3-1.html"
             }],
             list: {
                 page: {
                     selector: ".menu"
                 },
                 videoscontainer: {
                     selector: "li.vbox",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "a",
                     attrName: "title",
                     filter: ""
                 },
                 thumb: {
                     selector: "a",
                     attrName: "data-original",
                     filter: ""
                 },
                 link: {
                     selector: "a",
                     attrName: "href",
                     filter: ""
                 }
             }
        },
        {
            title: "Auete影视",
            link: "https://auete.com",
            category: [{
                title:"电影",
                url:"https://auete.com/Movie/index.html"
             },
             {
                title:"电视剧",
                url:"https://auete.com/Tv/index.html"
             },
             {
                title:"综艺",
                url:"https://auete.com/Zy/index.html"
             },
             {
                title:"动漫",
                url:"https://auete.com/Dm/index.html"
             },
             {
                title:"其他",
                url:"https://auete.com/qita/index.html"
             }],
             list: {
                 page: {
                     selector: ".page-item"
                 },
                 videoscontainer: {
                     selector: "ul.threadlist > li.trans_3",
                     attrName: "",
                     filter: ""
                 },
                 title: {
                     selector: "img",
                     attrName: "alt",
                     filter: ""
                 },
                 thumb: {
                     selector: "img",
                     attrName: "src",
                     filter: ""
                 },
                 link: {
                     selector: "a",
                     attrName: "href",
                     filter: ""
                 }
             }
        }
    ];
    function collection(object) {
        var network = new Lampa.Reguest();
        var scroll = new Lampa.Scroll({
            mask: true,
            over: true,
            step: 250
        });

        //console.log(catalogs[0].category[0])
        var items = [];
        var html = $('<div></div>');
        var body = $('<div class="category-full"></div>');
        //var cors = object.source == 'rezka' ? 'https://cors.eu.org/' : 'http://corsanywhere.herokuapp.com/';
        var cors = '';
        var info;
        var last;
        var waitload = false;
        var relises = [];
        var doubanitem = [];
        var total_pages;
        this.create = function () {
            var _this = this;
            // console.log(object.page);
            //console.log(object.cards);
            if ((object.page == 1) || object.cards || (!object.card && !Lampa.Storage.field('light_version') && object.card_cat)) {
                this.activity.loader(true);
                network.silent(cors + object.url, function (str) {
                    var data = _this.card(str);
                    _this.build(data);
                }, function (a, c) {
                    Lampa.Noty.show(network.errorDecode(a, c));
                }, false, {
                    dataType: 'text'
                });
            } else _this.build(object.data);
            return this.render();
        };
        this.next = function (page) {
            var _this2 = this;
            if (total_pages == 0) waitload = true;
            if (waitload) return;
            waitload = true;
            object.page++;
            //console.log(object.page);
            network.clear();
            network.timeout(1000 * 40);
            if (typeof page == 'undefined') return;
            if (page.indexOf('undefined') != -1) return;
            //console.log(page);
            //var page1 = page.match(new RegExp('-([0-9])\.', ''))[0];
            //console.log(page1[0]);
            //page = page.replace(page.match(/-(\d+)/)[0],'-'+ object.page)
            //console.log(page.match(/[0-9]+(?=[^0-9]*$)(.+)/))
            //var ext = page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[1] ? page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[1] : '';
            page = page.replace(page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[0],'') + object.page + (page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[1] ? page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[1] : '');
            //console.log(page);
            network.silent(cors + page, function (result) {
                var data = _this2.card(result);
                object.data = data;
                _this2.append(data);
                if (data.card.length) waitload = false;
                Lampa.Controller.toggle('content');
                _this2.activity.loader(false);
            }, function (a, c) {
                Lampa.Noty.show(network.errorDecode(a, c));
            }, false, {
                dataType: 'text'
            });
        };
        this.append = function (data) {
            var _this2 = this;
            data.card.forEach(function (element) {
                var card = Lampa.Template.get('card', {
                    title: element.title_org,
                    release_year: object.cards || !object.card_cat ? element.year : element.quantity
                });
                
                //card.addClass(object.source == 'filmix' || !object.card_cat || object.cards ? 'card--category' : 'card--collection');
                card.addClass('card--category');
                // card.find('.info').css({
                //     'height': '5em',
                // });
                
                if (object.card) {
                    card.find('.card__age').text('');
                }
                var img = card.find('.card__img')[0];
                img.onload = function () {
                    card.addClass('card--loaded');
                };
                img.onerror = function (e) {
                    img.src = './img/img_broken.svg';
                };
                //var picture = Lampa.Storage.field('proxy_other') === false ? element.img : Lampa.Utils.protocol() + 'proxy.cub.watch/img/' + element.img;
                var picture = element.img;
                img.src = picture;
                if (element.update){
                    card.find('.card__view').append('<div class="card__quality"></div>');
                    card.find('.card__quality').text(element.update);
                };
                if (element.score){
                    card.find('.card__view').append('<div class="card__type"></div>');
                    card.find('.card__type').text(element.score);
                };
                //Lampa.Background.change(element.img);
                //Lampa.Background.immediately(element.img);
                card.on('hover:focus', function () {
                    last = card[0];
                    scroll.update(card, true);
                    if (!Lampa.Storage.field('light_version')) {
                        var maxrow = Math.ceil(items.length / 7) - 1;
                        if (Math.ceil(items.indexOf(card) / 7) >= maxrow) _this2.next(data.page);
                    };
                    info.find(".info__title-original").text(element.title);
                    if (element.img) Lampa.Background.change(element.img);
                    if (Lampa.Helper) Lampa.Helper.show('tmdb_detail5', '长按住 (ОК) 键查看详情', card);
                });
                card.on('hover:long', function () {
                    Lampa.Modal.open({
                        title: '',
                        html: Lampa.Template.get('modal_loading'),
                        size: 'small',
                        mask: true,
                        onBack: function onBack() {
                            Modal.close();
                            Api.clear();
                            Controller.toggle('content');
                        }
                    });

                    //var douban_cover=element.img.replace(/(.*\/)*([^.]+).*/ig,"$2");
                    //_this2.find_douban('https://movie.douban.com/j/subject_suggest?q=' + element.title_org, element.title_org);

                    Lampa.Api.search({
                        //query: encodeURIComponent((doubanitem.sub_title || element.title))
                        query: encodeURIComponent(element.title_org.replace(/第(.+)季/, ''))
                    }, function (find) {
                        Lampa.Modal.close();
                        //var finded = _this2.finds(find, (doubanitem || element));
                        var finded = _this2.finds(find,  element);
                        if (finded) {
                            Lampa.Activity.push({
                                url: '',
                                component: 'full',
                                id: finded.id,
                                method: finded.name ? 'tv' : 'movie',
                                card: finded
                            });
                        } else {
                            Lampa.Noty.show('在TMDB中找不到影片信息。');
                            Lampa.Controller.toggle('content');
                        }
                    }, function () {
                        Lampa.Modal.close();
                        Lampa.Noty.show('在TMDB中找不到影片信息。');
                        Lampa.Controller.toggle('content');
                    });
				});
                card.on('hover:enter', function (target, card_data) {
                        Lampa.Activity.push({
                            url: '',
                            title: '在线观看',
                            component: 'online_mod',
                            search: element.title,
                            search_one: element.title,
                            search_two: element.title,
                            movie: element,
                            page: 1
                        });
                    
                });
                body.append(card);
                items.push(card);
            });
        };
        this.build = function (data) {
            var _this2 = this;
            Lampa.Template.add('button_category', "<div class=\"full-start__button selector view--category\"><svg style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"info\"/><g id=\"icons\"><g id=\"menu\"><path d=\"M20,10H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2C22,10.9,21.1,10,20,10z\" fill=\"currentColor\"/><path d=\"M4,8h12c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6C2,7.1,2.9,8,4,8z\" fill=\"currentColor\"/><path d=\"M16,16H4c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2C18,16.9,17.1,16,16,16z\" fill=\"currentColor\"/></g></g></svg>   <span>视频网站</span>\n    </div>");
			Lampa.Template.add('info_web', '<div class="info layer--width" style="height:5em"><div class="info__left"><div class="info__title"></div><div class="info__title-original"></div><div class="info__create"></div></div><div class="info__right">  <div id="web_filtr"></div></div></div>');
			var btn = Lampa.Template.get('button_category');
			info = Lampa.Template.get('info_web');
            info.find('#web_filtr').append(btn);
            info.find('.view--category').on('hover:enter hover:click', function () {
				_this2.selectGroup();
			});
            if (data.card.length) {
                html.append(info.append());
                scroll.minus();
                html.append(scroll.render());
                this.append(data);
                if (Lampa.Storage.field('light_version')) this.more(data);
                scroll.append(body);
                this.activity.loader(false);
                this.activity.toggle();
            } else {
                html.append(scroll.render());
                this.empty();
            }
        };
        this.selectGroup = function () {
            Lampa.Select.show({
                title: '视频网站',
                items: catalogs,
                onSelect: function onSelect(a) {
                    //console.log(a)
                    Lampa.Storage.set('online_web_balanser', a.title);
                    Lampa.Activity.push({
                        //	url: cors + a.url,
                        url: a.category[0].url,
                        title: a.title+' - '+a.category[0].title,
                        component: 'mod_web',
                        page: 1
                    });
                },
                onBack: function onBack() {
                    Lampa.Controller.toggle('content');
                }
            });
        };
        this.empty = function () {
            var empty = new Lampa.Empty();
            scroll.append(empty.render());
            this.start = empty.start;
            this.activity.loader(false);
            this.activity.toggle();
        };
        this.more = function (data) {
            var _this = this;
            var more = $('<div class="category-full__more selector"><span>显示更多</span></div>');
            more.on(!Lampa.Platform.get() ? 'hover:enter' : 'hover:focus', function (e) {
                Lampa.Controller.collectionFocus(last || false, scroll.render());
                var next = Lampa.Arrays.clone(object);
                if (data.total_pages == 0) {
                    more.remove();
                    return;
                }
                network.clear();
                network.timeout(1000 * 20);
                var page = data.page;
                var pagenum =object.page+1;
                page = page.replace(page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[0],'') + pagenum + (page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[1] ? page.match(/[0-9]+(?=[^0-9]*$)(.*)/)[1] : '');
                network.silent(cors + page, function (result) {
                    var card = _this.card(result);
                    next.data = card;
                    if (object.cards) next.cards = false;
                    delete next.activity;
                    next.page++;
                    if (card.card.length == 0) more.remove();
                    else Lampa.Activity.push(next);
                }, function (a, c) {
                    Lampa.Noty.show(network.errorDecode(a, c));
                }, false, {
                    dataType: 'text'
                });
            });
            body.append(more);
        };  
        this.card = function (str) {
            var balanser = Lampa.Storage.get('online_web_balanser');
            
            var catalogs1 = catalogs.filter(function(fp) {
                return fp.title === balanser
            });
            
            //console.log(catalogs1[0].list);
            // console.log(catalogs1[0].list.link);
            // console.log(catalogs1[0].list.thumb);
            // console.log(catalogs1[0].list.title);
            //console.log(catalogs1[0].list.videoscontainer.selector);
            //console.log(catalogs1[0].list.page);

            var v = catalogs1[0].list.videoscontainer.selector;
            var t = catalogs1[0].list.title.selector ? catalogs1[0].list.title.selector : v;
            var th = catalogs1[0].list.thumb.selector ? catalogs1[0].list.thumb.selector : v;
            var l = catalogs1[0].list.link.selector ? catalogs1[0].list.link.selector : v;
            var p = catalogs1[0].list.page.selector;
            //console.log(t,th,l);

            var card = [];
            var page;
            str = str.replace(/\n/g, '');
                var h =  $(v, str);
                //console.log(h)
                total_pages = $(p, str).find('a').length;
                var host = object.url.indexOf('http') == -1 ? '' : object.url.match(/(http|https):\/\/(www.)?(\w+(\.)?)+/)[0];
                //console.log($(p, str).find('a').last().attr('href')) :last-child
                page = $(p, str).find('a').last().attr('href').indexOf('http') == -1 ? host+$(p, str).find('a').last().attr('href') : $(p, str).find('a').last().attr('href');
                //console.log(page)
                $(h).each(function (i, html) {
                    card.push({
                        title: catalogs1[0].list.title.attrName =='text' ? $(t, html).text().replace(/( 第.+?季)/,'') : $(t, html).attr(catalogs1[0].list.title.attrName).replace(/( 第.+?季)/,''),
                        original_title: '',
                        title_org: catalogs1[0].list.title.attrName =='text' ? $(t, html).text() : $(t, html).attr(catalogs1[0].list.title.attrName),
                        url: catalogs1[0].list.link.attrName =='text' ? host+$(l, html).text() : host+$(l, html).attr(catalogs1[0].list.link.attrName),
                        img: catalogs1[0].list.thumb.attrName =='text' ? ($(th, html).text().indexOf('http') == -1 ? host+$(th, html).text() : $(th, html).text()) : ($(th, html).attr(catalogs1[0].list.thumb.attrName).indexOf('http') == -1 ? host+$(th, html).attr(catalogs1[0].list.thumb.attrName) : $(th, html).attr(catalogs1[0].list.thumb.attrName)),
                        quantity: ' ',
                        year: '',
                        update: $('span.pic-text', html).text().indexOf('/' != -1) ? $('span.pic-text', html).text().split('/')[0].replace('已完结','') : $('span.pic-text', html).text().replace('已完结',''),
                        score: $('span.pic-tag', html).text()
                    });
                });           
            return {
                card: card,
                page: page,
                total_pages: total_pages
            };
        };
        this.finds = function(find) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var finded;
            //console.log(params)
            var filtred = function filtred(items) {
            //console.log(items)
            //   for (var i = 0; i < items.length; i++) {
            //     var item = items[i];
                
            //     if (params.sub_title == item.original_title || params.title == item.name || params.original_title == item.name) {
            //       finded = item;
            //       break;
            //     }
            //   }
            finded = items.filter(function(fp) {
                //return (fp.original_name === params.sub_title || fp.title === params.title  || fp.name === params.title || params.title.indexOf(fp.title) !==-1)
                return ((fp.original_title || fp.original_name) == params.sub_title || (fp.title || fp.name) == params.title || params.title.indexOf((fp.title || fp.name)) !==-1)
                //return (((fp.original_title || fp.original_name) === params.sub_title || (fp.title || fp.name) === params.title)&& parseInt(params.year) == (fp.first_air_date || fp.release_date).split('-').shift() )
            });
            };
            
            if (params.title_org){
                if (find.movie && find.movie.results.length) filtred(find.movie.results);
                if (find.tv && find.tv.results.length && !finded) filtred(find.tv.results);
            }else{
                if (params.episode){
                    if (find.tv && find.tv.results.length && !finded) filtred(find.tv.results);
                }else{

                    if (find.movie && find.movie.results.length) filtred(find.movie.results);
                };
            }
            doubanitem =[];
            return finded ? finded[0] : finded;
        };
        this.finds1 = function (element, find) {
            var finded;
            var filtred = function filtred(items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if ((element.title_org == (item.original_title || item.original_name) || element.title == (item.title || item.name)) && parseInt(element.year) == (item.first_air_date || item.release_date).split('-').shift()) {
                        finded = item;
                        break;
                    }
                }
            };
            if (find.movie && find.movie.results.length) filtred(find.movie.results);
            if (find.tv && find.tv.results.length && !finded) filtred(find.tv.results);
            return finded;
        };
        this.find_douban = function(url,id) {
            network.clear();
            network.timeout(10000);
            network.silent(url, function(json) {
                parse_douban(json,id);
            }, function(a, c) {
                this.empty(network.errorDecode(a, c));
            }, false, {
                dataType: 'text'
            });
        };
        function parse_douban(json,id) {
            // var sortjson = JSON.parse(json).sort(function(a, b){
            //     return b.year - a.year;
            // });
            // console.log(sortjson)
            var queryData = JSON.parse(json).filter(function(fp) {
                return fp.title === id
                //return fp.img.indexOf(id) !==-1
            });
            var json;
            try {
                json = queryData;
            } catch (e) {}

            if (json) {
                doubanitem = json[0];
                // filter();
                // append(filtred());
                //console.log(doubanitem);
            } else
                this.empty('没有找到 (' + select_title + ') 相关影片');
        };
        this.start = function () {
            var _this = this;
            Lampa.Controller.add('content', {
                toggle: function toggle() {
                    Lampa.Controller.collectionSet(scroll.render());
                    Lampa.Controller.collectionFocus(last || false, scroll.render());
                },
                left: function left() {
                    if (Navigator.canmove('left')) Navigator.move('left');
                    else Lampa.Controller.toggle('menu');
                },
                right: function right() {
                    // Navigator.move('right');
                    if (Navigator.canmove('right')) Navigator.move('right');
					else _this.selectGroup();
                },
                up: function up() {
                    // if (Navigator.canmove('up')) Navigator.move('up');
                    // else Lampa.Controller.toggle('head');
                    if (Navigator.canmove('up')) {
						Navigator.move('up');
					} else {
					 	if (!info.find('.view--category').hasClass('focus')) {
							if (!info.find('.view--category').hasClass('focus')) {
								Lampa.Controller.collectionSet(info);
					  		Navigator.move('right')
							}
						} else Lampa.Controller.toggle('head');
					}
                },
                down: function down() {
                    // if (Navigator.canmove('down')) Navigator.move('down');
                    if (Navigator.canmove('down')) Navigator.move('down');
					else if (info.find('.view--category').hasClass('focus')) {
						 Lampa.Controller.toggle('content');
					} 
                },
                back: function back() {
                    Lampa.Activity.backward();
                }
            });
            Lampa.Controller.toggle('content');
        };
        this.pause = function () {};
        this.stop = function () {};
        this.render = function () {
            return html;
        };
        this.destroy = function () {
            network.clear();
            Lampa.Arrays.destroy(items);
            scroll.destroy();
            html.remove();
            body.remove();
            network = null;
            items = null;
            html = null;
            body = null;
            info = null;
        };
    }

    function startWEB() {
      window.plugin_web_ready = true;
      Lampa.Component.add('mod_web', collection);
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          var ico = '<svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="white"/></svg>';
          var menu_item = $('<li class="menu__item selector focus" data-action="doweb"><div class="menu__ico">' + ico + '</div><div class="menu__text">网站</div></li>');
          menu_item.on('hover:enter', function () {
            
            if (Lampa.Storage.get('online_web_balanser') == ''){
                Lampa.Storage.set('online_web_balanser', catalogs[0].title);
            }
            
            var balanser = Lampa.Storage.get('online_web_balanser');
            
            var catalogs1 = catalogs.filter(function(fp) {
                return fp.title === balanser
            });
            
            Lampa.Select.show({
              title: catalogs1[0].title,
              items: catalogs1[0].category,
              onSelect: function onSelect(a) {
                Lampa.Activity.push({
                  url: a.url,
                  title: catalogs1[0].title+' - '+a.title,
                  component: 'mod_web',
                  page: 1
                });
              },
              onBack: function onBack() {
                Lampa.Controller.toggle('menu');
              }
            });
          });
          $('.menu .menu__list').eq(0).append(menu_item);
        }
      });
    }

    if (!window.plugin_web_ready) startWEB();

})();
