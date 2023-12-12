import { FaFacebook, FaGithub, FaYoutube,FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pjnkc6g', 'template_1v2urzs', form.current, '3oiUt0Vno370i60VM')
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Success to send message!",
          icon: "success"
        });
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="py-16 lg:section xl:my-44 " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let&lsquo;s work <br /> together
              </h2>
              <div
               
                className="flex items-center text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
              >
                <h2>Connect Social media :</h2>
                <a href="https://www.youtube.com/jonycmt">
                  <FaYoutube></FaYoutube>
                </a>
                <a href="https://github.com/jonycmtt">
                  <FaGithub></FaGithub>
                </a>
                <a href="https://facebook.com/jonycmt">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.linkedin.com/in/salman-rahaman/">
                  <FaLinkedin></FaLinkedin>
                </a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input required
            name="from_name"
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
            />

            <input required
            name="from_email"
              type="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
            />

            <textarea required
            name="message"
              className="bg-transparent border-b h-28 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>

            <button type="submit" className="btn-ex btn-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
