import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div id="about" className="section" ref={ref}>
      <div className="container mx-auto ">
        <div>
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          <div>
            <h2>About Me.</h2>
            <h3>I'm a Freelance front-end Developer with over 5 years of experience</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur quia commodi adipisci accusamus maiores, iusto similique et ducimus laborum!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
