
// nav 공통 
function nav() {
    return `
      <nav class="nav">
        <div class="nav_rectangle"></div>
        <ul class="nav_ul">
          <li class="nav_li"><a href="home.html"> <img src="/link_media/LINK.png" alt="" width="70px"/></a></li>
          <li class="nav_li"><a class="nav_a" href="design.html"> 디자인</a></li>
          <li class="nav_li"><a class="nav_a" href="video.html"> 영상</a></li>
          <li class="nav_li"> <a class="nav_a" href="coding.html"> 개발</a></li>
          <li class="nav_li"> <input class="ser" type="text" placeholder="검색"/></li>
          <li class="nav_li"><a class="nav_a" href="login.html"> 로그인</a></li>
          <li class="nav_li"><a class="nav_a nav_btn" href="join.html"> 회원가입 </a></li>
        </ul>
      </nav>
    `;
  }

  // 카테고리 공통
  function category() {
    return `
    <div>
            <p style="font-weight: bolder; margin-top: 10rem;margin-left: 17.5rem; margin-bottom: 2rem;"> 카테고리 </p>
            <ul style="margin-left: 15rem; line-height: 200%;">
                <li style="font-weight: bolder;"> 디자인</li>
                <li><a href="#">로고·브랜딩</a></li>
                <li><a href="#">인쇄·홍보물</a></li>
                <li style="margin-bottom: 1rem;"><a href="#">산업·제품 디자인</a></li>
                <li style="font-weight: bolder;"> 영상</li>
                <li><a href="#">광고·홍보 영상</a></li>
                <li><a href="#">교육 영상</a></li>
                <li><a href="#">유튜브 영상</a></li>
                <li><a href="#">드론 촬영</a></li>
                <li style="margin-bottom: 1rem;"><a href="#">컴퓨터 그래픽</a></li>
                <li style="font-weight: bolder;"> 개발</li>
                <li><a href="#">프론트엔드 개발자</a></li>
                <li><a href="#">백엔드 개발자</a></li>
                <li><a href="#">풀스택 개발자</a></li>
                <li><a href="#">웹·앱 기획자</a></li>
            </ul>
        </div>
`;
  }


  
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var dot = document.getElementsByClassName('dot');
  var con = document.getElementById('con');
  var thisIndex = 0;
  var previousIndex = 0;
  var imageWidth = 1440;

  function navigateTo(data) {

      thisIndex += data;
      // 입력 값 받아와서 저장하기

      console.log(thisIndex);

      // 이미지 움직이기
      con.style.transform = `translateX(-${thisIndex * imageWidth}px)`;
      // translateX("-" + (thisIndex * imageWidth) + "px") 위의 식과 같은 의미

      // 버튼 토글
      if (thisIndex === 0) { // 첫번째 이미지에 있는 경우
          prev.classList.add('hidden');
      } else {
          prev.classList.remove('hidden');
      }

      if (thisIndex === 2) { // 마지막 이미지 일때
          next.classList.add('hidden');
      } else {
          next.classList.remove('hidden');
      }

      // indicator
      dot[thisIndex].classList.add('dot_active');
      dot[previousIndex].classList.remove('dot_active');


      // 이전 인덱스값 구하기 ( 이전 인덱스 값의 현재 인덱스 저장해주면
      //  다음에 받는 현재 인덱스 값이 이전 인택스 값 알 수 있음)
      previousIndex = thisIndex;
    }