document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const retryBtn = document.getElementById('retry-btn');
    const birthdateInput = document.getElementById('birthdate');
    
    const inputView = document.getElementById('input-view');
    const resultView = document.getElementById('result-view');
    
    const sentenceEl = document.getElementById('fortune-sentence');
    const placeEl = document.getElementById('lucky-place');
    const itemEl = document.getElementById('lucky-item');
    const actionEl = document.getElementById('lucky-action');

    const sentences = [
        "오늘은 평소보다 집중력이 확 오르는 날이에요! 헷갈리던 문제도 술술 풀릴지도 몰라요.",
        "친한 친구와 사소한 오해가 생길 수 있으니, 먼저 다정하게 말을 건네보세요.",
        "작은 용기가 당신의 하루를 빛나게 할 거예요.", /* 이미지에 있는 문구 추가 */
        "오늘은 무리하지 말고 일찍 잠자리에 드는 게 내일의 완벽한 컨디션을 위해 좋아요.",
        "평소 망설이던 일이 있다면 오늘 과감하게 도전해 보세요. 결과가 생각보다 아주 좋을 거예요!",
        "우연히 마주친 사람과 기분 좋은 대화를 나누게 됩니다. 활짝 웃어보세요.",
        "오늘 하루는 내가 주인공! 발표나 앞에 나설 일이 있다면 자신감을 가져도 좋습니다."
    ];

    const places = [
        "학교 매점", "창가 맨 뒷자리", "햇살 드는 도서관", "도서관", "집 앞 편의점", "음수대 앞", "운동장 벤치"
    ];

    const items = [
        "초록색 형광펜", "달콤한 초콜릿", "초록색 필기구", "촉촉한 립밤", "새 연습장", "바나나맛 우유", "깨끗한 지우개"
    ];

    const actions = [
        "친구에게 먼저 반갑게 인사하기", "새로운 사람에게 인사하기", "점심 먹고 가볍게 10분 산책하기", 
        "좋아하는 플레이리스트 크게 듣기", "쉬는 시간에 기지개 3번 켜기", "부모님께 따뜻한 카톡 보내기"
    ];

    function getStringHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash);
    }

    checkBtn.addEventListener('click', () => {
        const birthdate = birthdateInput.value;

        if (!birthdate) {
            alert('생년월일을 입력해 주세요!');
            return;
        }

        const today = new Date().toISOString().split('T')[0]; 
        const seed = getStringHash(birthdate + today);

        const sentence = sentences[seed % sentences.length];
        const place = places[seed % places.length];
        const item = items[seed % items.length];
        const action = actions[seed % actions.length];

        // 이미지 디자인처럼 큰 따옴표는 HTML에 고정해두었으므로 문구만 삽입합니다.
        sentenceEl.textContent = sentence;
        placeEl.textContent = place;
        itemEl.textContent = item;
        actionEl.textContent = action;

        inputView.classList.remove('active');
        inputView.classList.add('hidden');
        
        resultView.classList.remove('hidden');
        resultView.classList.add('active');
    });

    retryBtn.addEventListener('click', () => {
        resultView.classList.remove('active');
        resultView.classList.add('hidden');
        
        inputView.classList.remove('hidden');
        inputView.classList.add('active');
        
        birthdateInput.value = '';
    });
});