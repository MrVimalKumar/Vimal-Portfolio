import skilllist from "../assets/skilllist";
import SkillCom from "./SkillCom";
const Aboutus = () => {
  const skilldata = skilllist;

  return (
    <div>
      {/* height = h-[460px] */}
      <div className="bg-gray-100 ">
        <h1 className="py-5 pt-8 text-4xl font-extrabold text text-center mx-4"> 
          About
        </h1>
        <div className="border border-solid border-l-black rounded-lg p-4 mx-4">
          <h1 className="text-lg text-justify p-4 m-4 ">
            I’m Vimal Kumar R, a passionate Frontend Developer who loves
            crafting intuitive and visually appealing web experiences. My
            journey into coding began during my school days, where I developed a
            strong interest in technology and problem-solving.<br/> <br/> I completed my
            schooling at Siwalik Matriculation Higher Secondary School, where I
            built a solid academic foundation and actively participated in tech
            and creative competitions. This early exposure to technology fueled
            my curiosity and set me on a path toward web development. To further
            enhance my skills, I pursued a B.E in Computer Science and
            Technology at SNS College of Engineering. During this time, I
            discovered my passion for frontend development and mastered HTML,
            CSS, JavaScript and React JS.<br/> <br/> In addition to my formal education,
            I’ve taken multiple online courses, where I expanded my expertise in
            ReactJS, responsive design, and API integration. My dedication to
            continuous learning keeps me updated with the latest trends in
            frontend development, allowing me to build modern and efficient web
            applications.<br/><br/> Beyond coding, I enjoy exploring new technologies,
            designing creative projects, and contributing to open-source
            communities. I believe in crafting meaningful digital experiences
            that not only look great but also enhance user interaction. With
            every project I take on, I strive to push my limits and create
            impactful web solutions.
          </h1>
          <div className="flex flex-wrap ml-4">
            {skilldata.map((skill) => (
              <SkillCom key={skill.data.id} skilldta={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
