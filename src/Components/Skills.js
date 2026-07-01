import React from 'react'; 
import { TbBrandPython } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiLatex } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiFlask } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandFirebase } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiSolidity, SiC, SiFigma, SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";






const Skills = ({skill}) => {
    const icon = {
        c: <SiC/>,
        css: <FaCss3Alt/>,
        figma: <SiFigma/>,
        express: <SiExpress/>,
        python : <TbBrandPython/>,
        cpp : <SiCplusplus/>,
        java : <FaJava/>,
        javascript : <SiJavascript/>,
        Latex: <SiLatex/>,
        angular: <FaAngular/>,
        react: <FaReact/>,
        node: <FaNode/>,
        flask: <SiFlask/>,
        django: <DiDjango/>,
        android: <IoLogoAndroid/>,
        mysql: <SiMysql/>,
        postgresql: <BiLogoPostgresql/>,
        mongodb: <SiMongodb/>,
        aws: <FaAws/>,
        gcloud: <SiGooglecloud/>,
        git: <FaGitAlt/>,
        github: <FaGithub/>,
        notion: <RiNotionFill/>,
        postman: <SiPostman/>,
        docker: <IoLogoDocker/>,
        firebase: <TbBrandFirebase/>,
        html : <AiFillHtml5/>,
        tailwindCss: <BiLogoTailwindCss/>,
        solidity: <SiSolidity/>
    }
    
  return (
    <div title={skill} className={`SkillBox ${skill}`}>
      {icon[skill]}
    </div>
  )
}

export default Skills
