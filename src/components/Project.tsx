interface ProjectProps {
  title: string;
  description: string;
  link: string;
}
function Project({ title, description, link }: ProjectProps) {
  return (
    <a href={link} target="_blank">
      <div className="flex hover:bg-[#FFEBB6] hover:cursor-pointer ">
        <div className="pr-4">{title}</div>
        <div className="text-[#968275]">{description}</div>
      </div>
    </a>
  );
}
export default Project;
