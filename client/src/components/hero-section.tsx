import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadResume = () => {
    // In a real app, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Shivansh_Chaurasiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden glass-morphism p-1 animate-float">
              <img
                src="/attached_assets/PASSPORT PIC_1754163000849.jpeg"
                alt="Shivansh Chaurasiya - UI/UX Designer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Shivansh Chaurasiya</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">UI/UX Designer</p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm a passionate UI/UX Designer focused on creating intuitive and meaningful digital experiences. With a strong foundation in interface design and a curiosity for user behavior, I craft solutions that are not just beautiful but also functional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToWork}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="px-8 py-3 glass-morphism hover:bg-white/20 dark:hover:bg-black/20 transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169-.331-.357-.62-.574-.87l-.001-.001c-.844-.942-2.069-1.542-3.428-1.542-2.57 0-4.65 2.08-4.65 4.65 0 .24.02.475.058.706l.002.013c.11.694.34 1.33.667 1.906l.013.022c.734 1.282 2.098 2.154 3.659 2.154 1.561 0 2.925-.872 3.659-2.154l.013-.022c.326-.576.556-1.212.667-1.906l.002-.013c.038-.231.058-.466.058-.706 0-1.359-.6-2.584-1.542-3.428l-.001-.001c-.25-.217-.539-.405-.87-.574l-.022-.013c-.576-.326-1.212-.556-1.906-.667l-.013-.002C12.466 8.02 12.24 8 12 8s-.466.02-.706.058l-.013.002c-.694.11-1.33.34-1.906.667l-.022.013c-.331.169-.62.357-.87.574l-.001.001C7.54 9.897 6.94 11.122 6.94 12.48c0 .24.02.475.058.706l.002.013c.11.694.34 1.33.667 1.906l.013.022c.734 1.282 2.098 2.154 3.659 2.154 1.561 0 2.925-.872 3.659-2.154l.013-.022c.326-.576.556-1.212.667-1.906l.002-.013c.038-.231.058-.466.058-.706 0-1.359-.6-2.584-1.542-3.428z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mrshivanshchaurasiya"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.behance.net/chaurasiyashivansh"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
