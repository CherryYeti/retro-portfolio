import React from "react";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const imageFilenames = [
    "cpp.png",
    "css-3.png",
    "html.png",
    "js.png",
    "linux.png",
    "node.png",
    "python.png",
    "typescript.png",
  ];

  return (
    <div className="flex flex-col md:flex-row w-full items-center">
      {imageFilenames.map((filename, index) => (
        <img
          key={index}
          src={`skills/${filename}`}
          className="rendering-pixelated w-full h-auto md:w-1/12 md:h-1/12 m-2 "
          alt={filename}
        />
      ))}
    </div>
  );
};

export default Skills;
