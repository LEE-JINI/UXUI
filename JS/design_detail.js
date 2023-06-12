
// 이미지 전환
var img_change = document.getElementsByClassName('img_change');
var main = document.getElementById('main');
var previousIndex = 0;

function jumpTo(thisIndex) {
    console.log('이전 인덱스 값:', previousIndex);
    console.log('현재 인덱스 값:', thisIndex);

    // 선택된 썸네일을 다시 클릭했을 때
    if (previousIndex === thisIndex) {
        return;
    }

    // 이벤트 타깃에 active 클래스를 추가
    img_change[thisIndex].classList.add('active');

    // 이전 인덱스를 가진 이벤트 타깃의 active클래스를 제거
    img_change[previousIndex].classList.remove('active');

    // 썸네일의 소스를 메인 이미지에 전달
    main.src = img_change[thisIndex].src;

    // 이전 인덱스값 구하기
    previousIndex = thisIndex;
}


// 화면이동 
function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      const offsetTop = section.offsetTop;
      const scrollTop = offsetTop - (windowHeight / 2) + (sectionHeight / 2);
      
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }
  