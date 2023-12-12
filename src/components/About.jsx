import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { Link } from "react-scroll";
import { MdDateRange } from "react-icons/md";

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
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 font-poppin">
              I'm a Freelance front-end Developer with over 2 years of
              experience
            </h3>
            <p className="mb-6">
              Hey there, I'm Salman Rahaman, a seasoned front-end developer with
              a passion for transforming ideas into visually captivating and
              functionally robust digital experiences.
            </p>

            {/* states */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={2} duration={3}></CountUp>
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
                    <CountUp start={0} end={50} duration={3}></CountUp>
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={10} duration={3}></CountUp>
                  ) : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              {/* <button className="btn-ex btn-lg">See More</button> */}
              <button
                className="btn-ex btn-lg"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                See More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start timeline-box">
                  <span className="text-accent flex items-center gap-2">
                    {" "}
                    <MdDateRange /> 2013-2014
                  </span>
                  <h2 className="text-2xl font-semibold">
                    {" "}
                    General Science(SSC)
                  </h2>
                  <p>
                    I completed SSC in 2015 from R.K State High School,
                    Thakurgaon with Science Dipartment.From this time on, I
                    started to feel love for computer.
                  </p>
                </div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
               
                    <span className="text-accent flex items-center gap-2">
                      {" "}
                      <MdDateRange /> 2015-2017
                    </span>
                    <h2 className="text-2xl font-semibold">
                      {" "}
                      General In Buseness Study
                    </h2>
                    <p>
                      I was a student in the business education department of
                      Thakurgaon Government College. Recently in 2017, I
                      completed Intermediate from this college. Although the
                      business study did not have much of a computer. However, I
                      was determined to read some of my own needs
                    </p>
                
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start timeline-box">
                 
                    <span className="text-accent flex items-center gap-2">
                      {" "}
                      <MdDateRange /> 2017-2021
                    </span>
                    <h2 className="text-2xl font-semibold">
                      {" "}
                      Diploma In Computer Science
                    </h2>
                    <p>
                    I'm Completed studying Computer Science at Thakurgaon Polytechnic Institute. This is a 4 year diploma. In fact, I want to learn about programming. So I am doing diploma in computer department.
                    </p>
                  </div>
           
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              {/* <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">iPhone</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box">Apple Watch</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default About;
