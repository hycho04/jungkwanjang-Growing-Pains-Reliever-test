import { useLocation, useNavigate } from "react-router-dom";

import logoSmall from "../assets/로고small.png";
import filmImage from "../assets/에브리타임필름컴피.png";
import comfyImage from "../assets/에브리타임필름컴피.png";
import mangoImage from "../assets/에브리타임플레이버망고.png";
import pearImage from "../assets/에브리타임플레이버망고.png";
import sevenberryImage from "../assets/에브리타임플레이버망고.png";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const resultCode = params.get("code") || "AAA";

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  const results = {
    film: {
      typeName: "버티는 불도저형",
      description: "멈추지 않고 끝까지 해내는 당신을 위한 에너지 충전",
      productName: "에브리타임 필름",
      productImage: filmImage,
      productColor: "#FFEFF1",
      reason: "바쁜 하루 속에서도 가볍게 챙길 수 있는 데일리 필름",
    },
    comfy: {
      typeName: "오늘은 쉬어도 되형",
      description: "열심히 달려온 오늘, 이제는 쉬어도 괜찮아요",
      productName: "에브리타임 필름 컴피",
      productImage: comfyImage,
      productColor: "#FAEEFF",
      reason: "자기 전 가볍게 챙기기 좋은 컴피 타입",
    },
    mango: {
      typeName: "활력 충전형",
      description: "의욕이 떨어진 요즘, 상큼한 에너지가 필요한 타입",
      productName: "에브리타임 플레이버 망고",
      productImage: mangoImage,
      productColor: "#FDF1D5",
      reason: "밝고 달콤한 망고 맛으로 무기력한 순간을 환기",
    },
    pear: {
      typeName: "밸런스 회복형",
      description: "지치지도 들뜨지도 않게, 균형을 찾고 싶은 타입",
      productName: "에브리타임 플레이버 배",
      productImage: pearImage,
      productColor: "#F2FDD5",
      reason: "부담 없이 즐기기 좋은 부드럽고 깔끔한 배 맛",
    },
    sevenberry: {
      typeName: "리프레시형",
      description: "반복되는 일상 속 기분 전환이 필요한 타입",
      productName: "에브리타임 플레이버 세븐베리",
      productImage: sevenberryImage,
      productColor: "#FDEFFF",
      reason: "상큼한 베리 맛으로 기분을 가볍게 리프레시",
    },
  };

  const resultMap = {
    AAA: "film",
    AAB: "film",
    ABA: "film",

    BBB: "comfy",
    BBA: "comfy",
    BAB: "comfy",
    ABB: "comfy",

    CAA: "mango",
    CAC: "mango",
    ACA: "mango",
    BCA: "mango",

    ABC: "sevenberry",
    ACC: "sevenberry",
    CCB: "sevenberry",
    CCC: "sevenberry",
    CBC: "sevenberry",
  };

  const resultKey = resultMap[resultCode] || "pear";
  const result = results[resultKey];

  return (
    <div className="result-page">
      <header className="result-header">
        <img
          src={logoSmall}
          alt="청춘통 해소제 테스트"
          className="small-logo"
        />
      </header>

      <main className="result-content">
        <h1 className="type-name">{result.typeName}</h1>

        <p className="type-description">{result.description}</p>

        <img
          src={result.productImage}
          alt={result.productName}
          className="product-image"
        />

        <h2 className="product-name" style={{ color: result.productColor }}>
          {result.productName}
        </h2>

        <p className="reason-text">{result.reason}</p>
      </main>

      <footer className="home-footer">
        <button className="start-button" onClick={handleCopyLink}>
          결과 링크 복사하기
        </button>

        <p className="footer-text" onClick={() => navigate("/")}>
          청춘통 해소제 테스트 다시 하기
        </p>
      </footer>

      <style>{`
        html,
        body {
          overflow: hidden;
          height: 100%;
          overscroll-behavior: none;
        }
        .result-page {
          width: 100%;
          min-height: 100vh;
          background-color: #0f0c1a;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        .result-header {
          margin-top: 20px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .small-logo {
          display: block;
          object-fit: contain;
        }

        .result-content {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 28px;
        }

        .type-name {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          color: #e1bbff;
          text-align: center;
        }

        .type-description {
          margin: 20px 0 0;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.6;
          color: #dfdfdf;
          text-align: center;
        }

        .product-image {
          margin-top: 10px;
          display: block;
          max-width: 260px;
          max-height: 230px;
          object-fit: contain;
        }

        .product-name {
          margin: 10px 0 0;
          font-size: 18px;
          font-weight: 500;
          text-align: center;
        }

        .reason-text {
          margin: 15px 0 0;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.6;
          color: #dfdfdf;
          text-align: center;
        }

        .home-footer {
          position: absolute;
          left: 0;
          margin-top : 50px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .start-button {
          width: 350px;
          height: 65px;
          border: none;
          border-radius: 15px;
          background: linear-gradient(90deg, #834de2 0%, #cb3453 100%);
          color: white;
          font-size: 18px;
          font-weight: 400;
          cursor: pointer;
        }

        .footer-text {
          margin: 20px 0 0;
          font-size: 12px;
          font-weight: 400;
          color: #a3a3a3;
          text-align: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Result;
