//.レストラン


document.getElementById("resutoran").onclick = function(){
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
L.marker([34.77178343,138.0010877]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("VIVRE SA VIE".fontsize(5).bold()+"<br><img src=p/vivresavie.png style=width:150px;height:150px;>"+"<br>℡　0537-22-2829".fontsize(4)+"<br>〇　掛川市小鷹町176".fontsize(4)+"<br>〇　水曜休み<br>　　12時00分～15時00分<br>　　18時00分～22時00分　".fontsize(4)+"<br>HP　https://www.vivre-savie.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77188018,138.0153952]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("アミメゾン".fontsize(5).bold()+"<br><img src=p/amimezonn.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5555".fontsize(4)+"<br>〇　掛川市肴町1-12".fontsize(4)+"<br>〇　月曜休み".fontsize(4).fontcolor(""))
      .openOn(map);
});

L.marker([34.79433575,138.0759165]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("うまい処".fontsize(5).bold()+"<br><img src=p/umaidokoro.png style=width:200px;height:150px;>"+"<br>℡　0537-27-2155".fontsize(4)+"<br>〇　掛川市八坂".fontsize(4)+"<br>〇　8時00分～20時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});

L.marker([34.77284743,138.0053156]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("キネマ食堂".fontsize(5).bold()+"<br><img src=p/kinema.png style=width:200px;height:150px;>"+"<br>℡　0537-22-4348".fontsize(4)+"<br>〇　掛川市下俣173".fontsize(4)+"<br>〇　月曜休み<br>　　11時30分～13時30分<br>　　18時00分～21時00分　".fontsize(4)+"<br>HP　https://www.vivre-savie.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77296599,138.0167078]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("さくら食堂".fontsize(5).bold()+"<br><img src=p/sakura.png style=width:150px;height:150px;>"+"<br>℡　0537-22-5513".fontsize(4)+"<br>〇　掛川市連雀4-9".fontsize(4)+"<br>〇　木曜休み<br>　　11時30分～14時00分<br>　　17時30分～20時30分　".fontsize(4)+"<br>HP　https://www.vivre-savie.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.7727123,138.0149949]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("しゃかりき政平".fontsize(5).bold()+"<br><img src=p/syakariki.png style=width:150px;height:150px;>"+"<br>℡　0537-22-2437".fontsize(4)+"<br>〇　掛川市中町1-3".fontsize(4)+"<br>〇　月曜・第３日曜休み<br>　　11時00分～14時00分<br>　　17時00分～22時00分".fontsize(4)+"<br>HP　https://www.vivre-savie.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.66825058,138.0460005]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ななみ支店".fontsize(5).bold()+"<br><img src=p/nanami.png style=width:200px;height:150px;>"+"<br>℡　0537-72-2388".fontsize(4)+"<br>〇　掛川市大坂1074".fontsize(4)+"<br>〇　日曜休み<br>　　11時30分～14時00分<br>　　18時00分～20時00分".fontsize(4)+"<br>HP　https://www.vivre-savie.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});


L.marker([34.75333086,138.0003882]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("掛川森林果樹公園<br>アトリエ レストラン".fontsize(5).bold()+"<br><img src=p/atorie.jpg style=width:200px;height:150px;>"+"<br>℡　0537-21-1616".fontsize(4)+"<br>〇　掛川市下俣1丁目90".fontsize(4)+"<br>〇　11時00分～15時00分".fontsize(4)+"<br>HP　http://kajyukouen.takoman.net/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.68243734,137.9806206]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("丸一食堂".fontsize(5).bold()+"<br><img src=p/maruiti.png style=width:150px;height:150px;>"+"<br>℡　0120-25-0547".fontsize(4)+"<br>〇　掛川市横須賀561".fontsize(4)+"<br>〇　9時00分～17時00分".fontsize(4)+"<br>HP　https://www.vivre-savie.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.68224619,137.9811755],{icon: L.spriteIcon('red')}).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("松島食堂".fontsize(5).bold()+"<br><img src=p/matusima.png style=width:150px;height:150px;>"+"<br>℡　0537-48-2249".fontsize(4)+"<br>〇　掛川市横須賀117".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78981429,138.0203889]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("松葉食堂".fontsize(5).bold()+"<br><img src=p/matuba.png style=width:150px;height:150px;>"+"<br>℡　0537-24-4601".fontsize(4)+"<br>〇　掛川市緑ヶ丘1丁目21-5".fontsize(4)+"<br>〇　木曜休み<br>　　11時00分～14時00分<br>　　17時00分～20時00分".fontsize(4)+"<br>HP<br>http://shimanto-town.net/matsuba/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.82992202,137.959605]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("食事処より道".fontsize(5).bold()+"<br><img src=p/yorimiti.png style=width:150px;height:150px;>"+"<br>℡　0537-26-3858".fontsize(4)+"<br>〇　掛川市寺島1088-1".fontsize(4)+"<br>〇　月曜～水曜休み<br>　　11時30分～13時30分<br>　　17時00分～21時00分　".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.78260831,138.0433958]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("榛葉食堂".fontsize(5).bold()+"<br><img src=p/sinnba.png style=width:200px;height:150px;>"+"<br>〇　掛川市薗ケ谷623".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.76710857,138.0124959]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("台所屋".fontsize(5).bold()+"<br><img src=p/daidokoro.png style=width:150px;height:150px;>"+"<br>℡　0537-24-3453".fontsize(4)+"<br>〇　掛川市亀の甲1丁目7-6".fontsize(4)+"<br>〇　日曜・月曜休み<br>　　11時00分～16時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.84188871,138.0421217]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("大衆食堂 掛川PA<br>にぎわい満腹食堂".fontsize(5).bold()+"<br><img src=p/nigiwai.png style=width:170px;height:150px;>"+"<br>℡　0537-20-1200".fontsize(4)+"<br>〇　掛川市倉真".fontsize(4)+"<br>〇　8時00分～22時00分".fontsize(4)+"<br>HP　https://onl.tw/CJJ6PzP".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.66603619,138.0072364]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("竹うま".fontsize(5).bold()+"<br><img src=p/takeuma.png style=width:150px;height:150px;>"+"<br>℡　0537-48-5403".fontsize(4)+"<br>〇　掛川市大渕6338".fontsize(4)+"<br>〇　11時30分～14時00分<br>　　17時00分～22時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.6815055,138.0630755]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("満泉亭（まんせいてい）".fontsize(5).bold()+"<br><img src=p/mann.png style=width:150px;height:200px;>"+"<br>℡　0537-74-2635".fontsize(4)+"<br>〇　掛川市中3527".fontsize(4)+"<br>〇　水曜休み<br>　　8時00分～22時00分".fontsize(4)+"<br>HP　https://onl.tw/LnES6iu".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.77485861,138.0162608]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("旅とカレーと音楽の店JAN".fontsize(5).bold()+"<br><img src=p/tabi.jpg style=width:150px;height:150px;>"+"<br>℡　0537-24-9655".fontsize(4)+"<br>〇　掛川市掛川1136-4".fontsize(4)+"<br>〇　日曜・月曜休み<br>　　11時30分～14時00分<br>　　18時00分～23時00分".fontsize(4)+"<br>HP　http://jancurry.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.67033968,138.0490519]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("和季会々 やま仁".fontsize(5).bold()+"<br><img src=p/waki.png style=width:200px;height:150px;>"+"<br>℡　0537-28-7315".fontsize(4)+"<br>〇　掛川市三俣1370-2".fontsize(4)+"<br>〇　日曜・月曜休み<br>　　17時30分～22時00分".fontsize(4)+"<br>HP　https://wakiaiai-yamajin.com/".fontsize(4).fontcolor(""))
      .openOn(map);
});
L.marker([34.71140129,137.9929013]).addTo(map).on('click', function (e) {
    popup
      .setLatLng(e.latlng)
      .setContent("檪(クヌギ)".fontsize(5).bold()+"<br><img src=p/kunugi.png >"+"<br>℡　0537-48-5562".fontsize(4)+"<br>〇　掛川市6560-29".fontsize(4)+"<br>〇　月曜・火曜休み<br>　　9時30分～16時00分".fontsize(4).fontcolor(""))
      .openOn(map);
});
    }

  