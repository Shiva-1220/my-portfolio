import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navItems = ["home", "work", "about", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              SC<span className="text-primary">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize"
                data-testid={`nav-${item}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full hover:bg-muted transition-colors duration-200"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 px-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200 capitalize"
                data-testid={`nav-mobile-${item}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
