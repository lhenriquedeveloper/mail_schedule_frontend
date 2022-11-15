import { NavLogo } from './NavLogo';
import { Button } from '../Button/Button';
import { NavMobileItem } from './NavMobileItem';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { useNavMobileContext } from '../../contexts/NavMobileContext';

export function Nav() {
  const { isVisible, setIsVisible } = useNavMobileContext();

  return (
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-200 ">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
        <NavLogo />
        <div className="hidden lg:flex items center gap-4">
          <Link to="/">
            <Button variant="link">Dashboard</Button>
          </Link>
          <Link to="/contatos">
            <Button variant="link">Contatos</Button>
          </Link>
          <Link to="/emails">
            <Button variant="link">E-mails</Button>
          </Link>
          <Link to="/write">
            <Button variant="dark">Escrever Agora</Button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? <MdClose size={25} /> : <MdMenu size={25} />}
          </Button>
        </div>
      </div>
      {isVisible && (
        <div className="w-full h-[calc(100vh-81px)] fixed top-20 left-0 bg-white">
          <div className="flex flex-col items-stretch justify-center">
            <NavMobileItem to="/">Dashboard</NavMobileItem>
            <NavMobileItem to="/contatos">Contatos</NavMobileItem>
            <NavMobileItem to="/emails">E-mails</NavMobileItem>
            <NavMobileItem to="/write" variant="primary">
              Escrever Agora
            </NavMobileItem>
          </div>
        </div>
      )}
    </nav>
  );
}
