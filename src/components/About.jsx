import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { Link } from "react-scroll";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div id="about" className="section my-20" ref={ref}>
      <div className="container mx-auto ">
        <div className="flex lg:items-center lg:gap-x-20 flex-col lg:flex-row gap-y-10  lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once : false, amount : 0.3}}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once : false, amount : 0.3}} className="flex-1 ">
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 font-poppin">
              I'm a Freelance front-end Developer with over 2 years of
              experience
            </h3>
            <p className="mb-6">
            Hey there, I'm Salman Rahaman, a seasoned front-end developer with a passion for transforming ideas into visually captivating and functionally robust digital experiences. 
            </p>

            {/* states */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={13} duration={3}></CountUp>
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={13} duration={3}></CountUp>
                  ) : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={13} duration={3}></CountUp>
                  ) : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact"><button className="btn-ex btn-lg">Contact Me</button></Link>
              <a href="#" className="text-gradient btn-ex-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
