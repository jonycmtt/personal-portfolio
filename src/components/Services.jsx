import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const services = [
  {
    name: "UI/UX Design",
    Description:
      "I can do as much as needed to convert a design into a web convert. Example: Figma to HTML, xd to HTML PhD to HTML",
    link: "Learn more",
  },
  {
    name: "Front End Web Development",
    Description:
      "Passionate Front-End Developer with 2 years of experience, specializing in React. Dedicated to creating dynamic and user-friendly web applications. ",
    link: "Learn more",
  },
  {
    name: "MERN Stack Development",
    Description:
      "Aspiring MERN Stack Developer in the learning phase, gaining proficiency in MongoDB, Express.js, React, and Node.js. Eager to apply this comprehensive skill set to create robust and modern web applications",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    Description:
      "Dedicated to elevating brands through strategic product branding. I blend creativity with strategy to build compelling and memorable brand identities.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="service" className="section lg:my-52 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6 capitalize">experience</h2>
            <h3 className="h3 max-w-[455px] mb-6">
              I'm a Freelance front-end Developer with over 2 years of
              experience
            </h3>

            <span className="btn-ex btn-lg px-5 py-2 ">See my Skills</span>

            <div className="mt-10 flex flex-col ">
              <div className="flex gap-4 flex-row flex-wrap my-5 justify-start items-center">
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Html
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">css</span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Javascript
                  </span>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap flex-row my-5 justify-start items-center">
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    React
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    SCSS
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Tailwind
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Bootstrap
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Firebase
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 flex-row my-5 justify-start items-center">
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Node.js
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    MongoDB
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    express.js
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="btn-ex btn-lg px-5 py-2">Others Skills</span>
              <div className="flex flex-wrap gap-4 flex-row my-5 justify-start items-center">
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                  Netlify
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Vercel
                  </span>
                </div>
                
              </div>
              <div className="flex flex-wrap gap-4 flex-row my-5 justify-start items-center">
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                  VS Code 
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Atom
                  </span>
                </div>
                <div className="skill capitalize">
                  <span className="p-2 px-5 bg-accent rounded-[30px]">
                    Sublime
                  </span>
                </div>
                
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, Description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {Description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn-ex w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight></BsArrowUpRight>
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
