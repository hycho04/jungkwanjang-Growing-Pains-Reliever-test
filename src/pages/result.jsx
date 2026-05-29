import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const resultCode = location.state?.resultCode;

  return <div>결과 코드: {resultCode}</div>;
}

export default Result;
