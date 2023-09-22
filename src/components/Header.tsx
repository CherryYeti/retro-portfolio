function Header() {
  const strings = ["File", "Edit", "View", "Help"];
  const capitalizeAndUnderline = (str: string) => {
    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1);
    return (
      <span className="text-5xl">
        <span className="underline">{firstLetter}</span>
        {restOfString}
      </span>
    );
  };
  return (
    <div className="flex bg-[#D3CBBE]">
      {strings.map((str, index) => (
        <div key={index} className="mx-2">
          {capitalizeAndUnderline(str)}
        </div>
      ))}
    </div>
  );
}
export default Header;
