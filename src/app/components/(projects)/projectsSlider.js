"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./projectsSlider.css";
import Carousel from "react-bootstrap/Carousel";
import { motion } from 'framer-motion';
import ItemsData from "../../../../public/Items.json";
import ProjectItem from "./projectItem";
const { items } = ItemsData;

//Define all projects data hard-code in this constant projectsData
const projectsData = [
  {
    id: 1,
    image: "/assets/img/tokenvale.png",
    title: "TokenWale",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://www.tokenwale.in/",
    description: "Crypto Project"
  },
  {
    id: 2,
    image: "/assets/img/imbuzi (2).png",
    title:"Imbuzi Fashion Brand",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Shopify"],
    url: "https://imbuzi.in/",
    description: "IMBUZI, an e-commerce platform on Shopify, specializes in premium streetwear. It features an ambassador program, a blog for fashion content, and integrates with social media for brand outreach. Key services include a refund policy, store locator, SEO optimization, and promotional offers."
  },
  {
    id: 3,
    image: "/assets/img/medinoble.png",
    title: "Medinobel",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Flutter", "Firebase", "Push Notification", "Git", "Github"],
    url: "https://www.medinobel.com/",
    description: "Medinobel is an innovative app connecting patients with doctors and hospitals. Utilizing Flutter for front-end and Firebase for back-end, it offers a seamless, cross-platform user experience. Key features include intuitive UI/UX, patient and doctor profile management, appointment scheduling, and enhanced security measures like data encryption. The app focuses on user accessibility, efficient search functionalities, and incorporates user analytics for continuous improvement. With its unique selling proposition, Medinobel stands out by offering comprehensive healthcare management solutions."
  },{
    id: 4,
    image: "/assets/img/guestinme.png",
    title: "GuestInMe Club App",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Flutter", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.guestinme.guestinme",
    description: "GuestInMe Club App, built with Flutter and Firebase, offers a unified nightlife experience. It allows users to discover events, gain exclusive access, and make in-app purchases. Key features include push notifications, loyalty programs, and user analytics for continuous app improvement."
  },
  {
    id: 5,
    image: "/assets/img/showworld.png",
    title: "Show World Film Directory",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Flutter", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.showworld.showworldfilmdirectory&hl=en_IN&gl=US",
    description: "Show World Film Directory, designed with Flutter and Firebase, serves as a comprehensive tool for the Indian film industry. It features an extensive database of industry contacts and stays updated with the industry dynamics. The directory is accessible on multiple platforms with an active online presence."
  },
  {
    id: 6,
    image: "/assets/img/stripenft.png",
    title: "The Stripes NFT",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["HTML", "CSS", "JavaScript", "ERC-721", "ERC-1155"],
    url: "https://www.youtube.com/playlist?list=PLwXSCBuwy1QuSccdzqB6coWYDhJCx-CRk",
    description: "The Stripes NFT Minting Dapp, using standard web technologies, enables users to mint NFTs and manage wallet connectivity. It focuses on responsive design, user guidance, and secure transactions, complying with NFT standards for Ethereum blockchain integration."
  },{
    id: 7,
    image: "/assets/img/vegaauto.png",
    title: "Vega Auto Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://vegaauto.com/",
    description: "Motor gear brand"
  },{
    id: 8,
    image: "/assets/img/watermelon.png",
    title: "Watermelon Gang Creative Agency Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://thewatermelongang.com/",
    description: "An exceptional marketing agency"
  },{
    id: 9,
    image: "/assets/img/edtech.png",
    title: "Ed-tech Platform",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://courses.alisolanki.com/",
    description: "Hands On Courses, created by Ali Solanki, offers practical and impactful learning experiences. With a 'Learn by Doing' approach, our courses skip the unnecessary fluff and focus on teaching you valuable, useful skills. Embrace self-education and unlock your full potential with our wide range of courses. Discover the power of hands-on learning and take your knowledge and career to new heights."
  },{
    id: 10,
    image: "/assets/img/kasuloyalty.png",
    title: "Kasu Loyalty",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["Javascript", "Blockchain"],
    url: "https://kasu-ui.vercel.app/",
    description: "Blockchain based loyalty program through $KASU tokens"
  },{
    id: 11,
    image: "/assets/img/helperai.png",
    title: "Helper AI Chrome Extension",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://helper-ai.alisolanki.com/",
    description: "Chrome Extension"
  },{
    id: 12,
    image: "/assets/img/kartracing.png",
    title: "Kart Racing League Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://krl-ui.vercel.app/",
    description: "Blockchain game"
  },{
    id: 13,
    image: "/assets/img/typerai.png",
    title: "Typer AI Webapp",
    tags: ["Content Generation", "Social Media"],
    techStack: ["Javascript", "AI"],
    url: "https://typer-ai.vercel.app/",
    description: "Typer AI revolutionizes social media content creation by generating personalized content ideas. It matches users' writing styles for platforms like LinkedIn and YouTube, making content creation seamless and impactful."
  },{
    id: 14,
    image: "/assets/img/snetsdk2.png",
    title: "Singularity Net SDK",
    tags: ["Branding", "UI/UX", "Development"],
    techStack: ["ReactJS", "Blockchain", "Ethereum SDKs"],
    url: "https://singularity-boilerplate-r67r.vercel.app/",
    description: "Singularity Net SDK, leveraging React.js , facilitates a responsive web experience adn integration with an SDK updated by Metarizz Tech Agency. The tool emphasizes interactive UI, service breakdown, and effective communication strategies, including visual icons, clear call to action, and SEO best practices."
  }
  // ... other projects to be added here ...
];

