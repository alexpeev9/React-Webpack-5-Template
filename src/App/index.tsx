import Logo from '../../public/assets/logo.png';
import './style.scss';

const App: React.FC = () => {
  return (
    <div className='home'>
      <img src={Logo} alt='logo' />
      <p>Hello World</p>
    </div>
  );
};

export default App;
