//魚・肉・ラーメン・そば・中華

//.fish魚
document.getElementById("fish").onclick = function() {
      if (map) {
        map.remove();
        map = null;
        map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
    }
var popup = L.popup();
 L.marker([34.77200667,138.0166793]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うなぎの甚八".fontsize(5).bold()+"<br><img src=p/jinpati.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5638".fontsize(4)+"<br>〇　掛川市肴町7-12".fontsize(4)+"<br>〇　日曜休み<br>　　11時00分～13時00分<br>　　17時00分～19時00分　".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
      });
L.marker([34.77566204,138.0176076]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うな助".fontsize(5).bold()+"<br><img src=p/unasuke.png style=width:200px;height:150px;>"+"<br>℡　0537-22-5008".fontsize(4)+"<br>〇　掛川市掛川1071-1".fontsize(4)+"<br>〇　火曜休み<br>　　11時00分～13時45分<br>　　16時30分～20時00分　".fontsize(4)+"<br>HP　http://unasuke-kakegawa.com/".fontsize(4).fontcolor(""))
      .openOn(map);
      });
L.marker([34.77195184,138.0169809
],{icon: L.spriteIcon('red')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うな専".fontsize(5).bold()+"<br><img src=p/unasenn.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5354".fontsize(4)+"<br>〇　掛川市肴町7-8".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時00分<br>　　17時30分～20時30分　".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
      });
 L.marker([34.77251911,138.0124305]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("新泉（にいずみ）".fontsize(5).bold()+"<br><img src=p/niizumi.png style=width:200px;height:150px;>"+"<br>℡　0537-22-5521".fontsize(4)+"<br>〇　掛川市掛川606-2".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時00分<br>　　17時30分～21時00分　".fontsize(4)+"<br>HP　http://shinsen-unagi.com/".fontsize(4).fontcolor(""))
      .openOn(map);
      });
   L.marker([34.76496774,138.0119884]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("鮪屋みやぎ".fontsize(5).bold()+"<br><img src=p/miyagi.png style=width:150px;height:150px;>"+"<br>℡　0537-24-3434".fontsize(4)+"<br>〇　掛川市亀の甲2丁目22-13".fontsize(4)+"<br>〇　月曜休み<br>　　11時00分～19時00分　".fontsize(4)+"<br".fontsize(4).fontcolor(""))
      .openOn(map);
      });
       }
