// EmailJS 초기화
(function() {
    emailjs.init("mF5UYEirBq3JjjBVp");
})();

// 폼 제출 이벤트 처리
const form = document.getElementById('applicationForm'); // 여기서 ID 확인
const statusMessage = document.getElementById('statusMessage'); // 상태 메시지 요소

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // 로딩 메시지 표시
    statusMessage.innerText = "공모 신청 중...";
    const submitButton = form.querySelector('button');
    submitButton.disabled = true; // 버튼 비활성화

    emailjs.sendForm('service_kqpxun2', 'template_c2cmie4', this)
        .then(function() {
            statusMessage.innerText = "신청이 완료되었습니다!";
            form.reset(); // 폼 초기화
        }, function(error) {
            console.error("전송 에러: ", error); // 에러 로그 추가
            statusMessage.innerText = "신청에 실패했습니다. 다시 시도해주세요.";
        })
        .finally(function() {
            submitButton.disabled = false; // 버튼 활성화
        });
});