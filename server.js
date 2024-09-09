const express = require('express');
const path = require('path');
const app = express();

// 8080번 포트에서 서버 시작
app.listen(8080, function () {
  console.log('서버가 8080번 포트에서 실행 중입니다.');
});

// 정적 파일 제공: shop/build 폴더의 파일들
app.use(express.static(path.join(__dirname, 'shop/build')));

// 루트 경로에 대한 요청 처리
app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, 'shop/build', 'index.html'));
});

// 모든 다른 경로에 대한 요청 처리 (React Router를 사용하는 경우)
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, 'shop/build', 'index.html'));
});
