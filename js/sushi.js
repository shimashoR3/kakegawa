//.日本食
 document.getElementById("sushi").onclick = function() {
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
L.marker([34.78544699,138.002346]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ゆたか".fontsize(4).bold()+"<br><img src=p/yutaka.png style=width:150px;height:150px;>"+"<br>℡　0537-24-3078".fontsize(4)+"<br>〇　掛川市七日町40".fontsize(4)+"<br>〇　月曜休み<br>　　12時00分～20時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});

L.marker([34.77296599,138.0167078]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("さくら食堂".fontsize(4).bold()+"<br><img p/sakura.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5513".fontsize(4)+"<br>〇　掛川市連雀4-9".fontsize(4)+"<br>〇　木曜休み<br>　　11時30分～14時00分<br>　　17時30分～20時30分　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.7727123,138.0149949]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("しゃかりき政平".fontsize(4).bold()+"<br><img src=p/syakariki.png style=width:150px;height:150px;>"+"<br>℡　0537-22-2437".fontsize(4)+"<br>〇　掛川市中町1-3".fontsize(4)+"<br>〇　月曜・第３日曜休み<br>　　11時00分～14時00分<br>　　17時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.66825058,138.0460005]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ななみ支店".fontsize(4).bold()+"<br><img src=p/nanami.png style=width:200px;height:150px;>"+"<br>℡　0537-72-2388".fontsize(4)+"<br>〇　掛川市大坂1074".fontsize(4)+"<br>〇　日曜休み<br>　　11時30分～14時00分<br>　　18時00分～20時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.68243734,137.9806206]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("丸一食堂".fontsize(4).bold()+"<br><img src=p/maruiti.png style=width:150px;height:150px;>"+"<br>℡　0120-25-0547".fontsize(4)+"<br>〇　掛川市横須賀561".fontsize(4)+"<br>〇　9時00分～17時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.68224619,137.9811755]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("松島食堂".fontsize(4).bold()+"<br><img src=p/matusima.png style=width:150px;height:150px;>"+"<br>℡　0537-48-2249".fontsize(4)+"<br>〇　掛川市横須賀117".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78981429,138.0203889]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("松葉食堂".fontsize(4).bold()+"<br><img src=p/matuba.png style=width:150px;height:150px;>"+"<br>℡　0537-24-4601".fontsize(4)+"<br>〇　掛川市緑ヶ丘1丁目21-5".fontsize(4)+"<br>〇　木曜休み<br>　　11時00分～14時00分<br>　　17時00分～20時00分".fontsize(4)+"<br>HP<br>http://shimanto-town.net/matsuba/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.82992202,137.959605]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("食事処より道".fontsize(4).bold()+"<br><img src=p/yorimiti.png style=width:150px;height:150px;>"+"<br>℡　0537-26-3858".fontsize(4)+"<br>〇　掛川市寺島1088-1".fontsize(4)+"<br>〇　月曜～水曜休み<br>　　11時30分～13時30分<br>　　17時00分～21時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78260831,138.0433958]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("榛葉食堂".fontsize(4).bold()+"<br><img src=p/sinnba.png style=width:200px;height:150px;>"+"<br>〇　掛川市薗ケ谷623".fontsize(4).fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76710857,138.0124959]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("台所屋".fontsize(4).bold()+"<br><img src=p/daidokoro.png style=width:150px;height:150px;>"+"<br>℡　0537-24-3453".fontsize(4)+"<br>〇　掛川市亀の甲1丁目7-6".fontsize(4)+"<br>〇　日曜・月曜休み<br>　　11時00分～16時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.84188871,138.0421217]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大衆食堂 掛川PA にぎわい満腹食堂".fontsize(4).bold()+"<br><img src=p/nigiwai.png style=width:170px;height:150px;>"+"<br>℡　0537-20-1200".fontsize(4)+"<br>〇　掛川市倉真".fontsize(4)+"<br>〇　8時00分～22時00分".fontsize(4)+"<br>HP　https://x.gd/FTRIF".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.66603619,138.0072364]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("竹うま".fontsize(4).bold()+"<br><img src=p/takeuma.png style=width:150px;height:150px;>"+"<br>℡　0537-48-5403".fontsize(4)+"<br>〇　掛川市大渕6338".fontsize(4)+"<br>〇　11時30分～14時00分<br>　　17時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.6815055,138.0630755]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("満泉亭（まんせいてい）".fontsize(4).bold()+"<br><img src=p/mann.png style=width:150px;height:200px;>"+"<br>℡　0537-74-2635".fontsize(4)+"<br>〇　掛川市中3527".fontsize(4)+"<br>〇　水曜休み<br>　　8時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.67033968,138.0490519]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("和季会々 やま仁".fontsize(4).bold()+"<br><img src=p/waki.png style=width:200px;height:150px;>"+"<br>℡　0537-28-7315".fontsize(4)+"<br>〇　掛川市三俣1370-2".fontsize(4)+"<br>〇　日曜・月曜休み<br>　　17時30分～22時00分".fontsize(4)+"<br>HP<br>http://shimanto-town.net/matsuba/".fontsize(4).fontcolor(""))
      .openOn(map);
});

