import React from 'react'; 
import { TbBrandPython, TbApi } from "react-icons/tb";
import { SiCplusplus, SiJavascript, SiLatex, SiFlask, SiMysql, SiMongodb, SiGooglecloud, SiPostman, SiSolidity, SiC, SiFigma, SiExpress, SiBootstrap, SiSap, SiVisualstudiocode, SiAwslambda, SiAmazonec2, SiAmazons3 } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaAngular, FaReact, FaNode, FaAws, FaGitAlt, FaGithub, FaCss3Alt, FaDatabase, FaCube, FaUserTie, FaClipboardList, FaIndustry } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { RiNotionFill } from "react-icons/ri";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandFirebase } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { VscJson, VscVm } from "react-icons/vsc";
import { FaBoxesPacking, FaCartShopping } from "react-icons/fa6";

const Skills = ({skill, onClick}) => {
    const icon = {
        c: <SiC/>,
        css: <FaCss3Alt/>,
        figma: <SiFigma/>,
        bootstrap: <SiBootstrap/>,
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
        solidity: <SiSolidity/>,
        sql: <FaDatabase/>,
        rest_api: <TbApi/>,
        json_storage: <VscJson/>,
        sap_s4hana: <SiSap/>,
        sap_mm: <FaBoxesPacking/>,
        sap_sd: <FaCartShopping/>,
        sap_pp: <FaIndustry/>,
        material_master: <FaCube/>,
        vendor_master: <FaUserTie/>,
        inventory_management: <FaClipboardList/>,
        vscode: <SiVisualstudiocode/>,
        aws_lambda: <SiAwslambda/>,
        aws_ec2: <SiAmazonec2/>,
        aws_s3: <SiAmazons3/>,
        virtualization: <VscVm/>
    }

    const skillNames = {
        c: "C",
        css: "CSS3",
        figma: "Figma",
        bootstrap: "Bootstrap",
        express: "Express.js",
        python : "Python",
        cpp : "C++",
        java : "Java",
        javascript : "JavaScript",
        Latex: "LaTeX",
        angular: "Angular",
        react: "React.js",
        node: "Node.js",
        flask: "Flask",
        django: "Django",
        android: "Android",
        mysql: "MySQL",
        postgresql: "PostgreSQL",
        mongodb: "MongoDB",
        aws: "AWS",
        gcloud: "Google Cloud",
        git: "Git",
        github: "GitHub",
        notion: "Notion",
        postman: "Postman",
        docker: "Docker",
        firebase: "Firebase",
        html : "HTML5",
        tailwindCss: "Tailwind CSS",
        solidity: "Solidity",
        sql: "SQL",
        rest_api: "REST APIs",
        json_storage: "JSON Storage",
        sap_s4hana: "SAP S/4HANA",
        sap_mm: "SAP MM",
        sap_sd: "SAP SD",
        sap_pp: "SAP PP",
        material_master: "Material Master",
        vendor_master: "Vendor Master",
        inventory_management: "Inventory Management",
        vscode: "VS Code",
        aws_lambda: "AWS Lambda",
        aws_ec2: "AWS EC2",
        aws_s3: "AWS S3",
        virtualization: "Virtualization"
    };
    
  return (
    <div title={skillNames[skill] || skill} className={`SkillBox ${skill}`} onClick={onClick}>
      <div className="SkillBoxInner">
        <div className="SkillIcon">
          {icon[skill]}
        </div>
        <div className="SkillName">
          {skillNames[skill] || skill}
        </div>
      </div>
    </div>
  )
}

export default Skills;
