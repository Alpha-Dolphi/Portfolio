import React from "react";
import myPhoto from "../../assets/myPhoto.png";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BsTelegram } from "react-icons/bs";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
import Particles from "react-tsparticles";
import laptop from "../../assets/laptop.png";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import skills from "./skillsData.js";
import "./styles.css";
import projectsData from "./projectsData";

export default function Content() {
  const particlesInit = async (engine) => {
    await loadSeaAnemonePreset(engine);
  };

  return (
    <div className="body">
      <section id="welcome-section">
        <div className="first-column">
          <p>
            Здравствуйте! Меня зовут Богдан, мне 20 лет, и я начинающий
            frontend-разработчик. Недавно я закончил два курса по Javascript и
            React, что дало мне уверенную теоретическую базу и укрепило моё
            желание развиваться в этой области.
          </p>
          <p>
            Я уже создал несколько проектов на чистом JavaScript и React, и с
            нетерпением жду возможности использовать свои навыки в разработке
            более сложных web приложений.
          </p>
          <p>
            В этом портфолио я бы хотел продемонстрировать свои навыки и
            поделиться набранным опытом на примере созданных мною проектов.
            Спасибо, что нашли время посетить мое портфолио, и я надеюсь, что
            оно Вам покажется занимательным.
          </p>
        </div>

        <div className="second-column">
          <img src={myPhoto} alt="my picture" />
        </div>
      </section>

      <section id="projects">
        <SkillsSlider skills={skills} />

        <div className="projects-wrap">
          {projectsData.map((projectData, index) => {
            return (
              <div
                key={projectData.id}
                className={
                  index % 2 ? "project-wrap swapped-places" : "project-wrap"
                }
              >
                {index % 2 ? (
                  <>
                    <div className="description">
                      <h1>{projectData.title}</h1>
                      <div className="text-wrap">
                        <p>{projectData.description}</p>
                      </div>
                      <div className="icons">
                        <form action={projectData.hrefGit} method="get">
                          <button>
                            <AiFillGithub />
                          </button>
                        </form>
                        <form action={projectData.hrefLive} method="get">
                          <button>
                            <CgWebsite />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="laptop laptop-right">
                      <div className="laptop-screen">
                        <img
                          alt="preview"
                          className="preview"
                          src={projectData.imageUrl}
                        />
                        <img
                          alt="laptop"
                          className="parent-laptop"
                          src={laptop}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="laptop">
                      <div className="laptop-screen">
                        <img
                          alt="preview"
                          className="preview"
                          src={projectData.imageUrl}
                        />
                        <img
                          alt="laptop"
                          className="parent-laptop"
                          src={laptop}
                        />
                      </div>
                    </div>
                    <div className="description">
                      <h1>{projectData.title}</h1>
                      <div className="text-wrap">
                        <p>{projectData.description}</p>
                      </div>
                      <div className="icons">
                        <form action={projectData.hrefGit} method="get">
                          <button>
                            <AiFillGithub />
                          </button>
                        </form>
                        <form action={projectData.hrefLive} method="get">
                          <button>
                            <CgWebsite />
                          </button>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section id="contacts">
        <div className="contacts">
          <div className="block">
            <form action="https://github.com/Alpha-Dolphi" method="get">
              <button>
                <AiFillGithub />
              </button>
            </form>
            <a href="tel:89851985677">
              <button>
                <AiOutlinePhone />
              </button>
            </a>
            <a href="mailto: djedai@list.ru">
              <button>
                <MdOutlineMail />
              </button>
            </a>
            <form action="https://telegram.me/dolphio" method="get">
              <button>
                <BsTelegram />
              </button>
            </form>
          </div>
          <div id="sea">
            <Particles
              id="sea"
              init={particlesInit}
              options={{
                preset: "seaAnemone",
                fullScreen: {
                  enable: false,
                },
                image: "#4a03fc",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