//.meat肉
 document.getElementById("niku").onclick = function() {
      if (map) {
        map.remove();
        map = null;
        map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
      }
var popup = L.popup();
 L.marker([34.77217054,138.0151055]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("たきち".fontsize(5).bold()+"<br><img src=p/takiti.png style=width:200px;height:150px;>"+"<br>℡　0537-22-1903".fontsize(4)+"<br>〇　掛川市紺屋町5-2".fontsize(4)+"<br>〇　月曜休み<br>　　18時00分～22時00分　".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
      });
    L.marker([34.77497152919159, 138.00848584232898],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("はしばみ.".fontsize(5).bold()+"<br><img src=p/hasibami.png style=width:150px;height:150px;>"+"<br>℡　0537-28-7039".fontsize(4)+"<br>〇　掛川市城西1丁目5-1".fontsize(4)+"<br>〇　火曜・水曜休み<br>　　11時00分～14時00分<br>　　18時00分～20時00分<br>　　（土曜のみ）　".fontsize(4)+"<br>HP　http://hashibami29.com/".fontsize(4).fontcolor(""))
      .openOn(map);
      });
      L.marker([34.78173986,138.0394584]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("焼肉 幸縁".fontsize(5).bold()+"<br><img src=p/yakiniku.png style=width:200px;height:150px;>"+"<br>℡　0537-24-3004".fontsize(4)+"<br>〇　掛川市成滝314-2".fontsize(4)+"<br>〇　水曜・木曜休み<br>　　17時00分～22時00分　".fontsize(4)+"<br>HP　https://nbba400.gorp.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
      });
      L.marker([34.77752617,138.024382]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("くずかわ茶寮 寅や".fontsize(5).bold()+"<br><img src=p/toraya.png style=width:200px;height:150px;>"+"<br>℡　0120-12-5464".fontsize(4)+"<br>〇　掛川市葛川1177-2".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時30分<br>　　17時00分～21時30分　".fontsize(4)+"<br>HP　https://tora88.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
       }
//.ラーメン
document.getElementById("ramen").onclick = function() {
      if (map) {
        map.remove();
        map = null;
        map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
    }
    var popup = L.popup();
L.marker([34.77284743,138.0053156]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("キネマ食堂".fontsize(4).bold()+"<br><img src=p/kinema.png style=width:200px;height:150px;>"+"<br>℡　0537-22-4348".fontsize(4)+"<br>〇　掛川市下俣173".fontsize(4)+"<br>〇　月曜休み<br>　　11時30分～13時30分<br>　　18時00分～21時00分　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77983066,138.0064794],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川飯店".fontsize(4).bold()+"<br><img src=p/hanntenn.png style=width:200px;height:150px;>"+"<br>℡　0537-24-3661".fontsize(4)+"<br>〇　掛川市中宿122-1".fontsize(4)+"<br>〇　火曜休み<br>　　11時00分～14時00分<br>　　17時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.7864056,138.0130989]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("太久味（たくみ）".fontsize(4).bold()+"<br><img src=p/takumi.png style=width:200px;height:150px;>"+"<br>℡　0537-23-6021".fontsize(4)+"<br>〇　掛川市上西郷325-1".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　11時00分～14時00分<br>　　17時30分～21時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77166148,138.0032871]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("麺屋さすけ".fontsize(4).bold()+"<br><img src=p/sasuke.png style=width:200px;height:150px;>"+"<br>℡　0537-25-7710".fontsize(4)+"<br>〇　掛川市中央3丁目12-2".fontsize(4)+"<br>〇　水曜休み<br>　　11時00分～14時00分<br>　　17時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.79862885,137.9604555]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("萬楽中華料理店".fontsize(4).bold()+"<br><img src=p/banraku.png style=width:200px;height:150px;>"+"<br>℡　0537-26-3066".fontsize(4)+"<br>〇　掛川市本郷440-3".fontsize(4)+"<br>〇　水曜・木曜休み<br>　　11時30分～14時00分<br>　　17時00分～20時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77934151,138.0227601]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("和が家".fontsize(4).bold()+"<br><img src=p/wagaya.png style=width:200px;height:150px;>"+"<br>℡　0537-24-5161".fontsize(4)+"<br>〇　掛川市仁藤４１−２".fontsize(4)+"<br>〇　月曜～木曜休み<br>　　11時00分～14時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
}

//.そば
  document.getElementById("soba").onclick = function() {
      if (map) {
        map.remove();
        map = null;
        map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
    }var popup = L.popup();
L.marker([34.78074128,138.0159984]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("蕎菜　まさ吉".fontsize(4).bold()+"<br><img src=p/masakiti.png style=width:200px;height:150px;>"+"<br>℡　0537-21-3530".fontsize(4)+"<br>〇　掛川市北門213".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～13時30分<br>　　17時00分～19時00分".fontsize(4)+"<br>HP　http://www.masakichi.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});

 }


 
//.中華
 document.getElementById("shumai").onclick = function() {
      if (map) {
        map.remove();
        map = null;
        map = L.map('demoMap', { dragging: true, zoomControl: false }).setView( [ lat, lng ], zoomlevel );
  L.control.zoom( { position: 'bottomright' } ).addTo( map );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="//openstreetmap.org/">OpenStreetMap</a>',
    }).addTo( map );
    }
var popup = L.popup();
L.marker([34.76782312,138.0142451]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("アルカディア・ダイニングコート　グランドホテル内".fontsize(4).bold()+"<br><img src=p/aruka.jpg style=width:200px;height:150px;>"+"<br>℡　05034-76-8260".fontsize(4)+"<br>〇　掛川市亀の甲1丁目3-1".fontsize(4)+"<br>〇　月曜～金曜　18:00～21:30<br>　　土曜・日曜　17:30～21:30".fontsize(4)+"<br>HP　https://onl.tw/9JRZaD8".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77562236,138.0075746]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("かりん亭".fontsize(4).bold()+"<br><img src=p/karin.jpg style=width:200px;height:150px;>"+"<br>℡　0537-24-0885".fontsize(4)+"<br>〇　掛川市城西2丁目6-1".fontsize(4)+"<br>〇　日曜休み<br>　　11時30分～14時30分<br>　　17時00分～20時00分<br>　　（火曜～土曜のみ）".fontsize(4)+"<br>HP　http://www.karin-tey.co.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77983066,138.0064794],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川飯店".fontsize(4).bold()+"<br><img src=p/mesiten.jpg style=width:150px;height:200px;>"+"<br>℡　0537-24-3661".fontsize(4)+"<br>〇　掛川市中宿122-1".fontsize(4)+"<br>〇　火曜休み<br>　　11時00分～14時00分<br>　　17時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77196081,138.0157564]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("十八番".fontsize(4).bold()+"<br><img src=p/juhati.jpg style=width:200px;height:150px;>"+"<br>℡　0537-22-6419".fontsize(4)+"<br>〇　掛川市肴町1-7".fontsize(4)+"<br>〇　火曜休み<br>　　11時30分～14時00分<br>　　17時00分～2時00分".fontsize(4).fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.67004053,138.0299802]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中国料理 好（ハオ）".fontsize(4).bold()+"<br><img src=p/hao.jpeg style=width:200px;height:150px;>"+"<br>℡　0537-72-5775".fontsize(4)+"<br>〇　掛川市大坂2170-3".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時30分<br>　　17時00分～21時00分".fontsize(4)+"<br>HP<br>http://www.hao-kakegawa.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77590314,138.014321]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("中国料理四川".fontsize(4).bold()+"<br><img src=p/sisen.jpg style=width:200px;height:150px;>"+"<br>℡　0537-21-0667".fontsize(4)+"<br>〇　掛川市中央1丁目4-6".fontsize(4)+"<br>〇　日曜休み<br>　　11時30分～14時30分<br>　　17時00分～21時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77984244,138.0131805]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("刀削麺 錦綉 (きんしゅう)".fontsize(4).bold()+"<br><img src=p/kin.jpg style=width:150px;height:150px;>"+"<br>℡　0537-21-6766".fontsize(4)+"<br>〇　掛川市弥生町201-1".fontsize(4)+"<br>〇　<br>　　11時30分～14時30分<br>　　17時30分～0時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77356614,138.0133235]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("不二屋中華飯店".fontsize(4).bold()+"<br><img src=p/hujiya.jpg style=width:200px;height:150px;>"+"<br>℡　0537-22-6656".fontsize(4)+"<br>〇　掛川市掛川560".fontsize(4)+"<br>〇　木曜・金曜休み<br>　　11時00分～14時00分<br>　　17時00分～19時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77934151,138.0227601]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("和が家".fontsize(4).bold()+"<br><img src=p/wagaya.jpeg style=width:200px;height:150px;>"+"<br>℡　0537-24-5161".fontsize(4)+"<br>〇　掛川市仁藤４１−２".fontsize(4)+"<br>〇　月曜～木曜休み<br>　　11時00分～14時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77743478,138.0277795]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("茉莉花 ジャスミン".fontsize(4).bold()+"<br><img src=p/jasu.jpg style=width:200px;height:150px;>"+"<br>℡　0537-23-5650".fontsize(4)+"<br>〇　掛川市成滝644-4".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　11時30分～14時30分<br>　　17時30分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.79862885,137.9604555]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("萬楽中華料理店".fontsize(4).bold()+"<br><img src=p/banraku.jpg style=width:150px;height:150px;>"+"<br>℡　0537-26-3066".fontsize(4)+"<br>〇　掛川市本郷440-3".fontsize(4)+"<br>〇　水曜・木曜休み<br>　　11時30分～14時00分<br>　　17時00分～20時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
 }
