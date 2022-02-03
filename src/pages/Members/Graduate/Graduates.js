import { Component, React } from 'react';
import Header from '../../../components/Header';
import IntroduceGraduate from './IntroduceGraduate';
import ShowGraduate from './ShowGraduate';
import Buttons from './Buttons';
import Band from './Band';

class Graduates extends Component {

  render() {
    return(
      <div>
        <Header />
        <IntroduceGraduate />
        <Buttons />
        <Band />
        <ShowGraduate />
      </div>
    )
  }
}
export default Graduates;
