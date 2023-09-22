import { ReactNode } from "react";
interface TextProps {
  children: ReactNode;
}
function Text({ children }: TextProps) {
  return (
    <div className="text-5xl border-t-2 border-t-[#645460] border-x-[#ADCADE] border-x-2  border-b-[#ADCADE] border-b-2  text-black relative">
      <div className="inset-0  border-2 border-black relative">
        <div className="bg-white p-2">{children}</div>
      </div>
    </div>
  );
}
export default Text;
