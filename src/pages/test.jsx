import { useState } from "react";
import { useNavigate } from "react-router-dom";

import arrowImage from "../assets/arrow.png";
import logoSmall from "../assets/로고small.png";
import imageSmall from "../assets/imagesmall.png";

function Test() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "요즘 나를\n힘들게 하는 것은?",
      options: [
        { key: "A", text: "해야 할 일이 너무 많아서 체력이 방전됨" },
        { key: "B", text: "생각이 많고 마음이 쉽게 지침" },
        { key: "C", text: "반복되는 일상에 기분 전환이 필요함" },
      ],
    },
    {
      question: "힘든 일이\n생기면 나는?",
      options: [
        { key: "A", text: "일단 끝까지 버티고 해내려 함" },
        { key: "B", text: "혼자 쉬면서 천천히 회복함" },
        { key: "C", text: "맛있는 거나 상큼한 걸로 기분을 바꿈" },
      ],
    },
    {
      question: "지금 나에게\n가장 필요한 건?",
      options: [
        { key: "A", text: "하루를 버틸 에너지" },
        { key: "B", text: "편안하게 쉬는 시간" },
        { key: "C", text: "가볍고 산뜻한 리프레시" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelect = (answerKey) => {
    const nextAnswers = [...answers, answerKey];

    if (currentIndex === questions.length - 1) {
      const resultCode = nextAnswers.join("");
      navigate(`/result?code=${resultCode}`);
      return;
    }

    setAnswers(nextAnswers);
    setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      navigate("/");
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setAnswers(answers.slice(0, -1));
  };

  return (
    <div className="test-page">
      <header className="test-header">
        <button className="back-button" onClick={handleBack}>
          <img src={arrowImage} alt="뒤로가기" />
        </button>

        <img
          src={logoSmall}
          alt="청춘통 해소제 테스트"
          className="small-logo"
        />
      </header>

      <section className="progress-section">
        <p className="progress-text">Q {currentIndex + 1}/3</p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </section>

      <section className="question-section">
        <div className="question-text-wrap">
          <p className="question-number">Q {currentIndex + 1}</p>

          <h1 className="question-title">
            {currentQuestion.question.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h1>
        </div>

        <img src={imageSmall} alt="질문 이미지" className="question-image" />
      </section>

      <section className="option-section">
        {currentQuestion.options.map((option) => (
          <button
            key={option.key}
            className="option-card"
            onClick={() => handleSelect(option.key)}
          >
            {option.text}
          </button>
        ))}
      </section>

      <style>{`
        .test-page {
          width: 100%;
          min-height: 100vh;
          background-color: #0f0c1a;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        .test-header {
          margin-top: 20px;
          position: relative;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-button {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .back-button img {
          display: block;
          width: 14px;
          height: 14px;
          object-fit: contain;
        }

        .small-logo {
          display: block;
          object-fit: contain;
        }

        .progress-section {
          margin-top: 36px;
          display: grid;
          grid-template-columns: 46px 1fr;
          align-items: center;
          column-gap: 20px;
          padding-left: 28px;
          padding-right: 20px;
        }

        .progress-text {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          line-height: 10px;
          color: #e1bbff;
          white-space: nowrap;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          border-radius: 15px;
          background-color: #6a6a6a;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 15px;
          background: linear-gradient(90deg, #824de5 0%, #ce3450 100%);
          transition: width 0.3s ease;
        }

        .question-section {
          margin-top: 50px;
          padding-left: 28px;
          padding-right: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .question-text-wrap {
          flex: 1;
          text-align: left;
        }

        .question-number {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: #e1bbff;
          text-align: left;
        }

        .question-title {
          margin: 10px 0 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.55;
          color: #ffffff;
          text-align: left;
          white-space: pre-line;
        }

        .question-image {
          width: 140px;
          margin-left: 10px;
          object-fit: contain;
        }

        .option-section {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .option-card {
          width: 350px;
          height: 70px;
          border: none;
          border-radius: 15px;
          background-color: rgba(246, 241, 255, 0.1);
          color: #ffffff;
          font-size: 14px;
          font-weight: 300;
          text-align: left;
          padding-left: 30px;
          cursor: pointer;
          transition: 0.2s;
        }

        .option-card:hover {
          background-color: rgba(246, 241, 255, 0.15);
        }

        .option-card:active {
          background: linear-gradient(
            90deg,
            rgba(130, 77, 229, 0.4),
            rgba(206, 52, 80, 0.35)
          );
        }
      `}</style>
    </div>
  );
}

export default Test;
