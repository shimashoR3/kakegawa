//.その他
 document.getElementById("sonota").onclick = function() {
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

L.marker([34.7689705,138.0199043],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("3Rings Grill&burger".fontsize(5).bold()+"<br><img src=p/suri-ringu.jpg style=width:150px;height:150px;>"+"<br>℡　05010-16-9811".fontsize(4)+"<br>〇　掛川市緑ヶ丘1丁目5-1".fontsize(4)+"<br>〇　月曜休み<br>　　1時00分～14時00分<br>　　17時00分～20時00分<br>　　（水曜～日曜のみ）".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76043608,137.9725514],{icon: L.spriteIcon('green')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("bowls kitchen ohana".fontsize(5).bold()+"<br><img src=p/bo-ruzukittin.jpg style=width:200px;height:150px;>"+"<br>℡　0537-22-0870".fontsize(4)+"<br>〇　掛川市領家540".fontsize(4)+"<br>〇　11時00分～15時00分".fontsize(4)+"<br>HP　https://onl.tw/ygNsUZR".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76037005,137.9714743]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("MAX'S DINER".fontsize(5).bold()+"<br><img src=p/maxs.jpg style=width:190px;height:150px;>"+"<br>℡　0537-64-6003".fontsize(4)+"<br>〇　掛川市領家529-1".fontsize(4)+"<br>〇　木曜休み<br>　　11時00分～14時30分<br>　　18時00分～21時00分<br>　　11時00分～21時00分<br>　　（日曜のみ）".fontsize(4)+"<br>HP　http://usa-village.cc/MD/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76877431,138.0169847],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("Rise Burger <br>ライズバーガー".fontsize(5).bold()+"<br><img src=p/rise.jpg style=width:150px;height:150px;>"+"<br>℡　0537-29-6613".fontsize(4)+"<br>〇　掛川市南1丁目6-11".fontsize(4)+"<br>〇　火曜・水曜休み<br>　　11時00分～15時00分<br>　　18時00分～22時00分<br>　　（金曜・土曜のみ）".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77017275,138.0126644]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("アトリエMOF".fontsize(5).bold()+"<br><img src=p/mof.jpg style=width:150px;height:150px;>"+"<br>℡　0537-23-4322".fontsize(4)+"<br>〇　掛川市中央1丁目4-15".fontsize(4)+"<br>〇　火曜休み<br>　　11時30分～14時00分<br>　　17時30分～22時00分 ".fontsize(4)+"<br>HP　http://atelier-mof.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.7786975,138.0042797]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("アマレット".fontsize(5).bold()+"<br><img src=p/amaretto.jpg style=width:150px;height:150px;>"+"<br>℡　0537-24-4848".fontsize(4)+"<br>〇　掛川市七日町2".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～15時00分<br>　　18時00分～21時00分".fontsize(4)+"<br>HP　http://amaretto-kakegawa.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77306892,138.0278296]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ガネーシャ".fontsize(5).bold()+"<br><img src=p/gane-sya.jpg style=width:150px;height:150px;>"+"<br>℡　0537-21-3467".fontsize(4)+"<br>〇　掛川市葛川613-3".fontsize(4)+"<br>〇　月曜休み<br>　　11時00分～15時00分<br>　　17時00分～22時00分".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.75150353,138.0511815]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("キウイフルーツカントリーJapan".fontsize(5).bold()+"<br><img src=p/kiuifuru-tu.jpg style=width:150px;height:150px;>"+"<br>℡　0537-22-6543".fontsize(4)+"<br>〇　掛川市上内田2040".fontsize(4)+"<br>〇　木曜休み<br>　　平日　9時00分～16時00分<br>　　土日　9時00分～16時30分".fontsize(4)+"<br>HP　http://www.kiwicountry.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77364442,137.9936503]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("コクリコ".fontsize(5).bold()+"<br><img src=p/kokuriko.jpg style=width:170px;height:150px;>"+"<br>℡　0537-21-6720".fontsize(4)+"<br>〇　掛川市大池3038-3".fontsize(4)+"<br>〇　水曜・日曜休み<br>　　9時00分～17時00分".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77282374,138.0166982]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ことのや".fontsize(5).bold()+"<br><img src=p/kotonoya.jpg style=width:150px;height:150px;>"+"<br>℡　0537-22-5315".fontsize(4)+"<br>〇　掛川市連雀4-13".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時00分<br>　　17時00分～20時30分".fontsize(4)+"<br>HP　https://onl.tw/1wRHpgW".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76745202,138.0166667]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("スリエ （Se lier a）".fontsize(5).bold()+"<br><img src=p/surie.jpg style=width:250px;height:150px;>"+"<br>℡　0537-23-8466".fontsize(4)+"<br>〇　掛川市南2丁目8-1".fontsize(4)+"<br>〇　月曜・第3日曜休み<br>　　11時30分～14時00分<br>　　17時30分～23時00分".fontsize(4)+"<br>HP　http://www.seliera.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77312225,138.0144334]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("トムヤム食堂".fontsize(5).bold()+"<br><img src=p/tomuyamu.jpg style=width:190px;height:150px;>"+"<br>℡　0537-22-1112".fontsize(4)+"<br>〇　掛川市中町3-19".fontsize(4)+"<br>〇　火曜休み<br>　　17時00分～23時00分".fontsize(4)+"<br>HP　https://tomyumsyokudou.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76090301,138.022065]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ビニータ".fontsize(5).bold()+"<br><img src=p/bini-ta.jpg style=width:150px;height:150px;>"+"<br>℡　0537-21-3718".fontsize(4)+"<br>〇　掛川市上張865-3".fontsize(4)+"<br>〇　月曜休み<br>　　11時30分～14時00分<br>　　17時30分～21時30分".fontsize(4)+"<br>".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77418964,138.0157092]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ペーザロ".fontsize(5).bold()+"<br><img src=p/pe-zaro.jpg style=width:150px;height:150px;>"+"<br>℡　0537-25-7782".fontsize(4)+"<br>〇　掛川市城下6-12".fontsize(4)+"<br>〇　月曜休み<br>　　11時30分～15時00分<br>　　17時00分～22時00分".fontsize(4)+"<br>HP　https://italianpesaro.gorp.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76049534,137.9709391],{icon: L.spriteIcon('red')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("レインボーホットドッグス".fontsize(5).bold()+"<br><img src=p/reinnbo-.jpg style=width:300px;height:150px;>"+"<br>℡　0537-64-6002".fontsize(4)+"<br>〇　掛川市領家528-1　".fontsize(4)+"<br>〇　木曜休み<br>　　12時00分～17時00分".fontsize(4)+"<br>HP　http://usa-village.cc/RHD/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78930864,137.964502]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("花峰庵たかやま".fontsize(5).bold()+"<br><img src=p/kahouan.jpg style=width:150px;height:150px;>"+"<br>℡　0537-26-3550".fontsize(4)+"<br>〇　掛川市細谷415".fontsize(4)+"<br>〇　月曜休み<br>　　11時30分～14時00分<br>　　17時00分～21時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
  }