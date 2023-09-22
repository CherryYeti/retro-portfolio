import Project from "./components/Project";
import Skills from "./components/Skills";
import Text from "./components/Text";
import Title from "./components/Title";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Title title="CherryYeti:" />
      <Text>
        <img
          src="/fs64.png"
          className="rendering-pixelated w-full h-auto md:w-1/12 md:h-1/12 m-2 "
        />
      </Text>
      <Title title="About Me:" />
      <Text>
        <h2>
          Hello! I am a second year college student who believes in open source
          projects. I am majoring in computer science, and I love creating!
        </h2>
      </Text>
      <Title title="My Projects:" />
      <Text>
        <Project
          title="FireStarter"
          description="FireStarter is a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Python "
          link="https://www.github.com/cherryyeti/firestarter"
        />
        <Project
          title="This Portfolio"
          description="This portfolio was created entirely from scratch in react in a few days."
          link="https://www.github.com/cherryyeti"
        />
        <Project
          title="My Mother's Portfolio"
          description="My mother's old portfolio was running extremely slowly, so I decided to rebuild the entire website."
          link="https://www.javandel.net/kate"
        />
        <Project
          title="My Github"
          description="You can visit my github to see the source code for all of my projects."
          link="https://www.github.com/cherryyeti"
        />
      </Text>
      <Title title="My Skills:" />
      <Text>
        <Skills />
      </Text>
    </MainLayout>
  );
}

export default App;
