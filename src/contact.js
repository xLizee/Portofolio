import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      {/* <h1 className="text-3xl font-bold mb-4">Contactez-moi</h1> */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Coordonnées</h2>
        <p className="text-gray-700">Adresse : 8 rue masséna, 06000 Nice - France </p>
        <p className="text-gray-700">Téléphone : 06 43 74 96 39</p>
        <p className="text-gray-700">Email : alizee.patricola@epitech.eu</p>
        <div className="mt-4 flex items-center justify-center space-x-4">
          <a href="https://github.com/xLizee" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/alizeepatricola/" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
