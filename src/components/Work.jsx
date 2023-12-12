import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

import img1 from "../assets/survey.png";
import img2 from "../assets/profinder.png";
import img3 from "../assets/ecommerce.png";
import img4 from "../assets/anon.png";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 leading-tight text-accent  mb-20">
            My Latest Projects
          </h2>
          {/* <p className="max-w-md mb-16 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem repellat maiores provident repellendus nesciunt at.
          </p> */}
          {/* <button className="btn-ex btn-sm">View all projects</button> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img4}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">React</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50">
              <span className="text-3xl text-white">
                Anon eCommerce website
              </span>
              <div className="mt-8 flex gap-2">
                <a
                  className="btn-ex btn-sm "
                  href="https://anon-ecommerce-design.netlify.app/"
                >
                  Live Preview
                </a>
                <a
                  className="btn-ex btn-sm "
                  href="https://github.com/jonycmtt/anon-ecommerce-website?tab=readme-ov-file"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img1}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">MERN Stack</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">
                FIMRO Survey Polling Website
              </span>
              <div className="mt-8 flex gap-2">
                <a
                  className="btn-ex btn-sm "
                  href="https://fimro-survey-project.web.app/"
                >
                  Live Preview
                </a>
                <a
                  className="btn-ex btn-sm "
                  href="https://github.com/jonycmtt/Survey-app"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img2}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">Javascript</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">
                {" "}
                Github ProFinder websit
              </span>
              <div className="mt-8 flex gap-2">
                <a
                  className="btn-ex btn-sm "
                  href="https://profind-github.netlify.app/"
                >
                  Live Preview
                </a>
                <a
                  className="btn-ex btn-sm "
                  href="https://github.com/jonycmtt/ProFinder"
                >
                  Code
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={img3}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">Web Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">
                Single page Ecommerce Website Design
              </span>
              <div className="mt-8 flex gap-2">
                <a
                  className="btn-ex btn-sm "
                  href="https://frun-ecommerce.netlify.app/"
                >
                  Live Preview
                </a>
                <a
                  className="btn-ex btn-sm "
                  href="https://github.com/jonycmtt/Frun-Ecommerce-Design"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
