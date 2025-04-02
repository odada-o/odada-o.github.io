document.addEventListener("DOMContentLoaded", function() {
    // 카운터 요소 선택
    const creatorsElement = document.getElementById('creators-count');
    const usersElement = document.getElementById('users-count');
    const storiesElement = document.getElementById('stories-count');
    
    // CountUp 객체 생성
    const creatorsCounter = new CountUp(creatorsElement, 24, { 
        suffix: ' M+',
        enableScrollSpy: true, // 스크롤 시 자동 시작
        duration: 2.5
    });
    
    const usersCounter = new CountUp(usersElement, 166, { 
        suffix: ' M',
        enableScrollSpy: true, 
        duration: 2.5
    });
    
    const storiesCounter = new CountUp(storiesElement, 900, { 
        suffix: '+',
        enableScrollSpy: true, 
        duration: 2.5
    });
    
    // 에러 처리
    if (!creatorsCounter.error) {
        creatorsCounter.start();
    } else {
        console.error(creatorsCounter.error);
    }
    
    if (!usersCounter.error) {
        usersCounter.start();
    } else {
        console.error(usersCounter.error);
    }
    
    if (!storiesCounter.error) {
        storiesCounter.start();
    } else {
        console.error(storiesCounter.error);
    }
});