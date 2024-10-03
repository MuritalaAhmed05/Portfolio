"use client";
import { FaFacebook, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const whatsappNumber = "2349020507509";
    const encodedMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="overflow-hidden">
      <div
        className="sm:bg-black bg-[#D7D7D7] flex justify-start min-h-[100vh]"
        data-aos="fade-up"
        data-aos-duration="1000"
        id="home"
      >
        <div className="sm:p-[14rem] md:p-[8rem] p-[2rem] lg:p-[14rem] xl:p-[15rem] flex flex-col justify-center sm:items-start bg-[#D7D7D7] lg:clip-path-polygon w-full sm:w-[55%] items-center ">
          <h2 className="sm:mb-4 mb-2 text-black text-[20px]">Hi, I am</h2>
          <h1
            className="font-bold text-[#000000] text-[2rem] text-nowrap sm:text-[3rem] "
            data-aos="fade-down-left"
            data-aos-duration="1000"
          >
            Muritala Ahmed
          </h1>
          <p className="text-[#909090] font-bold mb-2 sm:mb-0">
            Frontend Developer
          </p>
          <div className="sm:hidden mt-1">
            <Image
              src="separatorBlack 1.svg"
              alt="separatorBlack 1.svg"
              width={170}
              height={12}
            />
          </div>

          <div
            className="flex gap-9 mt-9"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <a href="https://x.com/ahmed_muri50344?s=09">
              <div className="bg-[#C4C4C4] p-2 shadow-custom hover:scale-110 transform transition duration-300">
                <FaXTwitter />
              </div>
            </a>

            <a href="https://github.com/MuritalaAhmed05">
              <div className="bg-[#C4C4C4] p-2 shadow-custom hover:scale-110 transform transition duration-300">
                <FaGithub />
              </div>
            </a>

            <a href="https://wa.me/2349020507509">
              <div className="bg-[#C4C4C4] p-2 shadow-custom hover:scale-110 transform transition duration-300">
                <FaWhatsapp />
              </div>
            </a>

            <a href="https://facebook.com/akinlolu.ifeoluwa.94">
              <div className="bg-[#C4C4C4] p-2 shadow-custom hover:scale-110 transform transition duration-300">
                <FaFacebook />
              </div>
            </a>
          </div>
        </div>

        <div>
          <div className="sm:pt-[3rem] sm:pl-[3rem] sm:flex gap-9 justify-start items-start text-white hidden ">
            <button
              className={`${
                activeButton === "about"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } p-[10px_17px] rounded-[20px] text-xs font-bold`}
              onClick={() => {
                handleButtonClick("about");
                handleScroll("about-section");
              }}
            >
              About me
            </button>
            <button
              className={`${
                activeButton === "skills"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } p-[10px_17px] rounded-[20px] text-xs font-bold`}
              onClick={() => {
                handleButtonClick("skills");
                handleScroll("skills-section");
              }}
            >
              Skills
            </button>
            <button
              className={`${
                activeButton === "project"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } p-[10px_17px] rounded-[20px] text-xs font-bold`}
              onClick={() => {
                handleButtonClick("project");
                handleScroll("project-section");
              }}
            >
              Projects
            </button>
            <button
              className={`${
                activeButton === "contact"
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } p-[10px_17px] rounded-[20px] text-xs font-bold`}
              onClick={() => {
                handleButtonClick("contact");
                handleScroll("contact-section");
              }}
            >
              Contact me
            </button>
          </div>

          <div className="hidden sm:block">
            <div>
              <Image
                src="/ahmed.png"
                alt="ahmed"
                width={350}
                height={350}
                className="mb-0 absolute bottom-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1D1D1D] text-white flex justify-between sm:py-9 sm:px-[10rem] relative  px-[2rem] py-5 bg-[url('html.svg')] bg-cover bg-center">
        <div className="">
          <h1 className="font-bold text-[#b4acac]">Quick Intro</h1>
          <p className="text-xs z-0">
            I&apos;m a passionate frontend developer with a deep interest in
            building intuitive and responsive web interfaces. With a strong
            focus on creating seamless user experiences, I&apos;ve honed my
            skills in HTML, CSS, JavaScript, and modern frameworks like React.
            My journey has been driven by continuous learning and experimenting
            with the latest design trends and technologies. I particularly enjoy
            tackling complex problems and transforming them into elegant,
            user-friendly solutions. In my free time, you can find me watching
            movie, continuously pushing the boundaries of my frontend expertise.
          </p>
        </div>
      </div>

      <div
        className="bg-[#D7D7D7] flex justify-center flex-col space-y-10 items-center sm:px-[10rem] md:px-[8rem] lg:px-[10rem] sm:py-[3rem] md:py-[8rem] lg:py-[10rem] px-[2rem] py-[4rem] sm:min-h-[100vh]"
        data-aos="fade-right"
        data-aos-duration="1000"
        id="about-section"
      >
        <div className="border-[5px] border-black py-3 px-8 tracking-widest">
          ABOUT ME
        </div>

        <p className="text-[18px]">
          Hey there! 👋 I&apos;m Muritala Ahmed, a passionate Frontend Developer
          with a love for crafting sleek and intuitive digital experiences. With
          a keen eye for detail and a knack for problem-solving, I transform
          creative ideas into dynamic web applications. <br />
          <br />
          My journey in tech started with a fascination for how things work
          behind the scenes. This curiosity quickly evolved into a love for
          coding, where I found joy in bringing concepts to life through code.
          I&apos;m always exploring new technologies to stay on the cutting
          edge. When I&apos;m not coding, you can find me exploring the latest
          trends in web design, experimenting with new tech, or diving into a
          good book. <br />
          <br /> My goal is to create beautiful, user-centric websites that not
          only look great but also deliver exceptional performance. Feel free to
          browse through my portfolio to see some of the exciting projects
          I&apos;ve been working on. Let&apos;s connect and see how we can bring
          your next big idea to life!
        </p>

        <div>
          <Image
            src="separatorBlack 1.svg"
            alt="separatorBlack 1.svg"
            width={170}
            height={12}
          />
        </div>
      </div>

      <div
        className="flex flex-col bg-[#b3b3b3] sm:px-[10rem] sm:pt-[10rem] py-[2rem]  items-center justify-center min-h-[100vh] px-[2rem]"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="space-y-11">
          <div
            className="flex flex-col sm:flex-row gap-[3rem]"
            data-aos="slide-down"
            data-aos-duration="1000"
          >
            <div>
              <div className="flex items-center">
                <Image
                  src="design.svg"
                  alt="design.svg"
                  width={55}
                  height={58}
                />
                <p className="font-bold">DESIGN</p>
              </div>
              <p className="text-xs sm:ml-9">
                I offer tailored web design services that bring your ideas to
                life. Whether you have specific requirements or need a complete
                design from scratch, I’ll work closely with you to create a
                visually appealing and functional site that aligns with your
                goals. I ensure the design process is collaborative, keeping you
                involved and updated at every stage.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <Image
                  src="maintenance.svg"
                  alt="maintenance.svg"
                  width={55}
                  height={58}
                />
                <p className="font-bold">DEVELOPMENT</p>
              </div>
              <p className="text-xs sm:ml-9">
                I specialize in building responsive and high-performance
                websites tailored to your unique needs. Whether starting from
                your existing design or developing a fully custom solution from
                the ground up, I ensure that every aspect of the project is
                aligned with your vision. From front-end to back-end, I deliver
                a seamless and efficient development process while keeping you
                informed and engaged throughout.
              </p>
            </div>
          </div>
          <div
            className="flex justify-end sm:items-center flex-col"
            data-aos="slide-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center">
              <Image
                src="develop.svg"
                alt="develop.svg"
                width={62}
                height={64}
              />
              <p className="font-bold">MAINTENANCE</p>
            </div>
            <p className="text-xs  sm:w-[500px]">
              I provide ongoing maintenance and support to ensure your website
              remains up-to-date, secure, and running smoothly. From regular
              updates and bug fixes to performance optimization, I offer
              proactive solutions to keep your site in top shape. I’m committed
              to long-term support and timely interventions, so your site stays
              fully functional as your needs evolve.
            </p>
          </div>
        </div>
        <div className="sm:my-[7rem] my-[3rem]">
          <Image
            src="separatorBlack 1.svg"
            alt="separatorBlack 1.svg"
            width={170}
            height={12}
          />
        </div>
      </div>

      <div
        className="bg-[#e6e6e6] flex justify-center flex-col space-y-10 py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 min-h-screen"
        id="skills-section"
      >
        <div className="border-[5px] border-black py-3 px-8 sm:px-12 font-bold tracking-widest self-center">
          SKILLS
        </div>
        <p className="font-bold tracking-widest self-start pl-20 sm:pl-[4rem] text-[1.5rem]">
          Using Now:
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Group 12 (1).svg"
              alt="Group 12 (1).svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#ff5722]">HTML</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Group 13.svg"
              alt="Group 13.svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#2196f3]">CSS</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Group (1).svg"
              alt="Group (1).svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#F7DF1E]">JAVASCRIPT</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Group 14.svg"
              alt="Group 14.svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#53C1D3]">REACT</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="git.svg"
              alt="git.svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#F05033]">GIT</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="next.svg"
              alt="next.svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-black">NEXT.JS</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="figma.svg"
              alt="figma.svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#A259FF]">FIGMA</span>
          </div>
          
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Group (2).svg"
              alt="Group (2).svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#007ACC]">TYPESCRIPT</span>
          </div>
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
         data-aos="flip-up"
          data-aos-duration="1000"
        >
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Vector (6).svg"
              alt="Vector (6).svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#00546B]">MY SQL</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Group (3).svg"
              alt="Group (3).svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#539E43]">NODE JS</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="Vector (7).svg"
              alt="Vector (7).svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#10AA50]">MONGO DB</span>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image
              src="tailwind.svg"
              alt="tailwind.svg"
              width={45}
              height={55}
              className="mx-auto"
            />
            <span className="font-bold text-[#44AAB3]">TAILWIND</span>
          </div>
        </div>
      </div>

      <div
        className="bg-[#999999] flex justify-center flex-col space-y-10 py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 min-h-screen"
        id="project-section"
        data-aos="slide-left"
        data-aos-duration="1000"
      >
        <div className="border-[5px] border-black py-3 px-8 sm:px-12 font-bold tracking-widest self-center">
          PROJECTS
        </div>

        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link
              href="https://analog-clock-two-chi.vercel.app"
              className="p-8 sm:p-12 bg-[#d9d9d9] shadow-md rounded-lg hover:scale-105 hover:shadow-lg transform transition duration-300 flex justify-center items-center text-center font-bold"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="6000"
            >
              ANALOG CLOCK
            </Link>
            <Link
              href="https://calc-eta-umber.vercel.app"
              className="p-8 sm:p-12 bg-[#d9d9d9] shadow-md rounded-lg hover:scale-105 hover:shadow-lg transform transition duration-300 flex justify-center items-center text-center font-bold"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-delay="5000"
            >
              SIMPLE CALCULATOR
            </Link>
            <Link
              href="https://cart-sigma-sandy.vercel.app"
              className="p-8 sm:p-12 bg-[#d9d9d9] shadow-md rounded-lg hover:scale-105 hover:shadow-lg transform transition duration-300 flex justify-center items-center text-center font-bold"
              data-aos="zoom-in-out"
              data-aos-duration="3000"
              data-aos-delay="1000"
            >
              A SIMPLE CART PAGE
            </Link>
            <Link
              href="https://crush-message-qgzt.vercel.app/"
              className="p-8 sm:p-12 bg-[#d9d9d9] shadow-md rounded-lg hover:scale-105 hover:shadow-lg transform transition duration-300 flex justify-center items-center text-center font-bold"
              data-aos="zoom-in-left"
              data-aos-duration="4000"
              data-aos-delay="1000"
            >
              SEND MESSAGE TO YOUR CRUSH
            </Link>
            <Link
              href="https://timbu-shop-kappa.vercel.app"
              className="p-8 sm:p-12 bg-[#d9d9d9] shadow-md rounded-lg hover:scale-105 hover:shadow-lg transform transition duration-300 flex justify-center items-center text-center font-bold"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              TIMBU SHOPPING WEBSITE
            </Link>
            <div
              className="p-8 sm:p-12 bg-[#d9d9d9] shadow-md rounded-lg hover:scale-105 hover:shadow-lg transform transition duration-300 flex justify-center items-center text-center font-bold"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              More Projects
            </div>
          </div>
        </div>

        <div className="bg-[#442f2f] text-white text-center py-3">
          And more to come....
        </div>
      </div>

      <div
        className="bg-[#b3b3b3] flex justify-center flex-col items-center space-y-10 py-8 min-h-[100vh] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
        id="contact-section"
        // data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="border-[5px] border-black py-3 px-8 sm:px-12 font-bold tracking-widest self-center"
        data-aos="slide-down"
  data-aos-duration="1000"
        >
          CONTACT
        </div>
        <p className="text-sm mt-4 text-center max-w-2xl mx-auto"
        data-aos="slide-left"
  data-aos-duration="1000"
        >
          If you have any questions, need more information, or want to
          collaborate on a project, feel free to reach out! I&apos;m always open
          to discussing new ideas, opportunities, or even just a quick chat
          about frontend development. Let&apos;s connect and see how we can
          bring your vision to life!
        </p>

        <div>
          <Image
            src="separatorBlack 1.svg"
            alt="separatorBlack 1.svg"
            width={170}
            height={12}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-lg mx-auto flex flex-col items-center overflow-hidden"
          data-aos="zoom-out"
  data-aos-duration="1000"
        >
          <div className="border-black border-custom w-full pl-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent outline-none border-none w-full placeholder:text-xs placeholder:text-[#8B8B8B] text-sm md:text-base"
              placeholder="ENTER YOUR NAME"
              required
            />
          </div>
          <div className="border-black border-custom w-full pl-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none border-none w-full placeholder:text-xs placeholder:text-[#8B8B8B] text-sm md:text-base"
              placeholder="ENTER YOUR EMAIL"
              required
            />
          </div>
          <div className="border-black border-custom w-full pl-2">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent outline-none border-none w-full placeholder:text-xs placeholder:text-[#8B8B8B] text-sm md:text-base"
              placeholder="PHONE NUMBER"
              required
            />
          </div>
          <div className="border-black border-custom w-full pl-2">
            <textarea
              cols={20}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent outline-none border-none w-full placeholder:text-xs placeholder:text-[#8B8B8B] text-sm md:text-base"
              style={{ resize: "none" }}
              placeholder="YOUR MESSAGE"
              required
            ></textarea>
          </div>
          <div className="border-customBtn border-black text-xs md:text-sm px-4 py-2 font-bold tracking-widest flex justify-center items-center ">
            <button
              type="submit"
              className="border-none bg-transparent outline-none"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <footer className="bg-[#1A1A1A] flex flex-col items-center space-y-6 text-white py-4 px-6 sm:px-32 cursor-pointer min-h-[5vh]">
        <div
          className="flex flex-col items-center gap-2"
          onClick={() => {
            handleScroll("home");
          }}
        >
          <MdKeyboardDoubleArrowUp />
          <p>BACK TO TOP</p>
        </div>

        <div className="flex gap-3">
          <a href="https://x.com/ahmed_muri50344?s=09" className="w-8 h-8">
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com/akinlolu.ifeoluwa.94"
            className="w-8 h-8"
          >
            <FaFacebook />
          </a>
          <a href="https://wa.me/2349020507509" className="w-8 h-8">
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/muritala-ahmed-03803226a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="w-8 h-8"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:muritalaahmed407@gmail.com" className="w-8 h-8">
            <MdOutlineEmail />
          </a>
        </div>

        <p className="text-sm text-center">
          @2024 Muritala Ahmed All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
