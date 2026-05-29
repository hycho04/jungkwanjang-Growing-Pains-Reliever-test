import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <main className="home-content">
        <img
          src="/src/assets/정관장로고.png"
          alt="정관장 로고"
          className="brand-logo"
        />

        <img
          src="/src/assets/logo big.png"
          alt="청춘통 해소제 테스트 로고"
          className="main-logo"
        />

        <p className="main-description">
          당신의 청춘통 유형을 알아보고 <br />
          맞춤 해소법을 찾아보세요!
        </p>

        <img
          src="/src/assets/imagebig.png"
          alt="청춘통 캐릭터"
          className="main-image"
        />
      </main>

      <footer className="home-footer">
        <button className="start-button" onClick={() => navigate("/test")}>
          시작하기
        </button>

        <p className="footer-text">
          당신의 청춘통을 가볍게 들여다보는 테스트입니다
        </p>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background-color: #0f0c1a;
          font-family: sans-serif;
        }

        .home-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background-color: #0f0c1a;
          color: white;
          overflow: hidden;
        }

        .home-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .brand-logo {
          margin-top: 70px;
          display: block;
          object-fit: contain;
        }

        .main-logo {
          margin-top: 10px;
          display: block;
          object-fit: contain;
        }

        .main-description {
          margin: 10px 0 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.6;
          color: #a3a3a3;
          text-align: center;
        }

        .main-image {
          margin-top: 20px;
          display: block;
          object-fit: contain;
        }

        .home-footer {
          position: absolute;
          left: 0;
          bottom: 50px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .start-button {
          width: 350px;
          height: 75px;
          border: none;
          border-radius: 24px;
          background: linear-gradient(90deg, #834de2 0%, #cb3453 100%);
          color: white;
          font-size: 24px;
          font-weight: 700;
          cursor: pointer;
        }

        .footer-text {
          margin: 20px 0 0;
          font-size: 13px;
          font-weight: 400;
          color: #a3a3a3;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
