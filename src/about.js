import React from 'react';

const experiences = [
  {
    title: "Développeuse Full-Stack (Stage)",
    description: (
      <ul className="list-disc list-inside">
        <li>Création d’un outil pour l’équipe permettant de suivre l’évolution de leur application phare « Readypark »</li>
        <li>Amélioration du site web et de l'application mobile</li>
        <li>Affichage d'informations sur la carte et géocodage</li>
        <li>Utilisation d'APIs REST</li>
        <li>Intégration de micro-services</li>
      </ul>
    ),
    company: "Angels Bay Tech",
    dates: "Avril - Juillet 2022"
  },
  {
    title: "Développeuse Front-end (Stage)",
    description: (
      <ul className="list-disc list-inside">
        <li>Aide au développement de plusieurs sites internet</li>
        <li>Aide à la maintenance de sites internet</li>
        <li>Intégration d'événements sur le site internet d'un client</li>
        <li>Création de PDF avec TypeScript</li>
        <li>Création d'un site web avec Drupal</li>
      </ul>
    ),
    company: "Indigen Solutions",
    dates: "Août - Décembre 2020"
  },
  {
    title: "Développeuse Full-Stack (Stage)",
    description: (
      <ul className="list-disc list-inside">
        <li>Maintenance serveur</li>
        <li>Gestion de bases de données</li>
        <li>Amélioration d’une extension Chrome pour pré-remplir les devis courtier</li>
        <li>Amélioration du back-office</li>
      </ul>
    ),
    company: "DUPLIX",
    dates: "Juin - Mars 2023/2024"
  }
];

const About = () => {
  return (
    <div className="mt-8 px-4">
      <h1 className="text-3xl font-bold mx-auto mb-4 ml-4 pb-8">À propos de moi</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{experience.title}</h2>
            <p className="text-gray-600 mb-4">{experience.description}</p>
            <p className="text-gray-500 text-sm">Société: {experience.company} | Dates: {experience.dates}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
