 //.カフェ
document.getElementById("cafe").onclick = function(){
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
L.marker([34.8108741,138.0747031]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Antique Cafe Road".fontsize(5).bold()+"<br><img src=p/antexiku.png style=width:200px;height:150px;>"+"<br>℡　090-4853-0851".fontsize(4)+"<br>〇　掛川市大野1776-7".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　11時00分～16時00分".fontsize(4)+"<br>HP　https://onl.tw/7JiCmmV".fontsize(4).fontcolor(""))
      .openOn(map);
      });
L.marker([34.76216615,138.0166945]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("CAFE FRAIS".fontsize(5).bold()+"<br><img src=p/frais.png style=width:200px;height:150px;>"+"<br>℡　0537-28-7788".fontsize(4)+"<br>〇　掛川市南西郷424-13".fontsize(4)+"<br>〇　月曜・水曜・木曜休み<br>　　火曜・金曜17時30分~19時30分<br>　　土曜・日曜11時00分~20時00分".fontsize(4)+"<br>HP　https://www.cafe-frais.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78989763,137.9769542]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Cafe Riad".fontsize(5).bold()+"<br><img src=p/riad.png style=width:150px;height:150px;>"+"<br>℡　0537-29-7257".fontsize(4)+"<br>〇　掛川市家代の里2丁目5-7".fontsize(4)+"<br>〇　日曜～水曜休み<br>　　11時30分～16時30分　".fontsize(4)+"<br>HP　http://caferiad.her.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.83136152,138.0061566]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("cafe TOM".fontsize(5).bold()+"<br><img src=p/tom.png style=width:190px;height:150px;>"+"<br>℡　0537-74-5777".fontsize(4)+"<br>〇　掛川市高瀬15-3".fontsize(4)+"<br>〇　月曜～水曜・土曜休み<br>　　12時00分～20時00分（日曜18時00分まで）".fontsize(4)+"<br>HP　http://www.cafe-tom.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.83136152,138.0061566]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("cafePIT".fontsize(5).bold()+"<br><img src=p/pit.png style=width:150px;height:200px;>"+"<br>℡　090-2344-6611".fontsize(4)+"<br>〇　掛川市上西郷332-3".fontsize(4)+"<br>〇　月曜～木曜休み<br>　　11時30分～22時00分".fontsize(4)+"<br>HP　http://pit.hamazo.tv/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77042069,138.0156969]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Coffee Shop Popcorn".fontsize(5).bold()+"<br><img src=p/popcorn.png style=width:150px;height:150px;>"+"<br>℡　0537-22-2464".fontsize(4)+"<br>〇　掛川市駅前8-6".fontsize(4)+"<br>〇　9時00分～19時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.77891717,138.0311604]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("irie cafe".fontsize(5).bold()+"<br><img src=p/irie.png style=width:200px;height:150px;>"+"<br>℡　0537-29-6620".fontsize(4)+"<br>〇　掛川市成滝600-1".fontsize(4)+"<br>〇　水曜休み<br>　　11時00分～17時00分".fontsize(4)+"<br>HP　https://onl.tw/YtQas2Y".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77867031,138.0131497]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("JA掛川市 いっぷく茶屋".fontsize(5).bold()+"<br><img src=p/ippuku.png style=width:200px;height:150px;>"+"<br>℡　0120-12-9557".fontsize(4)+"<br>〇　掛川市弥生町２３４".fontsize(4)+"<br>〇　水曜休み<br>　　10時00分～17時00分".fontsize(4)+"<br>HP　https://onl.tw/8DTtnDg".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78483827,138.0022591]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("KIMIKURA CAFE <br>きみくらカフェ".fontsize(5).bold()+"<br><img src=p/kimikura1.png style=width:200px;height:150px;>"+"<br>℡　0537-25-7744".fontsize(4)+"<br>〇　掛川市大池2242-1".fontsize(4)+"<br>〇　10時00分～18時00分".fontsize(4)+"<br>HP　https://kimikura.co.jp/honten".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.75169998,138.0515488]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Kiwi Cafe & Kiwi Shop <br>掛川市 クラフトビールが<br>飲めるカフェ(キウイカフェ＆キウイショップ)".fontsize(5).bold()+"<br><img src=p/kiwi.png style=width:190px;height:150px;>"+"<br>℡　0537-22-6543".fontsize(4)+"<br>〇　掛川市上内田2040".fontsize(4)+"<br>〇　月曜～金曜休み<br>　　11時00分～16時00分".fontsize(4)+"<br>HP　http://www.kiwicountry.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.7806895,138.0131848],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("kosaji-ichi".fontsize(5).bold()+"<br><img src=p/kosaji.png style=width:200px;height:150px;>"+"<br>℡　0537-88-9128".fontsize(4)+"<br>〇　掛川市弥生町195".fontsize(4)+"<br>〇　木曜休み<br>　　11時00分～17時00分<br>　　（土曜・日曜１8時00分）".fontsize(4)+"<br>HP　https://www.kosaji-ichi.store/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.79221725,138.0276748]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Number A coffee".fontsize(5).bold()+"<br><img src=p/number.png style=width:200px;height:150px;>"+"<br>℡　0537-28-7242".fontsize(4)+"<br>〇　掛川市水垂936-1".fontsize(4)+"<br>〇　火曜休み<br>　　9時00分～17時00分　".fontsize(4)+"<br>HP　https://onl.tw/UYJ8FjZ".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77163278,137.9982348]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("SAM'S CAFE".fontsize(5).bold()+"<br><img src=p/sam.png style=width:190px;height:150px;>"+"<br>℡　0537-21-6807".fontsize(4)+"<br>〇　掛川市中央高町126".fontsize(4)+"<br>〇　水曜・木曜休み<br>　　10時30分～19時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77015083844997, 138.0162603980547]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("SARAH".fontsize(5).bold()+"<br><img src=p/sarah.png style=width:150px;height:150px;>"+"<br>℡　0364-55-4003".fontsize(4)+"<br>〇　掛川市駅前9-14".fontsize(4)+"<br>〇　土曜休み<br>　　10時00分～19時00分".fontsize(4)+"<br>　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78811045,137.964581]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng) 
      .setContent("stationery cafe konohi".fontsize(5).bold()+"<br><img src=p/konohi.png style=width:150px;height:200px;>"+"<br>℡　0537-26-1036".fontsize(4)+"<br>〇　掛川市細谷535-1".fontsize(4)+"<br>〇　臨時休業".fontsize(4)+"<br>HP　http://konohi.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77557199,138.0443218]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Tea time まるは (お茶畑や 松下園)".fontsize(5).bold()+"<br><img src=p/maruha.png style=width:190px;height:150px;>"+"<br>℡　0537-22-6528".fontsize(4)+"<br>〇　掛川市満水592".fontsize(4)+"<br>〇　水曜休み<br>　　10時00分～17時00分".fontsize(4)+"<br>HP　https://shop.suppinn.com/cafe/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77856274,138.0219481]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("いなてん".fontsize(5).bold()+"<br><img src=p/inaten.png style=width:150px;height:190px;>"+"<br>℡　0537-22-6628".fontsize(4)+"<br>〇　掛川市仁藤58-10".fontsize(4)+"<br>〇　10時00分～17時00分".fontsize(4)+"<br>　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77180335,138.0160206]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ウオコー".fontsize(5).bold()+"<br><img src=p/uoko.png style=width:200px;height:150px;>"+"<br>℡　".fontsize(4)+"<br>〇　掛川市肴町1-1".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77313144,138.0200137],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("かき氷 森平".fontsize(5).bold()+"<br><img src=p/morihei.png style=width:150px;height:200px;>"+"<br>℡　080-2650-2803".fontsize(4)+"<br>〇　掛川市仁藤町12-4".fontsize(4)+"<br>〇　月曜・火曜休み<br>（8月から月曜・火曜・金曜休み）<br>　　11:00～17:00".fontsize(4)+"<br>HP　https://twitter.com/q0fdluqvw0cmvda".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.76917946,138.0143582]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("カフェ・ド・ラーフ".fontsize(5).bold()+"<br><img src=p/dorahu.png style=width:150px;height:200px;>"+"<br>℡　0537-22-6260".fontsize(4)+"<br>〇　掛川市南1丁目1-1".fontsize(4)+"<br>〇　7時30分～18時30分".fontsize(4)+"<br>HP　https://www.jishowtay.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78230197,138.0492006]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("カンパーニャ".fontsize(5).bold()+"<br><img src=p/kanpa-nya.png style=width:150px;height:150px;>"+"<br>℡　0537-27-1140".fontsize(4)+"<br>〇　掛川市逆川321-1".fontsize(4)+"<br>〇　月曜休み<br>　　10時00分～17時00分".fontsize(4)+"<br>　".fontsize(4).fontcolor(""))
      .openOn(map);
});

 L.marker([34.77209924,138.0078609]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("クレープ スペース <br>クリーピー".fontsize(5).bold()+"<br><img src=p/kuri-pi-.png style=width:190px;height:150px;>"+"<br>℡　0537-88-9215".fontsize(4)+"<br>〇　掛川市中央2丁目3-1".fontsize(4)+"<br>〇　火曜休み<br>　　11時00分～18時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.84866273,138.0121279],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("しばちゃん<br>ランチマーケット".fontsize(5).bold()+"<br><img src=p/shibatyan.png style=width:200px;height:150px;>"+"<br>℡　090-2342-2725".fontsize(4)+"<br>〇　掛川市大和田25".fontsize(4)+"<br>〇　火曜休み<br>　　10時00分～17時00分".fontsize(4)+"<br>HP　http://www.shibachanchi.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77188361,138.0241562]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ジュアン".fontsize(5).bold()+"<br><img src=p/juan.png style=width:200px;height:150px;>"+"<br>℡　0537-23-3532".fontsize(4)+"<br>〇　掛川市上張257-5".fontsize(4)+"<br>〇　9時00分～21時00分".fontsize(4)+"<br>　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76835982,138.0242683]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("セントクロワール(St.CROIRE)".fontsize(5).bold()+"<br><img src=p/sento.png style=width:200px;height:150px;>"+"<br>℡　0537-31-1050".fontsize(4)+"<br>〇　掛川市緑ヶ丘2丁目7-1".fontsize(4)+"<br>〇　10時00分～17時00分".fontsize(4)+"<br>HP　https://st-croire.jp/service/cafe/".fontsize(4).fontcolor(""))
      .openOn(map);
});
 
 L.marker([34.67190558,138.0458472]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("たこやき倶楽部 ポッポ".fontsize(5).bold()+"<br><img src=p/takoyaki.png style=width:200px;height:150px;>"+"<br>℡　0526-13-2126".fontsize(4)+"<br>〇　掛川市大坂鷲田539<br>　　大東ショッピングプラザ内".fontsize(4)+"<br>〇　月曜休み<br>　　10時00分～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.83582543,138.0628777]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("たまカフェ".fontsize(5).bold()+"<br><img src=p/tamakafe.png style=width:150px;height:190px;>"+"<br>℡　0537-24-2722".fontsize(4)+"<br>〇　掛川市満水1652".fontsize(4)+"<br>〇　月曜～金曜休み<br>　　土・日11時00分～15時30分".fontsize(4)+"<br>HP　https://22centuryhillpark.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77631779,138.0208328]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("たまゆら".fontsize(5).bold()+"<br><img src=p/tamayura.png style=width:190px;height:150px;>"+"<br>℡　0537-29-7033".fontsize(4)+"<br>〇　掛川市掛川906".fontsize(4)+"<br>〇　水曜・日曜休み<br>　　11時00分～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.83613659,138.0756075]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ちゃまり場".fontsize(5).bold()+"<br><img src=p/tyamariba.png style=width:200px;height:150px;>"+"<br>℡　0537-29-5588".fontsize(4)+"<br>〇　掛川市東山1172-3　1階<br>　　（株）ショータイム".fontsize(4)+"<br>〇　金のみ営業<br>　　13時00分～17時00分".fontsize(4)+"<br>HP　http://www.showtime-j.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.79803591,137.9940671]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ビレッジ<br>（ＶＩＬＬＡＧＥ）".fontsize(5).bold()+"<br><img src=p/birejji.png style=width:150px;height:150px;>"+"<br>℡　0537-22-3799".fontsize(4)+"<br>〇　掛川市下垂木303-1".fontsize(4)+"<br>〇　月曜休み<br>　　11時00分～18時00分".fontsize(4)+"<br>HP　https://kakegawavillage.hamazo.tv/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77113494,138.015513]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ファニーファーム".fontsize(5).bold()+"<br><img src=p/fani-.png style=width:200px;height:150px;>"+"<br>℡　0537-62-0818".fontsize(4)+"<br>〇　掛川市駅前7-20ウィタス138内".fontsize(4)+"<br>〇　11時00分～21時00分<br>　　11時00分～14時00分<br>　　（水曜のみ）".fontsize(4)+"<br>HP　https://onl.tw/51FiWrb".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.78910914,138.00948519]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("プティムーン".fontsize(5).bold()+"<br><img src=p/putexi.png style=width:150px;height:150px;>"+"<br>℡　0537-62-1150".fontsize(4)+"<br>〇　掛川市西郷881-1".fontsize(4)+"<br>〇　月曜～木曜休み<br>　　13時00分～17時30分".fontsize(4)+"<br>HP　http://petit-moon.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
 L.marker([34.7739968,138.0187627]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("プルミエ".fontsize(5).bold()+"<br><img src=p/purumie.png style=width:150px;height:200px;>"+"<br>℡　0537-24-3502".fontsize(4)+"<br>〇　掛川市仁藤7-5".fontsize(4)+"<br>〇　10時00分～20時00分".fontsize(4)+"<br>　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.79364889,138.0194952]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ポワ・ポワ".fontsize(5).bold()+"<br><img src=p/powapowa.png style=width:150px;height:150px;>"+"<br>℡　0537-24-4107".fontsize(4)+"<br>〇　掛川市初馬278-1".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　11時00分～17時30分".fontsize(4)+"<br>HP　http://powapowa2009.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.74062686,138.0449669]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ミスターパパ".fontsize(4).bold()+"<br><img src=p/misuta-.png style=width:200px;height:150px;>"+"<br>℡　0537-24-8483".fontsize(4)+"<br>〇　掛川市子隣283-45".fontsize(4)+"<br>〇　木曜休み<br>　　11時00分～21時00分<br>　　11時00分～14時30分<br>　　（水曜のみ）".fontsize(4)+"<br>HP　http://mrpapa.la.coocan.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.72886224,138.0224029]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("やまき".fontsize(4).bold()+"<br><img src=p/yamaki.png style=width:200px;height:150px;>"+"<br>℡　0537-74-2384".fontsize(4)+"<br>〇　掛川市入山瀬814".fontsize(4)+"<br>〇　木曜休み<br>　　（４～６月・１２月は無休）<br>　　9時00～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.74600313,138.0436365]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ラ・マレア１９８０ダン".fontsize(4).bold()+"<br><img src=p/ramarea.png style=width:190px;height:150px;>"+"<br>℡　0537-24-7244".fontsize(4)+"<br>〇　掛川市内山田813-1".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　11時00分～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77928041,137.9875651]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("卯屋".fontsize(4).bold()+"<br><img src=p/tamago.png style=width:200px;height:150px;>"+"<br>℡　0537-21-3178".fontsize(4)+"<br>〇　掛川市大地2748-1".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　10時00分～18時00分".fontsize(4)+"<br>HP　http://www.tama-usagi.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.75310418,138.0004018]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("果樹園のあるお菓子屋 atelierTAKOMAN".fontsize(4).bold()+"<br><img src=p/kajuenn.png style=width200px;height:150px;>"+"<br>℡　0537-21-2020".fontsize(4)+"<br>〇　掛川市下俣1-90".fontsize(4)+"<br>〇　9時00分～15時30分".fontsize(4)+"<br>HP　http://kajyukouen.takoman.net/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.79805218,138.0750165]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("開運占いカフェ 七夢".fontsize(4).bold()+"<br><img src=p/kaiunn.png style=width:200px;height:150px;>"+"<br>℡　0537-27-1300".fontsize(4)+"<br>〇　掛川市八坂640-1　事務八幡宮前".fontsize(4)+"<br>〇　平日　10時00分～16時00分<br>　　土日　10時00分～17時00分".fontsize(4)+"<br>HP　https://www.nanayume.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77418811,137.9721712]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川エスキューブ <br>レンタルスペース&カフェ".fontsize(4).bold()+"<br><img src=p/esukyu-bu.png style=width:150px;height:150px;>"+"<br>℡　090-6676-3182".fontsize(4)+"<br>〇　掛川市岡津46-7".fontsize(4).fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77575361,138.0142683]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川城二の丸茶室".fontsize(4).bold()+"<br><img src=p/ninomaru.png style=width:190px;height:150px;>"+"<br>℡　0537-23-1199".fontsize(4)+"<br>〇　掛川市掛川1138-24".fontsize(4)+"<br>〇　9時30分～17時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.66610063,138.0054446]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("喫茶・スパゲティ ビーバー".fontsize(4).bold()+"<br><img src=p/bi-ba-.png style=width:150px;height:150px;>"+"<br>℡　0537-48-4914".fontsize(4)+"<br>〇　掛川市大渕6475-1".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.68478292,137.9875669]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("喫茶インディアンライト".fontsize(4).bold()+"<br><img src=p/indhi.png style=width:200px;height:150px;>"+"<br>〇　掛川市西大渕5663".fontsize(4)+"<br>〇　木曜・金曜休み<br>　　10時30分～19時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.79416287,138.0757686]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("喫茶コーナー　道の駅".fontsize(4).bold()+"<br><img src=p/mitinoeki.png style=width:200px;height:150px;>"+"<br>℡　0537-27-2600".fontsize(4)+"<br>〇　掛川市八坂822番2-1".fontsize(4)+"<br>〇　第２月曜休み<br>　　9時00分～16時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
  L.marker([34.76252962,138.0295813]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("喫茶樹々（キキ）cafekiki".fontsize(4).bold()+"<br><img src=p/kiki.png style=width:190px;height:150px;>"+"<br>℡　0537-28-7723".fontsize(4)+"<br>〇　掛川市杉谷南2丁目6-2".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　8時00分～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.80298027,137.9752287]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("森のピザやさん".fontsize(4).bold()+"<br><img src=p/morinopiza.png style=width:150px;height:200px;>"+"<br>℡　0544-21-1551".fontsize(4)+"<br>〇　掛川市遊家24-1".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.82646122,137.9932168]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("森の喫茶店MARIKO".fontsize(4).bold()+"<br><img src=p/morinokissatenn.png style=width:190px;height:150px;>"+"<br>℡　0537-26-3915".fontsize(4)+"<br>〇　掛川市上垂木3219-1".fontsize(4)+"<br>〇　土曜・日曜休み<br>　　10時00分～17時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.68224936,137.9799729]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("晴れときどきcafe".fontsize(4).bold()+"<br><img src=p/haretokidoki.png style=width:150px;height:200px;>"+"<br>〇　掛川市横須賀136".fontsize(4)+"<br>〇　木曜休み<br>　　13時00分～17時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76527786,138.0271749]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("静岡茶ハーブ希少糖<br>ブレンドティーバッグ・MUGTEA".fontsize(4).bold()+"<br><img src=p/mugtea.png style=width:200px;height:150px;>"+"<br>〇　掛川市杉谷南1丁目26-4".fontsize(4)+"<br>〇　月曜～木曜休み<br>　　13時00分～18時00分".fontsize(4)+"<br>HP　https://www.mugtea.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77170168,138.0219873]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大村園".fontsize(4).bold()+"<br><img src=p/oomuraenn.png style=width:150px;height:200px;>"+"<br>℡　0537-24-5228".fontsize(4)+"<br>〇　掛川市掛川85".fontsize(4)+"<br>〇　平日　8時00分～17時00分<br>　　土日　10時00分～15時00分".fontsize(4)+"<br>HP　https://omuraen.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.74560395,138.0516911]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("茶の庭".fontsize(4).bold()+"<br><img src=p/tyanoniwa.png style=width:200px;height:150px;>"+"<br>℡　0537-28-7077".fontsize(4)+"<br>〇　掛川市上内田389-1".fontsize(4)+"<br>〇　水曜休み<br>　　10時00分～18時00分".fontsize(4)+"<br>HP　https://chanoniwa.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76794849,138.0199882]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("茶房六軒京".fontsize(4).bold()+"<br><img src=p/tyabou.png style=width:190px;height:150px;>"+"<br>℡　0537-23-2534".fontsize(4)+"<br>〇　掛川市上張433-13".fontsize(4)+"<br>HP　https://www.mugtea.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.83661733,138.075466]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("東山いっぷく処".fontsize(5).bold()+"<br><img src=p/higasiyama.png style=width:150px;height:200px;>"+"<br>℡　0537-27-2266".fontsize(4)+"<br>〇　掛川市東山1173-2".fontsize(4)+"<br>〇　土曜・日曜休み<br>　　9時00分～16時00分　".fontsize(4)+"<br>HP　http://www.higashiyamacha.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.75292079,138.0324693],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("日本茶きみくら 本店".fontsize(5).bold()+"<br><img src=p/kimikura2.png style=width:150px;height:200px;>"+"<br>℡　0537-24-6008".fontsize(4)+"<br>〇　掛川市坂沢510-5".fontsize(4)+"<br>〇　火曜休み<br>　　10時00分～18時00分　".fontsize(4)+"<br>HP　https://kimikura.co.jp/honten".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78016324,138.0068704]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("㈲マッターホーン洋菓子店".fontsize(5).bold()+"<br><img src=p/matta-ho-nn.png style=width:150px;height:150px;>"+"<br>℡　0537-24-3422".fontsize(4)+"<br>〇　掛川市中宿128".fontsize(4)+"<br>〇　木曜休み<br>　　9時00分～19時00分　".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78087645,138.0053897]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("陽だまり".fontsize(5).bold()+"<br><img src=p/hidamari.png style=width:150px;height:170px;>"+"<br>℡　0537-64-4070".fontsize(4)+"<br>〇　掛川市中宿192-1".fontsize(4)+"<br>〇　水曜休み<br>　　8時00分～18時00分　".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77220374,138.0528243]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("珈琲紅茶専門店<br>ＺＡＰＡＤＡ".fontsize(5).bold()+"<br><img src=p/zapada.png style=width:200px;height:150px;>"+"<br>℡　0537-61-0070".fontsize(4)+"<br>〇　掛川市満水1279-1".fontsize(4)+"<br>〇　木曜休み<br>　　7時30分～18時00分　".fontsize(4)+"<br>HP　http://zapada.hamazo.tv/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77580192,138.0348623]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("珈琲専科 ぎょくろ".fontsize(5).bold()+"<br><img src=p/gyokuro.jpg style=width:150px;height:200px;>"+"<br>℡　0537-24-2260".fontsize(4)+"<br>〇　掛川市金城134".fontsize(4)+"<br>〇　火曜休み<br>　　8時00分～19時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77995236,138.0060701]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("珈琲茶屋る・くるーん".fontsize(5).bold()+"<br><img src=p/kururu-n.jpg style=width:200px;height:150px;>"+"<br>℡　0537-64-7977".fontsize(4)+"<br>〇　掛川市中宿120".fontsize(4)+"<br>〇　月曜休み<br>　　火・水・木9時00分~17時00分<br>　　金・土・日9時00分~20時00分　".fontsize(4)+"<br>HP　https://onl.tw/zre8vaF".fontsize(4).fontcolor(""))
      .openOn(map);
});

  }
