(function () {
    'use strict';

    function component(object) {
      var network = new Lampa.Reguest();
      var scroll = new Lampa.Scroll({
        mask: true,
        over: true
      });
      var files = new Lampa.Files(object);
      var filter = new Lampa.Filter(object);
      var results = [];
      var filtred = [];
      var extract = {};
      var token = '';
      var last;
      var last_filter;
      var filter_items = {
        season: [],
        voice: [],
        voice_info: []
      };
      var filter_translate = {
        season: '季',
        voice: '翻译'
      };
      scroll.minus();
      scroll.body().addClass('torrent-list');
      var listlink = {
        data:[{
          media:[],
          "iframe_src": "",
          translations:[]
        }]
      };
      var extract_rule = {
        "rule": [
          {
          name : 'LIBVIO',
          websitelink : 'https://www.libvio.me',
          listlink : true,
          search_url : 'https://www.libvio.me/index.php/ajax/suggest?mid=1&wd=#msearchword&limit=1',
          search_json : true,
          scVodNode : 'json:list',
          scVodName : 'name',
          scVodId : 'id',
          search_list_reg : '"list":(.+?),"url":',
          search_list_have_string : 'id',
          search_list_find_reg : 'id:(.+?),en',
          title_selector : '', 
          title_selector_value : '',
          link_selector : '',
          link_folder : 'play',
          detail_url_reg : '<div class="play-content">(.*?)</div>',
          video_link_reg : '<a href="(.+?)">(.+?)<\/a>',
          get_link_reg : 'url\":\"([^\"]+)\",\"url_next\"',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : 'https://sh-data-s01.chinaeast2.cloudapp.chinacloudapi.cn/xt.php',
          referer : 'https://www.libvio.me/',
          parsejs : '"from":"(.*?)"'
        },
        {
          name : '秋霞电影',
          websitelink : 'https://www.7xiady.cc',
          listlink : true,
          search_url : 'https://www.7xiady.cc/index.php/ajax/suggest?mid=1&wd=#msearchword&limit=1',
          search_json : true,
          scVodNode : '',
          scVodName : '',
          scVodId : '',
          search_list_reg : '"list":(.+?),"url":',
          search_list_have_string : 'id',
          search_list_find_reg : 'id:(.+?),en',
          title_selector : '', 
          title_selector_value : '',
          link_selector : '',
          link_folder : 'play',
          detail_url_reg : '<div class="stui-pannel_bd col-pd clearfix">(.*?)<\/div>',
          video_link_reg : '<a href="(.+?)">(.+?)<\/a>',
          get_link_reg : 'url\":\"(http[^\"]+)',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : '9亿看看',
          websitelink : 'https://www.9egood.com',
          listlink : true,
          search_url : 'https://www.9egood.com/index.php/ajax/suggest?mid=1&wd=#msearchword&limit=1',
          search_json : true,
          scVodNode : 'json:list',
          scVodName : 'name',
          scVodId : 'id',
          search_list_reg : '"list":(.+?),"url":',
          search_list_have_string : 'id',
          search_list_find_reg : 'id:(.+?),en',
          title_selector : '', 
          title_selector_value : '',
          link_selector : '',
          link_folder : 'vodplay',
          detail_url_reg : '<div id="[\\s\\S]*?" class="tab-pane fade in active clearfix">(.*?)<\/div>',
          video_link_reg : '<a class="[\\s\\S]*?" href="(.+?)">(.+?)<\/a>',
          get_link_reg : 'url\":\"([^\"]+)\",\"url_next\"',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : 'AUETE影视',
          websitelink : 'https://auete.com',
          listlink : true,
          search_url : 'https://auete.com/search.php?searchword=#msearchword',
          search_json : false,
          scVodNode : '',
          scVodName : '',
          scVodId : '',
          search_list_reg : '<div class="card-body">([\\s\\S]*?)<\/div>',
          search_list_have_string : 'media-body',
          search_list_find_reg : '<div class="subject break-all">(.*?)<\/div>',
          title_selector : '.text-danger', 
          title_selector_value : 'text',
          link_selector : 'a',
          link_folder : '',
          detail_url_reg : '<div id="player_list" class="clearfix mt-3">(.*?)<\/div>',
          video_link_reg : '<a class="btn btn-orange" title="[\\s\\S]*?" href="(.+?)" target="_self">(.+?)</a>',
          get_link_reg : 'now=base64decode\\(\"([^\"]+)',
          need_base64decode : true,
          prefix_video : 'https://auete.com',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : '在线之家',
          websitelink : 'https://www.zxzjtv.com',
          listlink : true,
          search_url : 'https://www.zxzjtv.com/vodsearch/#msearchword----------1---.html',
          search_json : false,
          scVodNode : '',
          scVodName : '',
          scVodId : '',
          search_list_reg : '<ul class="stui-vodlist clearfix">([\\s\\S]*?)<\/ul>',
          search_list_have_string : 'stui-vodlist__thumb',
          search_list_find_reg : '<div class="stui-vodlist__box">(.*?)<\/div>',
          title_selector : '.stui-vodlist__thumb', 
          title_selector_value : 'title',
          link_selector : '.stui-vodlist__thumb',
          link_folder : '',
          detail_url_reg : '<div class="stui-vodlist__head">(.+?)盘<\/h3>',
          video_link_reg : '<a href="(.+?)">(.+?)<\/a>',
          get_link_reg : 'url\":\"(http[^\"]+)',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : '欧乐影视',
          websitelink : 'http://proxy.cub.watch/cdn/https://olevod.com',
          listlink : true,
          search_url : 'http://proxy.cub.watch/cdn/https://olevod.com/index.php/ajax/suggest?mid=1&wd=#msearchword&limit=1',
          search_json : true,
          scVodNode : 'json:list',
          scVodName : 'name',
          scVodId : 'id',
          search_list_reg : '"list":(.+?),"url":',
          search_list_have_string : 'id',
          search_list_find_reg : 'id:(.+?),en',
          title_selector : '', 
          title_selector_value : '',
          link_selector : '',
          link_folder : 'index.php/vod/detail/id',
          detail_url_reg : '<ul class="content_playlist clearfix">(.+?)<\/ul>',
          video_link_reg : '<a [\\s\\S]*? href="(.+?)" [\\s\\S]*?">(.+?)<\/a>',
          get_link_reg : 'url\":\"(http[^\"]+)',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : '爱迪影视',
          websitelink : 'https://aidi.tv',
          listlink : false,
          search_url : 'https://aidi.tv/vsearch/-------------.html?wd=#msearchword',
          search_json : false,
          scVodNode : '',
          scVodName : '',
          scVodId : '',
          search_list_reg : '<ul class="vodlist clearfix">([\\s\\S]*?)<\/ul>',
          search_list_have_string : 'vodlist_thumb',
          search_list_find_reg : '<div class="searchlist_img">(.*?)<\/div>',
          title_selector : '.vodlist_thumb', 
          title_selector_value : 'title',
          link_selector : '.vodlist_thumb',
          link_folder : '',
          detail_url_reg : '<div id="playlistbox" class="playlist_notfull">(.*?)<\/div>',
          video_link_reg : '<a href="(.+?)" target="_blank">(.+?)<\/a>',
          get_link_reg : 'url\":\"(http[^\"]+)',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : '555电影',
          websitelink : 'https://www.o8tv.com',
          listlink : true,
          search_url : 'https://www.o8tv.com/index.php/ajax/suggest?mid=1&wd=#msearchword&limit=1',
          search_json : true,
          scVodNode : 'json:list',
          scVodName : 'name',
          scVodId : 'id',
          search_list_reg : '"list":(.+?),"url":',
          search_list_have_string : 'id',
          search_list_find_reg : 'id:(.+?),en',
          title_selector : '', 
          title_selector_value : '',
          link_selector : '',
          link_folder : 'vodplay',
          detail_url_reg : '<div id="player1" class="tab-pane fade in active clearfix">(.*?)<\/div>',
          video_link_reg : '<a class="[\\s\\S]*?" href="(.+?)">([\\s\\S]*?)<\/a>',
          get_link_reg : 'url\":\"([^\"]+)\",\"url_next\"',
          need_base64decode : true,
          prefix_video : '',
          dplayerurl : '',
          referer : '',
          parsejs : ''
        },
        {
          name : 'LIBVIO',
          websitelink : 'https://www.libvio.com',
          listlink : true,
          search_url : 'https://www.libvio.com/search/-------------.html?wd=#msearchword',
          search_json : false,
          scVodNode : 'json:list',
          scVodName : 'name',
          scVodId : 'id',
          search_list_reg : '<ul class="stui-vodlist clearfix">([\\s\\S]*?)<\/ul>',
          search_list_have_string : 'stui-vodlist__thumb',
          search_list_find_reg : '<div class="stui-vodlist__box">(.*?)<\/div>',
          title_selector : '.stui-vodlist__thumb', 
          title_selector_value : 'title',
          link_selector : '.stui-vodlist__thumb',
          link_folder : 'play',
          detail_url_reg : '<h3 class="iconfont icon-iconfontplay2"> LINE[\\s\\S]*?(.*?)<\/ul>',
          video_link_reg : '<a href="(.+?)">(.+?)<\/a>',
          get_link_reg : 'url\":\"([^\"]+)\",\"url_next\"',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : 'https://sh-data-s01.chinaeast2.cloudapp.chinacloudapi.cn/xt.php',
          referer : 'https://www.libvio.com/',
          parsejs : '"from":"(.*?)"'
        },
        {
          name : '完美看看',
          websitelink : 'https://www.wanmeikk.me/',
          listlink : true,
          search_url : 'https://www.wanmeikk.me/index.php/ajax/suggest?mid=1&wd=#msearchword&limit=1',
          search_json : true,
          scVodNode : 'json:list',
          scVodName : 'name',
          scVodId : 'id',
          search_list_reg : '"list":(.+?),"url":',
          search_list_have_string : 'id',
          search_list_find_reg : 'id:(.+?),en',
          title_selector : '', 
          title_selector_value : '',
          link_selector : '',
          link_folder : 'play',
          detail_url_reg : '<ul class="stui-content__playlist column8 clearfix">(.*?)</ul>',
          video_link_reg : '<a href="(.+?)">(.+?)<\/a>',
          get_link_reg : 'url\":\"([^\"]+)\",\"url_next\"',
          need_base64decode : false,
          prefix_video : '',
          dplayerurl : 'https://www.wanmeikk.me/dplayer.php',
          referer : 'https://www.wanmeikk.me/',
          parsejs : '"from":"(.*?)"'
        }
        ]
      };
      var doreg = {};
      var doregjson = {};
      var resp;
      var search_videos;
      var find_videos;
      var allowdebug = true;
    

      this.create = function () {
        var _this = this;

        this.activity.loader(true);
        Lampa.Background.immediately(Lampa.Utils.cardImgBackground(object.movie));
        var mytitle;
        if(object.movie.source == 'yyds'){
          mytitle = object.search_one.replace('/',' ');
          if(mytitle.indexOf(' ' != -1)) mytitle = mytitle.split(' ')[0];
        }
        else{
          mytitle = object.search_one;
        };
        
        var url = 'http://proxy.cub.watch/cdn/https://rentry.co/lampa_rule/raw';
        //var url = 'https://cdn.jsdelivr.net/gh/aston314/lampa@main/online_rule.json';
        //var url = 'https://cors.eu.org/https://rentry.co/lampa_rule/raw';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
            
        xhr.onload = function() {
        var results_json = xhr.responseText;
        doregjson = $.parseJSON(results_json);

        /*doregjson = extract_rule;
        console.log(doregjson);*/
    
        if(object.movie.source == 'yyds'){
          if(object.region.indexOf('中国') != -1){
            doreg = doregjson.rule[1];
          }
          else{
            doreg = doregjson.rule[0];
          }; 
        }
        else{
          if(object.movie.original_language =='zh'){
            //doreg = doregjson.rule[5];
            //中文
                  resp = _this.getRemote(doregjson.rule[0].search_url.replace('#msearchword',encodeURIComponent(mytitle)));
                  
                  search_videos = resp.match(doregjson.rule[0].search_list_reg);
                  find_videos = search_videos[0].match(doregjson.rule[0].search_list_have_string);
  
                  if(find_videos !== null){
                    doreg = doregjson.rule[0];
                  }else{
                    doreg = doregjson.rule[9];
                  };
          }else{
            if(typeof object.movie.number_of_seasons !== 'undefined'){
                  resp = _this.getRemote(doregjson.rule[0].search_url.replace('#msearchword',encodeURIComponent(mytitle)));
                  
                  search_videos = resp.match(doregjson.rule[0].search_list_reg);
                  find_videos = search_videos[0].match(doregjson.rule[0].search_list_have_string);
  
                  if(find_videos !== null){
                    doreg = doregjson.rule[0];
                  }else{
                    doreg = doregjson.rule[9];
                  };
            }
            else{
              if(object.movie.original_language == 'ko'){
                //韩文
                doreg = doregjson.rule[9];
              }
              else{
                  resp = _this.getRemote(doregjson.rule[0].search_url.replace('#msearchword',encodeURIComponent(mytitle)));
                  
                  search_videos = resp.match(doregjson.rule[0].search_list_reg);
                  find_videos = search_videos[0].match(doregjson.rule[0].search_list_have_string);
  
                  if(find_videos !== null){
                    doreg = doregjson.rule[0];
                  }else{
                    doreg = doregjson.rule[9];
                  };
              }
            }
          };
        }
        
        var url1 = doreg.search_url;
        url1 = url1.replace('#msearchword',encodeURIComponent(mytitle));
        console.log(url1);
        network.timeout(1000 * 60);
        network["native"](url1, function (str) {

        function oncomplite(str) {
          return str.length > 1 ? str[1] : undefined;
        };
        function onerror(str) {
          return str.length > 2 ? str[2] : undefined;
        };

        var searchresult = str.match(doreg.search_list_reg);
        
        searchresult = searchresult[1].match(doreg.search_list_have_string);

        if(searchresult === null){
/*          listlink = {
            Results: []
          };*/
          _this.empty('哦，我们没有找到 (' + object.search_one + ') 静待资源上线');
        }
        else{
        if(doreg.search_json){
          str=str.replace(/"/g, '');
          //console.log(str);
        };
        var math = str.replace(/\n|\r/g, '').match(new RegExp(doreg.search_list_find_reg, ''));
        var data = {
          Results: []
        };
        $.each(math, function (i, a) {
          if(i == 1){
            return false;
          };
          var element = $('<span>'+a+'</span>'),
              item = {};
          if(doreg.search_json){
            /*var titleRegExp = new RegExp('id:(.+?),name:(.+?),', '');
            var searchid = titleRegExp.exec(a);*/
            var searchid = a.match('id:(.+?),name:(.+?),');
            item.Title  = searchid[2];
            item.Link   = doreg.websitelink+'/'+doreg.link_folder+'/'+searchid[1]+'-1-1.html';
          }else{
            if(doreg.title_selector_value == 'text'){
              item.Title = $(doreg.title_selector, element).text();
            }else{
              item.Title = $(doreg.title_selector, element).attr('title');
            };
            item.Link = doreg.websitelink+$(doreg.link_selector, element).attr('href');
          };
          var searchtitle = item.Title;

          /*console.log(item.Link);*/
                  //取得具体页面的详情地址
                  network["native"](item.Link, function (str) {
                  var math = str.replace(/\n|\r/g, '').match(new RegExp(doreg.detail_url_reg, 'g'));
                  var data = {
                    Results: []
                  };
                  $.each(math, function (i, a) {
                    //console.log(a);
                    var element = $(a),
                        item = {
                          translation: {},
                        };
                    //console.log(element);
                    //console.log("电视剧");
/*                    $("li").each(function(index){
                        console.log(index + ": " + $('a').text());
                    });
                   $('ul>li a').each(function(index,a){
                      var self=$(this);
                      console.log(self.text());
                      console.log("fuck");
                    });*/
                    //var titleRegExp = /<a href="(.+?)">(.+?)<\/a>/g;
                    var titleRegExp = new RegExp(doreg.video_link_reg, 'g');
                    //let result = titleRegExp.exec(a);
                    //console.log(titleRegExp.exec(a));
                    
                    var matches = [];
                    //var rslt    = [];
                     
                    while((matches = titleRegExp.exec(a)) != null){
                          
                          matches.shift();

/*                          item.translation_id = matches[0];
                          item.max_quality = matches[1];

                          item.title = object.search_one;
                          item.iframe_src = matches[0];
                          var mytranslation = {};
                          item.translation=mytranslation;*/
                          //console.log("生成item");
                          //console.log(JSON.stringify(item));
                          //var mytranslation = {};

                          listlink.data[0].media.push({
                            translation_id : doreg.listlink?doreg.websitelink+matches[0]:matches[0],
                            max_quality : matches[1],
                            title : searchtitle,
                            //iframe_src : matches[0],
                            //translation : mytranslation
                        });

/*                      item.translation_id = $('li>a', element).attr('href');
                      item.max_quality = $('li>a', element).text();

                      //item.id = 381
                      item.title = object.search_one;
                      //item.iframe = ""
                      item.iframe_src = $('li>a', element).attr('href');
                      var mytranslation = {  
                      //id:381,
                      //title:object.search_one,
                      //iframe:"",
                      //iframe_src:$('li>a', element).attr('href')
                      };
                      item.translation=mytranslation;*/

                    /*item.short_title = $('li>a', element).text();
                    item.shorter_title = $('li>a', element).text();
                    item.smart_title = $('li>a', element).text();
                    item.title = $('li>a', element).text();*/

                    /*item.url = $('li>a', element).attr('href');
                    item.resolution = 720;
                    item.media_id = ""*/
                   
                    /*//console.log(item.Link);
                          //取得播放地址
                          network["native"](item.iframe_src, function (str) {
                          var math = str.replace(/\n|\r/g, '').match(new RegExp('url\":\"(http[^\"]+)', 'g'));
                          var data = {
                            Results: []
                          };
                          $.each(math, function (i, a) {
                            a = a.replace('url\":\"','');
                            var element = $(a),
                                item = {};
                            //item.Title = $('li>a', element).text();
                            item.Link = a
                            //console.log(item.Link);
                            
                            element.remove();
                            if (item.Link) data.Results.push(item);
                            
                          });
                          oncomplite(data);
                          //console.log(data);
                        }, function (a, c) {
                          onerror(network.errorDecode(a, c));
                        }, false, {
                          dataType: 'text'
                        });*/

                    
                    //if (item.title && item.iframe_src) data.Results.push(item);
                    };
                    element.remove();
                    //console.log(item);
                  });
                  //listlink = data;
                  oncomplite(data);
/*                  for (let i = 0; i < data.Results.length; ++i) {
                      listlink.data[0].media.push(data.Results[i]);
                      //console.log(i);
                  }*/
                  //console.log(listlink.Results[0]);
                  //console.log(data.Results.length);
                  //console.log("data.Results.length");
                  
                  //console.log("listlink------crape");
                  //console.log(listlink);
                  //console.log("listlink------crape");
                  results = listlink.data;
                  //console.log(JSON.stringify(results));
                  _this.build();

                  _this.activity.loader(false);

                  _this.activity.toggle();

                  //json.data[0].media[0].qualities.push(listlink.Results[0]);
                  //console.log(JSON.stringify(json));
                  //listlink = JSON.stringify(listlink);
                  //console.log(jsonarray);
                }, function (a, c) {
                  //onerror(network.errorDecode(a, c));
                  _this.empty('哦，' + network.errorDecode(a, c) + ' ');
                }, false, {
                  dataType: 'text'
                });

          element.remove();
          if (item.Title && item.Link) data.Results.push(item);
        });
        }
          data;
          //console.log(data);

        }, function (a, c) {
          //onerror(network.errorDecode(a, c));
          _this.empty('哦，' + network.errorDecode(a, c) + ' ');
        }, false, {
          dataType: 'text'
        });
      };
        filter.onSearch = function (value) {
          Lampa.Activity.replace({
            search: value,
            clarification: true
          });
        };

        filter.onBack = function () {
          _this.start();
        };

        filter.render().find('.selector').on('hover:focus', function (e) {
          last_filter = e.target;
        });
        filter.render().find('.filter--sort').remove();
        return this.render();
      };

      this.empty = function (descr) {
        var empty = new Lampa.Empty({
          descr: descr
        });
        files.append(empty.render(filter.empty()));
        this.start = empty.start;
        this.activity.loader(false);
        this.activity.toggle();
      };

      this.buildFilterd = function (select_season) {
        var select = [];

        var add = function add(type, title) {
          var need = Lampa.Storage.get('online_filter', '{}');
          var items = filter_items[type];
          var subitems = [];
          var value = need[type];
          items.forEach(function (name, i) {
            subitems.push({
              title: name,
              selected: value == i,
              index: i
            });
          });
          select.push({
            title: title,
            subtitle: items[value],
            items: subitems,
            stype: type
          });
        };

        filter_items.voice = [];
        filter_items.season = [];
        filter_items.voice_info = [];
        var choice = {
          season: 0,
          voice: 0
        };
        results.slice(0, 1).forEach(function (movie) {
            movie.translations.forEach(function (element) {
              filter_items.voice.push(element.smart_title);
              filter_items.voice_info.push({
                id: element.id
              });
            });
        });
        Lampa.Storage.set('online_filter', object.movie.number_of_seasons ? choice : {});
        select.push({
          title: '重置过滤器',
          reset: true
        });

        if (object.movie.number_of_seasons) {
          add('voice', '翻译');
          add('season', '季');
        }

        filter.set('filter', select);
        this.selectedFilter();
      };

      this.selectedFilter = function () {
        var need = Lampa.Storage.get('online_filter', '{}'),
            select = [];

        for (var i in need) {
          select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
        }

        filter.chosen('filter', select);
      };

      this.extractFile = function (str) {
        var url = '';

        try {
          var items = str.split(',').map(function (item) {
            return {
              quality: parseInt(item.match(/\[(\d+)p\]/)[1]),
              file: item.replace(/\[\d+p\]/, '').split(' or ')[0]
            };
          });
          items.sort(function (a, b) {
            return b.quality - a.quality;
          });
          url = items[0].file;
          url = 'http:' + url.slice(0, url.length - 32) + '.mp4';
        } catch (e) {}

        return url;
        console.log(url);
        console.log("播放链接");
      };

      this.extractData = function () {
        var _this2 = this;

        network.timeout(5000);
        var movie = results.slice(0, 1)[0];
        console.log(movie);
        console.log("解析链接");
        extract = {};

        if (movie) {
          network["native"]('http:' + movie.iframe_src, function (raw) {
            console.log(movie.iframe_src)
            var math = raw.replace(/\n/g, '').match(/id="files" value="(.*?)"/);

            if (math) {
              var json = Lampa.Arrays.decodeJson(math[1].replace(/&quot;/g, '"'), {});
              var text = document.createElement("textarea");
              console.log(json);
              for (var i in json) {
                text.innerHTML = json[i];
                Lampa.Arrays.decodeJson(text.value, {});
                extract[i] = {
                  json: Lampa.Arrays.decodeJson(text.value, {}),
                  file: _this2.extractFile(json[i])
                };

                for (var a in extract[i].json) {
                  var elem = extract[i].json[a];

                  if (elem.folder) {
                    for (var f in elem.folder) {
                      var folder = elem.folder[f];
                      folder.file = _this2.extractFile(folder.file);
                    }
                  } else elem.file = _this2.extractFile(elem.file);
                }
              }
            }
            console.log(extract);
            console.log("解析结果");
          }, false, false, {
            dataType: 'text'
          });
        }
      };
      //console.log(extract);

      this.getRemote = function (remote_url) {
         return $.ajax({
            type: "GET",
            url: remote_url,
            async: false
         }).responseText;
      };

      this.build = function () {
        var _this3 = this;

        //this.buildFilterd();
        this.filtred();
        //this.extractData();

        filter.onSelect = function (type, a, b) {
          if (type == 'filter') {
            if (a.reset) {
              _this3.buildFilterd();
            } else {
              if (a.stype == 'season') {
                _this3.buildFilterd(b.index);
              } else {
                var filter_data = Lampa.Storage.get('online_filter', '{}');
                filter_data[a.stype] = b.index;
                a.subtitle = b.title;
                Lampa.Storage.set('online_filter', filter_data);
              }
            }
          }

          _this3.applyFilter();

          _this3.start();
        };

        this.showResults();
      };

      this.filtred = function () {
        filtred = [];
        var filter_data = Lampa.Storage.get('online_filter', '{}');
          results.slice(0, 1).forEach(function (movie) {
            movie.media.forEach(function (element) {
              filtred.push({
                title: element.title,
                quality: element.max_quality ,
                translation: element.translation_id,
                sitename: doreg.name
              });
            });
          });
        //}
      };

      this.applyFilter = function () {
        this.filtred();
        this.selectedFilter();
        this.reset();
        this.showResults();
        last = scroll.render().find('.torrent-item:eq(0)')[0];
      };

      this.showResults = function (data) {
        filter.render().addClass('torrent-filter');
        scroll.append(filter.render());
        this.append(filtred);
        files.append(scroll.render());
      };

      this.reset = function () {
        last = false;
        filter.render().detach();
        scroll.clear();
      };

      this.getFile = function (element, show_error) {

        var translat = element.translation;
        var link;
        if (translat) {
           var str = this.getRemote(translat);
            var mathserver = new RegExp(doreg.parsejs, 'g').exec(str);
            mathserver = mathserver.length >1 ?'||'+mathserver[1]+'.js':'';
            
            var math = str.replace(/\n|\r/g, '').match(new RegExp(doreg.get_link_reg, 'g'));
            var data = {
              Results: []
            };
            $.each(math, function (i, a) {
              if(i == 1){
              return false;
              };
            
              //a = decodeURIComponent(a.replace(/\+/g,  " ")).replace('url\":\"','').replace('now=base64decode\("','').replace('","url_next"','');
              a = a.replace('url\":\"','').replace('now=base64decode\("','').replace('","url_next"','');
              //var element = $(a),

              //console.log(a);
                var  item = {};
              //item.Title = $('li>a', element).text();
              if(doreg.need_base64decode){
              item.file = unescape(atob(a)).slice(0,1)=='/'? doreg.prefix_video+unescape(atob(a)) : unescape(atob(a));
            }else{
              item.file = doreg.prefix_video+unescape(a.replace(/\+/g,  " "))+mathserver;
            };
              //console.log(item.Link);
              
              //element.remove();
              if (item.file) data.Results.push(item);
              
            });
            link=data.Results[0].file;
            link=link.replace(/\\/g,"");
            if (allowdebug) console.log(link);
            return link;

        }

        if (show_error) Lampa.Noty.show('无法检索链接');
      };


      this.append = function (items) {
        var _this4 = this;

        items.forEach(function (element) {
          var hash = Lampa.Utils.hash(element.translation ? [element.translation, element.quality, object.movie.original_title].join('') : object.movie.original_title);
          var view = Lampa.Timeline.view(hash);
          var item = Lampa.Template.get('online1', element);
          item.append(Lampa.Timeline.render(view));
          item.on('hover:focus', function (e) {
            last = e.target;
            scroll.update($(e.target), true);
          }).on('hover:enter', function () {
            if(object.movie.id) Lampa.Favorite.add('history', object.movie, 100)
/*            console.log("这里");
            console.log(element);
            console.log("这里");*/
            var file = _this4.getFile(element, true);
            /*console.log(file);
            console.log("取得播放地址");*/

            /*if (file) {
              _this4.start();

              Lampa.Player.play({
                url: file,
                timeline: view,
                title: element.season ? element.title : object.movie.title + ' / ' + element.title
              });
              var playlist = [];
              items.forEach(function (elem) {
                playlist.push({
                  title: elem.title,
                  url: _this4.getFile(elem)
                });
              });
              Lampa.Player.playlist(playlist);
            } else {*/
            if (file.indexOf('http') == -1) {
            var filecode = file.split('||')[0];
            var filejs = file.split('||')[1];
            //console.log(filejs)

            var str_js = _this4.getRemote(doreg.websitelink+'/static/player/'+filejs);
            //console.log(str_js)
            var get_parse_url = 'https?:\/\/[^?]+'
            var math_parse_url = str_js.replace(/\n|\r/g, '').match(new RegExp(get_parse_url, 'g'));

            //var math_parse_url = new RegExp(get_parse_url, 'g').exec(str_js);
            //mathserver = mathserver?'||'+mathserver[1]+'.js':'';

            math_parse_url = math_parse_url?math_parse_url.toString():''
            //console.log(math_parse_url)

              function fn1() {
                  return new Promise(function(resolve, reject) {
                        cordovaHTTP.acceptAllCerts(true, function() {
                            console.log('success!');
                        }, function() {
                            console.log('error :(');
                        });
                        cordovaHTTP.get(math_parse_url, {
                        url: filecode,
                        next: "",
                        id: 0,
                        nid: 1
                    }, { Referer: doreg.referer }, function(response) {
                        // prints 200
                        console.log(response.status);
                        //Lampa.Noty.show(response.status);
                        try {
                            //console.log(response.data);
                            //var mathurl = response.data.replace(/\n|\r/g, '').match(new RegExp("var urls = '(.+?)'", 'g'));
                            //var file = mathurl.toString().replace("var urls = '","").replace("'","");
                            //var mathurl = response.data.replace(/\n|\r/g, '').match(new RegExp("'https:\/\/.*mp4", 'g'));
                            //var file = mathurl?mathurl.toString().replace("'",''):null;
                            //console.log(mathurl);
                            //var file = mathurl.toString().replace("'",'');
                            var parse_url = "urls = '(.+?)'"
                            var mathurl = new RegExp(parse_url, 'g').exec(response.data);
                            var file = mathurl?mathurl[1]:''
                            //console.log(file);
                            if (file) {
                            _this4.start();

                            var playlist = [];
                            var first = {
                              url: file,
                              timeline: view,
                              title: element.season ? element.title : object.movie.title + ' / ' + element.title+ ' / ' + element.quality
                            };
                            Lampa.Player.play(first);
                            //object.movie.number_of_seasons!== 'undefined' element.season
                            if (element.season) {
                              items.forEach(function (elem) {
                                console.log(elem)
                                console.log("elem")
                                playlist.push({
                                  title: elem.quality+ ' / ' +elem.title,
                                  url: _this4.getFile(elem)
                                });
                              });
                            } else {
                              playlist.push(first);
                            }

                            Lampa.Player.playlist(playlist);
                          } else {
                            Lampa.Noty.show('无法检索链接');
                          }
                            resolve(value)
                        } catch(e) {
                            console.error("parsing error");
                            //Lampa.Noty.show("播放地址解析出错");
                        }
                    }, function(response) {
                        // prints 403
                        reject(response.error);
                        console.log(response.status);
                        
                        //prints Permission denied 
                        console.log(response.error);
                    });

                  });
              }
              fn1().then(function(value){
                  //do something
              })
            }
            else{
              if (file) {
                _this4.start();

                var playlist = [];
                var first = {
                  url: file,
                  timeline: view,
                  title: element.season ? element.title : object.movie.title + ' / ' + element.title+ ' / ' + element.quality
                };
                Lampa.Player.play(first);
                //object.movie.number_of_seasons!== 'undefined' element.season
                if (element.season) {
                  items.forEach(function (elem) {
                    console.log(elem)
                    console.log("elem")
                    playlist.push({
                      title: elem.quality+ ' / ' +elem.title,
                      url: _this4.getFile(elem)
                    });
                  });
                } else {
                  playlist.push(first);
                }

                Lampa.Player.playlist(playlist);
              } else {
                Lampa.Noty.show('无法检索链接');
              }
            }
          });
          scroll.append(item);
        });
      };

      this.back = function () {
        Lampa.Activity.backward();
      };

      this.start = function () {
        Lampa.Controller.add('content', {
          toggle: function toggle() {
            Lampa.Controller.collectionSet(scroll.render(), files.render());
            Lampa.Controller.collectionFocus(last || false, scroll.render());
          },
          up: function up() {
            if (Navigator.canmove('up')) {
              if (scroll.render().find('.selector').slice(2).index(last) == 0 && last_filter) {
                Lampa.Controller.collectionFocus(last_filter, scroll.render());
              } else Navigator.move('up');
            } else Lampa.Controller.toggle('head');
          },
          down: function down() {
            Navigator.move('down');
          },
          right: function right() {
            Navigator.move('right');
          },
          left: function left() {
            if (Navigator.canmove('left')) Navigator.move('left');else Lampa.Controller.toggle('menu');
          },
          back: this.back
        });
        Lampa.Controller.toggle('content');
      };

      this.pause = function () {};

      this.stop = function () {};

      this.render = function () {
        return files.render();
      };

      this.destroy = function () {
        network.clear();
        files.destroy();
        scroll.destroy();
        results = null;
        network = null;
      };
    }

    function startPlugin() {
      window.plugin_online1_ready = true;
      Lampa.Component.add('online1', component);
      Lampa.Template.add('button_online1', "<div class=\"full-start__button selector view--online\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" version=\"1.1\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 30.051 30.051\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\">\n    <g xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z\" fill=\"currentColor\"/>\n        <path d=\"M15.026,0.002C6.726,0.002,0,6.728,0,15.028c0,8.297,6.726,15.021,15.026,15.021c8.298,0,15.025-6.725,15.025-15.021   C30.052,6.728,23.324,0.002,15.026,0.002z M15.026,27.542c-6.912,0-12.516-5.601-12.516-12.514c0-6.91,5.604-12.518,12.516-12.518   c6.911,0,12.514,5.607,12.514,12.518C27.541,21.941,21.937,27.542,15.026,27.542z\" fill=\"currentColor\"/>\n    </g></svg>\n\n    <span>观看</span>\n    </div>");
      Lampa.Template.add('online1', "<div class=\"online selector\">\n        <div class=\"online__body\">\n<div style='position: absolute;left: 0;top: -0.3em;width: 2.4em;height: 2.4em'>    <svg style='height: 2.4em; width:  2.4em;' viewBox='0 0 128 128' fill='none' xmlns=Lampa.Utils.protocol() + 'www.w3.org/2000/svg'>   <circle cx='64' cy='64' r='56' stroke='white' stroke-width='16'/>   <path d='M90.5 64.3827L50 87.7654L50 41L90.5 64.3827Z' fill='white'/>    </svg></div>            <div class=\"online__title\">{title}</div>\n            <div class=\"online__quality\">{sitename} / {quality}</div>\n        </div>\n    </div>");
      Lampa.Listener.follow('full', function (e) {
        if (e.type == 'complite') {
          var btn = Lampa.Template.get('button_online1');
          btn.on('hover:enter', function () {
            Lampa.Activity.push({
              url: '',
              title: '在线观看',
              component: 'online1',
              search: e.data.movie.title,
              search_one: e.data.movie.title,
              search_two: e.data.movie.original_title,
              movie: e.data.movie,
              region: e.object.card.region,
              page: 1
            });
          });
          e.object.activity.render().find('.view--torrent').after(btn);
        }
      });
    }

    if (!window.plugin_online1_ready) startPlugin();

})();
