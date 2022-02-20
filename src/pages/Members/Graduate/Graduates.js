import { Component, React } from 'react';
import Header from '../../../components/Header';
import IntroduceGraduate from './IntroduceGraduate';
import ShowGraduate from './ShowGraduate';
import Buttons from './Buttons';
import Band from './Band';
import Footer from '../../../components/Footer';

class Graduates extends Component {

  render() {
    return(
      <div>
        <Header />
        <IntroduceGraduate />
        <Buttons />
        <Band />
        <div className="container px-5 pb-24 mx-auto">
          <ShowGraduate />
        </div>
        <Footer />
      </div>
    )
  }
}
export default Graduates;
