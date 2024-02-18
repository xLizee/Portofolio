import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#f8f5f0",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false, // Désactiver les événements onClick
          },
          onHover: {
            enable: false, // Désactiver les événements onHover
          },
        },
      },
      particles: {
        color: {
          value: "#d8c3a5",
        },
        links: {
          enable: false, // Désactiver les liens entre les particules
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1, // Ajustez la vitesse ici
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800, // Ajustez la densité ici
          },
          value: 40, // Ajustez le nombre de particules ici
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", // Utiliser des cercles comme forme de particules
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};
