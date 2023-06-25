const quotes = [
    {
        quote: "주어진 시간과 예산 내에서 최선의 결과를 뽑는것. 그것이 마이스터라는 거야.",
        author: "히비키"
    },
    {
        quote: "모든 것이 헛될지라도 바로 오늘 최선을 다하지 않으면 안돼.",
        author: "아즈사"
    },
    {
        quote: "귀찮지만 할 일은 해야겠지. 그게 내 의무니까.",
        author: "히나"
    },
    {
        quote: "말보다 행동으로",
        author: "사키"
    },
    {
        quote: "적당히 하자고~ 여유가 중요한거니까.",
        author: "호시노"
    },
    {
        quote: "어라, 하니까 되시잖아요?",
        author: "아코"
    },
    {
        quote: "노력이 보답받는건 정말 기쁜일이죠.",
        author: "미도리"
    },
    {
        quote: "빛이 인도해줄 거에요.",
        author: "아리스"
    },
    {
        quote: "한가한 것도 좋지만 할일이 쌓여있지 않아?",
        author: "세리카"
    },
    {
        quote: "어서오세요 선생님. 선생님의 결재를 기다리는 서류들이 여기 있습니다.",
        author: "치나츠"
    },
    {
        quote: "오늘은 어떤 업무를 하실 건가요?",
        author: "아야네"
    }, 
    {
        quote: "어서오세요 선생님. 선생님의 결재를 기다리는 서류들이 여기 있습니다.",
        author: "치나츠"
    },
    {
        quote: "선~생~님~ 조금 더 노력해주세요!",
        author: "유우카"
    },
    {
        quote: "어서 와, 선생. 그럼 일을 시작해볼까.",
        author: "카요코"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;