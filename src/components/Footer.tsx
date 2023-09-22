function Footer() {
  return (
    <footer className="bg-[#7D929E] text-black py-4 text-4xl  text-center">
      <div className="container mx-auto">
        <span>&copy; 2023 Jason Javandel. Theme inspired by </span>

        <span className="underline hover:text-[#FFEBB6]">
          <a href="https://www.aseprite.org/" target="_blank">
            Aseprite.
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
