function buat_login(){
  var hapus = document.getElementById('X');
  hapus.parentElement.removeChild(hapus);
  var el = document.getElementsByTagName('div')[0];
  var form = document.createElement('form')
  el.appendChild(form);
  var p = document.createElement('p');
  p.innerHTML = "SILAHKAN MENDAFTAR";
  p.style.textAlign = 'center';
  form.appendChild(p);
  var label = document.createElement('label');
  label.innerHTML = 'Nama User';
  form.appendChild(label);
  var input_nama = document.createElement('input');
  input_nama.type = "text";
  input_nama.className = 'form_login';
  input_nama.placeholder = "Nama User...";
  form.appendChild(input_nama);
  var label2 = document.createElement('label');
  label2.innerHTML = 'Nomor Handphone';
  form.appendChild(label2);
  var input_nomor = document.createElement('input');
  input_nomor.type = 'text';
  input_nomor.className = 'form_login';
  input_nomor.placeholder = "Nomor Handphone..."
  form.appendChild(input_nomor);
  var label3 = document.createElement('label');
  label3.innerHTML = 'Username';
  form.appendChild(label3);
  var input_username = document.createElement('input');
  input_username.type = "email";
  input_username.className = 'form_login';
  input_username.placeholder = "Username atau Email...";
  form.appendChild(input_username);
  var label4 = document.createElement('label');
  label4.innerHTML = "Password";
  form.appendChild(label4);
  var input_password = document.createElement('input');
  input_password.type = "password";
  input_password.className = "form_login";
  input_password.placeholder = 'Password...';
  form.appendChild(input_password);
  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.className = "tombol_login";
  submit.value = "DAFTAR SEKARANG";
  form.appendChild(submit);

}
