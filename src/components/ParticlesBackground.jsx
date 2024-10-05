import { useCallback } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  //   const particlesInit = async (main) => {
  //     console.log(main);
  //     await loadFull(main);
  //   };

  //   const particlesLoaded = (container) => {
  //     console.log(container);
  //   };

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
      }}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;
