interface TitleProps {
  title: string;
}
function Title({ title }: TitleProps) {
  return <h2 className="text-5xl text-[#655561]">{title}</h2>;
}
export default Title;
