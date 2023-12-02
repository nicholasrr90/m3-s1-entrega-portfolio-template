import DefaultTemplate from "../../components/DefaultTemplate";
import User from './../../components/Sections/User/index';
import About from './../../components/Sections/About/index';
import Tecnologies from './../../components/Sections/Tecnologies/Index';
import Projects from './../../components/Sections/Projects/index';

const LandingPage = () => {
  return (
    <DefaultTemplate>
      <User />
      <About />
      <Tecnologies />
      <Projects />
    </DefaultTemplate>
  );
};

export default LandingPage;