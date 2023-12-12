import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[70vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left lg:gap-x-12">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[60px]"
            >
              Salman Rahaman
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "Designer",
                  2000,
                  "Content Creator",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a FrontEnd web developer, Mentor, and Content Creator. And I am looking for a full stack web development ropes exploring
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max  gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
             <Link to="contact"> <button className="btn-ex btn-lg"> Contact Me</button></Link>
              {/* <a className="text-gradient btn-ex-link" href="#">
                Download CV
              </a> */}
            </motion.div>
            <motion.div  variants={fadeIn("up", 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once : false,amount : 0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.youtube.com/jonycmt">
                <FaYoutube></FaYoutube>
              </a>
              <a href="https://github.com/jonycmtt">
                <FaGithub></FaGithub>
              </a>
              <a href="https://facebook.com/jonycmt">
                <FaFacebook></FaFacebook>
              </a>
            </motion.div>
          </div>
          <motion.div  variants={fadeIn("down", 0.5)}
              initial='hidden'
              whileInView={'show'}
             className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
