import React, { useState, useEffect, useMemo } from "react";
import { useRef } from "react";
import "./styles.css";

export default function SkillsSlider({ skills = [], duration = 4450 }) {
  const skillsWrap = useRef(null);
  const currentIndex = useRef(null);

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const [skillItems, setSkillItems] = useState(skills.slice(0, 4));

  useEffect(() => {
    let interval = null;

    const launch = () => {
      skillsWrap.current.classList.add("hidden");

      setTimeout(() => {
        skillsWrap.current.classList.remove("hidden");
      }, 500);

      setTimeout(() => {
        skillsWrap.current.classList.add("gone");
      }, duration - 600);

      setTimeout(() => {
        skillsWrap.current.classList.remove("gone");
        skillsWrap.current.classList.add("hidden");
      }, duration - 150);
    };

    const stopSlider = () => {
      clearInterval(interval);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopSlider();
      } else {
        startSlider();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const startSlider = () => {
      launch();

      interval = setInterval(() => {
        currentIndex.current = currentIndex.current + 4;
        setSkillItems(
          skills.slice(currentIndex.current, currentIndex.current + 4)
        );

        setTimeout(() => {
          skillsWrap.current.classList.toggle("middleFlow");
        }, 2000);

        setTimeout(() => {
          skillsWrap.current.classList.toggle("flow");
        }, 3000);

        if (currentIndex.current >= skills.length - 4) {
          currentIndex.current = -4;
        }

        skillsWrap.current?.classList.remove("hidden");

        setTimeout(() => {
          skillsWrap.current.classList.add("gone");

          setTimeout(() => {
            skillsWrap.current.classList.remove("gone");
            skillsWrap.current.classList.add("hidden");
          }, 450);
        }, duration - 600);
      }, duration);
    };

    startSlider();

    return () => {
      stopSlider();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [skills, duration]);

  shuffle(skillItems);
  return (
    <div className="skillsWrap" ref={skillsWrap}>
      {skillItems.map((skill, index) => (
        <div key={index}>
          <img
            key={index}
            src={skill.imageUrl}
            alt={skill.altName}
            className={skill.className ? `${skill.className}` : ""}
          />
        </div>
      ))}
    </div>
  );
}
