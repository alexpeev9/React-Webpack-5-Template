import Logo from '../../public/assets/logo.png'
import './style.scss'

const App: React.FC = () => {
  return (
    <>
      <img src={Logo} className='logo' alt='logo' />
      <h1>React Webpack 5 Template</h1>
    </>
  )
}

export default App
