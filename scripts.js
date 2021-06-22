function validation() {
  let form = document.getElementById('form');
  let email = document.getElementById('email').value;
  let text = document.getElementById('text');
  let pattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('valid');
    text.innerHTML = 'Okayy, semoga email teman - teman sudah benar yaa';
    text.style.color = '#88A550';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = 'Yahh, emailnya belum valid nih. Cek lagi yaa';
    text.style.color = '#F52549';
  }

  if (email === '') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML = '';
    text.style.color = '#88A550';
  }
}
