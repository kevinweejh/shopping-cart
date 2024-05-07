import bannerImage from './assets/image.png';

const Home = () => {
  return (
    <>
      <h1 className="font-semibold my-2 text-white text-3xl">Home</h1>
      <img src={bannerImage} alt="quaint store"></img>
    </>
  );
};

export default Home;
