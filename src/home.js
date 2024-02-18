import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-beigeBackground to-beigeNav">
      <h1 className="text-4xl font-bold mb-4">Alizée Patricola</h1>
      <p className="text-lg mb-8">Développeuse passionnée par la création de solutions innovantes.</p>

      {/* </div> */}
      <Link to="/about" className="mt-8 bg-beigeBtnState text-beigeTitles px-6 py-3 rounded-lg shadow-md hover:bg-beigeNav hover:text-white transition duration-300 ease-in-out">En savoir plus</Link>
    </div>
  );
}

export default Home;