export default function ProjectsSlider() {
  const fadeInLeftVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };
  
  const fadeInRightVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.1 }
  };
  
  const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.1 }
  };

  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //For tracking mobile view and rendering default bootstrap component instead of 3 chunks
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  //For viweing 3 projects in one horzintal row viewport 
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  
  const chunkedProjects = chunkArray(projectsData, 3);

  return (
    <>
      {/* <!-- Project Slider Two --> */}
      <section className="project_slider_two" id="projects-section">
        <div className="container">
          <div className="row cstm_projectsslider_title_button align-items-center">
            <div className="col-lg-6">
              <div className="section_title">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={fadeInLeftVariants}
                className="section_title"
              >
                Explore some <br />
                amazing projects
              </motion.h2>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="project_slider_btn cstm_projectsslider_title_button_inside">
              <motion.a
                href="#contact-section"
                className="bg_btn"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                variants={fadeInLeftVariants}
              >
                View all projects <FontAwesomeIcon icon={faArrowRight} />
              </motion.a>
              </div>
            </div> */}
          </div>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="custom_carousel"
        >
          {isMobileView ? (
            // Mobile view: Render single item per slide
            projectsData.map((project) => (
              <Carousel.Item key={project.id}>
                <ProjectItem {...project} />
              </Carousel.Item>
            ))
          ) : (
            // Desktop view: Render chunked items per slide
            chunkedProjects.map((projectGroup, groupIndex) => (
            <Carousel.Item key={groupIndex} interval={3000}>
              <div className="container">
                <div className="row">
                  {projectGroup.map((project) => (
                    <div className="col-lg-4" key={project.id}>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeftVariants}>
                        <ProjectItem {...project} />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            )
          ))}
          {/* {bootstrap.map((item) => (
            <Carousel.Item
              key={item.id}
              interval={3000}
            >
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeftVariants}
                  className="single_project_slider_two"
                >
                <img
                  src="/assets/img/medinobel.png"
                  alt=""
                  className="carousel_img"
                />
                <ul className="list-unstyled custom_carousel_list">
                  <li>
                    <a href="portfolio-single.html" className="tag_btn">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-single.html" className="tag_btn">
                      Ui/ux
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-single.html" className="tag_btn">
                      Development
                    </a>
                  </li>
                </ul>
              </motion.div>
              <div className="project_bottom">
                <h4>
                  <a href="portfolio-single.html">
                    Collateral Design for Globex which is mentioned here
                  </a>
                </h4>
                <a className="project_btn" href="portfolio-single.html">
                  View project
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </Carousel.Item>
          ))} */}
          </Carousel>

          {/* <Carousel
          indicators={true}
          variant="dark"
          className="min_project_slider_two_area"
          >
          <Carousel.Item key={1} interval={3000}>
            <img src="/assets/img/project/5.png" alt="" />
            <Carousel.Caption>
              <h3>Hello World</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item key={2} interval={3000}>
            <img src="/assets/img/project/5.png" alt="" />
            <Carousel.Caption>
              <h3>Hello World</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="single_project_slider_two wow fadeInLeft">
            <div className="project_top">
              <img src="/assets/img/project/5.png" alt="" />
              <ul className="tags list-unstyled">
                <li>
                  <a href="portfolio-single.html">Branding</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Ui/ux</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Development</a>
                </li>
              </ul>
            </div>
            <div className="project_bottom">
              <h4>
                <a href="portfolio-single.html">Collateral Design for Globex</a>
              </h4>
              <a className="project_btn" href="portfolio-single.html">
                View project
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="project_top">
              <img src="/assets/img/project/5.png" alt="" />
              <ul className="tags list-unstyled">
                <li>
                  <a href="portfolio-single.html">Branding</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Ui/ux</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Development</a>
                </li>
              </ul>
            </div>
            <div className="project_bottom">
              <h4>
                <a href="portfolio-single.html">Collateral Design for Globex</a>
              </h4>
              <a className="project_btn" href="portfolio-single.html">
                View project
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="project_top">
              <img src="/assets/img/project/5.png" alt="" />
              <ul className="tags list-unstyled">
                <li>
                  <a href="portfolio-single.html">Branding</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Ui/ux</a>
                </li>
                <li>
                  <a href="portfolio-single.html">Development</a>
                </li>
              </ul>
            </div>
            <div className="project_bottom">
              <h4>
                <a href="portfolio-single.html">Collateral Design for Globex</a>
              </h4>
              <a className="project_btn" href="portfolio-single.html">
                View project
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </Carousel.Item>
        </Carousel> */}

        {/* <div className="min_project_slider_two_area">

        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/5.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.html">Branding</a>
              </li>
              <li>
                <a href="portfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.html">Development</a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/6.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.html">Branding</a>
              </li>
              <li>
                <a href="portfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.html">Development</a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/7.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.html">Branding</a>
              </li>
              <li>
                <a href="portfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.html">Development</a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div
          className="single_project_slider_two wow fadeInLeft"
          data-wow-delay="0.5s"
        >
          <div className="project_top">
            <img src="/assets/img/project/6.png" alt="" />
            <ul className="tags list-unstyled">
              <li>
                <a href="portfolio-single.htmlportfolio-single.html">
                  Branding
                </a>
              </li>
              <li>
                <a href="portfolio-single.htmlportfolio-single.html">Ui/ux</a>
              </li>
              <li>
                <a href="portfolio-single.htmlportfolio-single.html">
                  Development
                </a>
              </li>
            </ul>
          </div>
          <div className="project_bottom">
            <h4>
              <a href="portfolio-single.html">Collateral Design for Globex</a>
            </h4>
            <a className="project_btn" href="portfolio-single.html">
              View project
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        {/* </Flickity> */}
        {/* <div className="shape_img">
        <motion.img
          src="/assets/img/project/shape/5/1.png"
          alt=""
          className="one"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
        />
        <motion.img
          src="/assets/img/project/shape/5/2.png"
          alt=""
          className="two"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
        />
        </div>
        </div> */}
      </section>
      {/* <!-- Project Slider Two --> */}
    </>
  );
}
