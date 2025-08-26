import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/zapsalespro-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="ZapSalesPro" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-neutral-700 hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#plataforma" className="text-neutral-700 hover:text-primary transition-colors font-medium">
              A Plataforma
            </a>
            <a href="#funcionalidades" className="text-neutral-700 hover:text-primary transition-colors font-medium">
              Funcionalidades
            </a>
            <a href="#planos" className="text-neutral-700 hover:text-primary transition-colors font-medium">
              Planos
            </a>
            <a href="#suporte" className="text-neutral-700 hover:text-primary transition-colors font-medium">
              Suporte
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">
              Acessar
            </Button>
            <Button variant="hero">
              Começar agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-neutral-700 hover:text-primary transition-colors font-medium">
                Início
              </a>
              <a href="#plataforma" className="text-neutral-700 hover:text-primary transition-colors font-medium">
                A Plataforma
              </a>
              <a href="#funcionalidades" className="text-neutral-700 hover:text-primary transition-colors font-medium">
                Funcionalidades
              </a>
              <a href="#planos" className="text-neutral-700 hover:text-primary transition-colors font-medium">
                Planos
              </a>
              <a href="#suporte" className="text-neutral-700 hover:text-primary transition-colors font-medium">
                Suporte
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">
                  Acessar
                </Button>
                <Button variant="hero">
                  Começar agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;