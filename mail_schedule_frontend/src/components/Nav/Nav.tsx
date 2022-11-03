import { NavLogo } from './NavLogo';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

export function Nav() {
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
          <Button>
            <MdMenu size={25} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
