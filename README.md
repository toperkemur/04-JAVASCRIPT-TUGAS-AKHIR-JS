# 04-JAVASCRIPT-TUGAS-AKHIR-JS
Tugas Akhir Javascript Niomic
<hr>
1. Pastikan Teman Teman Buatlah sebuah file pada folder project teman teman <br>
2. Berikan nama filenya dengan style.css lalu masukan kode dibawah ini : <br>

```
body{
        font-family: sans-serif;
        background: #C0C0C0;
}

h1{
        text-align: center;
        font-weight: 300;
}

.tulisan_login{
        text-align: center;
        text-transform: uppercase;
}

.kotak_login{
        width: 350px;
        background: white;

        margin: 80px auto;
        padding: 30px 20px;
}

label{
        font-size: 11pt;
}

.form_login{
        box-sizing : border-box;
        width: 100%;
        padding: 10px;
        font-size: 11pt;
        margin-bottom: 20px;
}

.tombol_login{
        background: #FF7F00;
        color: white;
        font-size: 11pt;
        width: 100%;
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
}
.tombol_lanjut{
        background: red;
        color: white;
        font-size: 11pt;
        width: 100%;
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
}
.link{
        color: #232323;
        text-decoration: none;
        font-size: 10pt;
}
```

3. Setelah itu teman teman buatlah 1 buah file dengan nama index.html copy kan kode dibawah ini <br>

```
<html>
<head>
        <title>TUGAS AKHIR/title>
        <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body >

        <h1>Membuat Desain Form Register Dengan Javascript <br/> NIOMIC</h1>
 <div class="kotak_login">
 <button id="X" onclick="buat_login()" class="tombol_lanjut">Klik Disini Untuk Mendaftar</button>
</div>
<script type="text/javascript" src="form.js"> </script>
</body>
</html>
```


4. Setelah itu teman teman buatlah 1 buah file javascript dengan nama form.js lalu buat sebuah function bernama buat_login() yang mampu membuat form untuk register otomatis pada saat kita mengklik tombol pada tampilan awal ini : <br>
<img src="https://lh4.googleusercontent.com/hPY67g3hTeeUhPkIF5T2p3EUXs0kkP1uoOr39eSSeVMM68F7NIS3c33OluTLjjmRC1w7gVieOCLvd0fq3PzE54sskqECb0OXOxhOHpWNxcUgyk0S7Hlm9DPdQ2P2ufOR79C8ueNj">

5. Pada saat diklik form register akan muncul tanpa loading <br>
<img src="https://lh5.googleusercontent.com/xF2AF30H7CS12VNX6oYrHol5UNQxg1ww-vBUk4g0dAwXzf9lD2HjzCHwJtCaHzPNKr7gHyCyJGte5KrGZSYY6sWrx7DTQid_geX8883_mVvTrXvtZfBOA-MZa3ED3sQCU2OVx_OU">

Happy Codding :)
