/** 
* 웹 어플리케이션 개발시 일반적으로 처리해야 할 작업
* 1. 로깅(logger.js)
* 2. url 텍스트 인코딩
* 3. POST 방식의 요청 바디 파싱
* 4. JSON 방식의 데이터 파싱
* 5. 쿠키 파싱
* 6. 정적인 자원 응답(static.js)
* 7. 세션 관리
* 8. 동적인 자원 응답
* 9. 파일 업로드
* 10. 보안(인증, 권한)
* 11. 에러 처리
* ......
 */
const path = require('node:path');
const static = require('./middleware/static')(path.join(__dirname, 'public'));
const logger = require('./middleware/logger')();

// requestListener
function app(req, res){
    static(req, res, function(){
        logger(req, res);
    });
}

module.exports = app;