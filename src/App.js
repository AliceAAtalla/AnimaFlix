import React, { Fragment } from 'react';
import HeaderLogin from './components/HeaderLogin';
import BannerCute from './components/BannerCute';
import TagCute from './components/TagCute';
import ThumbCute from './components/ThumbCute';
import Footer from './components/FooterCute';
import SectionCute from './components/SectionCute';
import Cachorrinho from './assets/img/Chorrinho1.jpg';
import channel1 from './assets/img/Channel.jpg';
import CarouselCute from './components/CaroselCute';
import videosDogs from './services/videosDogs';

function App() {
  return (
    <Fragment>
      <HeaderLogin />
      <BannerCute
        tag="Animais Fofos"
        title="Boas vindas a CuteFlix!"
        description="Aqui você vai ver vários videos apaixonantes e fofos! Se derreta com
        Cachorinhos, Gatinhos, Passarinhos, Pandas, e muitas outras fofuras!"
      >
        <ThumbCute
          src={Cachorrinho}
          alt="Bem vindos a CuteFlix!"
          channelName="CuteFlix"
          avatar={channel1}
          title="Bem vindos a CuteFlix!"
          timer="00:00"
        />
      </BannerCute>
      <SectionCute>
        <TagCute>Cachorrinho</TagCute>
        <CarouselCute videos={videosDogs} />
      </SectionCute>
      <Footer />
    </Fragment>
  );
}

export default App;
