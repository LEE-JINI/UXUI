let form = document.getElementById('form');
let id_err = document.getElementById('id_err');
let pw_err = document.getElementById('pw_err');
let name_err = document.getElementById('name_err');
let num_err = document.getElementById('num_err');


form.addEventListener('submit', (e) => {
    
  e.preventDefault();

  var formData = new FormData(e.target);
  let id = formData.get('id');
  let pw = formData.get('pw');
  let name = formData.get('name');
  let number = formData.get('number');

  // 아이디 유효성
  if (!id.trim()) {
    errorHandler('아이디를 입력해주세요', id_err);
  } else if (id.length < 3) {
    errorHandler('아이디를 3글자 이상 입력해 주세요', id_err);
  } else {
    errorHandler(null, id_err);
  }

  // 비밀번호 유효성
  if (!pw.trim()) {
    errorHandler('비밀번호를 입력하세요', pw_err);
  } else {
    errorHandler(null, pw_err);
  }

  // 이름 유효성
  if (!name.trim()) {
    errorHandler('이름을 입력하세요', name_err);
  } else {
    errorHandler(null, name_err);
  }

  // 전화번호 유효성
  if (!number.trim()) {
    errorHandler('전화번호를  입력하세요', num_err);
  } else {
    errorHandler(null, num_err);
  }

// 비워주기
document.querySelector('input[name="pw"]').value = '';
document.querySelector('input[name="id"]').value = '';
document.querySelector('input[name="name"]').value = '';
document.querySelector('input[name="number"]').value = '';

});


function errorHandler(error, container) {
  if (error) {
    container.classList.remove('hidden');
    container.textContent = error;
  } else {
    container.classList.add('hidden');
  }
}
