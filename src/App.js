import Header from './components/Header';
import Footer from './components/Footer';
import TitleSection from './components/TitleSection';
import AbstractSection from './components/AbstractSection';
import MotivationSection from './components/MotivationSection';
import SSAHSection from './components/SSAHSection';
import SAHSection from './components/SAHSection';
import LessIsMoreSection from './components/LessIsMoreSection';
import DiscussionSection from './components/DiscussionSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="abstract">
          <TitleSection />
          <AbstractSection />
        </div>
        <div id="motivation">
          <MotivationSection />
        </div>
        <div id="ssah">
          <SSAHSection />
        </div>
        <div id="sah">
          <SAHSection />
        </div>
        <div id="lessismore">
          <LessIsMoreSection />
        </div>
        <div id="discussion">
          <DiscussionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default App;
