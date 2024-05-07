import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>bruh...</h1>
      <button onClick={() => navigate(-1)}>Bring me back!!</button>
    </>
  );
};

export default ErrorPage;