L.marker([34.77200667,138.0166793]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うなぎの甚八".fontsize(4).bold()+"<br><img src=p/jinpati.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5638".fontsize(4)+"<br>〇　掛川市肴町7-12".fontsize(4)+"<br>〇　日曜休み<br>　　11時00分～13時00分<br>　　17時00分～19時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77566204,138.0176076]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うな助".fontsize(4).bold()+"<br><img src=p/unasuke.png style=width:200px;height:150px;>"+"<br>℡　0537-22-5008".fontsize(4)+"<br>〇　掛川市掛川1071-1".fontsize(4)+"<br>〇　火曜休み<br>　　11時00分～13時45分<br>　　16時30分～20時00分".fontsize(4)+"<br>HP　http://unasuke-kakegawa.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77195184,138.0169809]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うな専".fontsize(4).bold()+"<br><img src=p/unasenn.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5354".fontsize(4)+"<br>〇　掛川市肴町7-8".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時00分<br>　　17時30分～20時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77308752,138.0575528]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("おもいでの家".fontsize(4).bold()+"<br><img src=p/omoidenoie.jpg style=width:150px;height:150px;>"+"<br>℡　0537-24-5407".fontsize(4)+"<br>〇　掛川市満水1412".fontsize(4)+"<br>〇　第１.３月曜・火曜休み<br>　　11時30分～14時00分<br>　　16時30分～21時00分<br>　　（日曜のみ）".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76982031,138.0241816]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("みどり寿司甲子".fontsize(4).bold()+"<br><img src=p/midori.jpg style=width:150px;height:150px;>"+"<br>℡　0537-24-5459".fontsize(4)+"<br>〇　掛川市緑ヶ丘2丁目5-10".fontsize(4)+"<br>〇　水曜休み<br>　　11時00分～14時00分<br>　　17時30分～20時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77921712,137.988435]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("遠山食堂".fontsize(4).bold()+"<br><img src=p/toyama.jpg style=width:200px;height:150px;>"+"<br>℡　0537-22-2872".fontsize(4)+"<br>〇　掛川市大池2752-1".fontsize(4)+"<br>〇　日曜休み<br>　　11時30分～14時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77656998,138.0027507],{icon: L.spriteIcon('violet')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川 福田寿し".fontsize(4).bold()+"<br><img src=p/hukuda.jpg style=width:150px;height:150px;>"+"<br>℡　050-5485-4419".fontsize(4)+"<br>〇　掛川市二瀬川1-10".fontsize(4)+"<br>〇　月曜休み<br>　　8時30分～19時00分".fontsize(4)+"<br>HP　https://fukudazushi.gorp.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76556766,138.0185749]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川いも汁処 とろろ本丸".fontsize(4).bold()+"<br><img src=p/imo.jpg style=width:150px;height:150px;>"+"<br>〇　掛川市南2丁目14-2".fontsize(4)+"<br>〇　水曜休み<br>　　11時00分～14時00分<br>　　17時00分～20時00分<br>　　（木曜～日曜のみ）".fontsize(4)+"<br>HP<br>http://www.imojiru-honmaru.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77253244,138.0159684]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川肴町　くろ川".fontsize(4).bold()+"<br><img src=p/kurokawa.jpg style=width:150px;height:150px;>"+"<br>℡　05054-88-3099".fontsize(4)+"<br>〇　掛川市肴町3-1".fontsize(4)+"<br>〇　月曜休み<br>　　17時30分～23時00分".fontsize(4)+"<br>HP　https://nbtx000.gorp.jp/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.75983252,138.0226523]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛茶料理むとう".fontsize(4).bold()+"<br><img src=p/muto.jpg style=width:150px;height:150px;>"+"<br>℡　0537-24-8188".fontsize(4)+"<br>〇　掛川市上張830".fontsize(4)+"<br>〇　月曜休み<br>　　11時30分～14時00分<br>　　17時00分～21時00分".fontsize(4)+"<br>HP　https://kacha-muto.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78350663,138.0129217]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("魚五".fontsize(4).bold()+"<br><img src=p/sakanago.jpg style=width:150px;height:150px;>"+"<br>℡　0537-24-5731".fontsize(4)+"<br>〇　掛川市谷の口町68".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時00分<br>　　17時00分～21時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76735562,138.0167294]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("月さやか".fontsize(4).bold()+"<br><img src=p/tuki.jpg style=width:150px;height:150px;>"+"<br>℡　0537-22-1575".fontsize(4)+"<br>〇　掛川市南2丁目8-1".fontsize(4)+"<br>〇　日曜休み<br>　　17時00分～0時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77971867,137.9793318]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("旬菜 飯田".fontsize(4).bold()+"<br><img src=p/handa.jpg style=width:150px;height:150px;>"+"<br>℡　0537-21-4121".fontsize(4)+"<br>〇　掛川市下垂木2192-49".fontsize(4)+"<br>〇　日曜営業".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.7829409,137.9998809]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("食事処　一馬".fontsize(4).bold()+"<br><img src=p/kazuma.jpg style=width:200px;height:150px;>"+"<br>℡　0537-22-7567".fontsize(4)+"<br>〇　掛川市大池2138".fontsize(4)+"<br>〇　水曜休み<br>　　11時00分～14時00分<br>　　17時00分～21時30分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77251911,138.0124305]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("新泉（にいずみ）".fontsize(4).bold()+"<br><img src=p/izumi.jpg style=width:150px;height:150px;>"+"<br>℡　0537-22-5521".fontsize(4)+"<br>〇　掛川市掛川606-2".fontsize(4)+"<br>〇　水曜休み<br>　　11時30分～14時00分<br>　　17時30分～21時00分".fontsize(4)+"<br>HP　http://shinsen-unagi.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76661295,137.9699138]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("椎の木茶屋".fontsize(4).bold()+"<br><img src=p/sinoki.jpg style=width:150px;height:150px;>"+"<br>℡　05034-67-9343".fontsize(4)+"<br>〇　掛川市領家1495".fontsize(4)+"<br>〇　水曜休み<br>　　11時00分～14時00分<br>　　17時00分～19時00分".fontsize(4)+"<br>HP　http://www.siinoki.net/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77190331,138.0157119]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("天金".fontsize(4).bold()+"<br><img src=p/tenkin.jpg style=width:150px;height:150px;>"+"<br>℡　0537-23-3188".fontsize(4)+"<br>〇　掛川市肴町1-16".fontsize(4)+"<br>〇　木曜休み<br>　　12時00分～14時30分<br>　　18時00分～20時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77350255,138.0149458]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("天城".fontsize(4).bold()+"<br><img src=p/amasiro.jpg style=width:250px;height:150px;>"+"<br>℡　0537-23-2248".fontsize(4)+"<br>〇　掛川市城下4-1".fontsize(4)+"<br>〇　火曜休み".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76147415,137.9967604]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("味処　ふじのや".fontsize(4).bold()+"<br><img src=p/huji.jpg style=width:200px;height:150px;>"+"<br>℡　0537-23-1654".fontsize(4)+"<br>〇　掛川市長谷1319-9".fontsize(4)+"<br>〇　土曜・日曜休み<br>　　7時00分～0時00分".fontsize(4)+"<br>HP　http://fujinobou.com/ogasa/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77409141,138.0162356]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("すいのや 菓子・おでんの店".fontsize(4).bold()+"<br><img src=p/suinoya.jpg style=width:150px;height:150px;>"+"<br>℡　0537-22-7432".fontsize(4)+"<br>〇　掛川市城下6-1".fontsize(4)+"<br>〇　火曜・水曜休み<br>　　11時00分～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.67190558,138.0458472]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("たこやき倶楽部 ポッポ".fontsize(4).bold()+"<br><img src=p/poop.jpg style=width:150px;height:150px;>"+"<br>℡　0526-13-2126".fontsize(4)+"<br>〇　掛川市大坂鷲田539<br>　　大東ショッピングプラザ内".fontsize(4)+"<br>〇　月曜休み<br>　　10時00分～18時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});

 }