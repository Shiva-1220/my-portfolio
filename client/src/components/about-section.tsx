const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Prototyping", level: 90 },
  { name: "User Research", level: 85 },
  { name: "Frontend Development", level: 75 }
];

const tools = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-up">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Designer & Developer
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate UI/UX Designer focused on creating intuitive and meaningful digital experiences. With a strong foundation in interface design and a curiosity for user behavior, I craft solutions that are not just beautiful but also functional.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              I've worked on smart wearable interfaces and mobile apps, blending usability with visual impact. Always eager to learn, collaborate, and push creative boundaries.
            </p>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full skill-bar-fill transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="premium-card p-8 mb-8">
              <h3 className="text-lg font-semibold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="text-center group"
                    data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 p-2 rounded-xl bg-muted group-hover:bg-accent transition-colors duration-200">
                      <img 
                        src={tool.icon} 
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="premium-card p-8">
              <h3 className="text-lg font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground mb-1">2023 - Present</p>
                  <p className="font-medium">UI/UX Designer</p>
                  <p className="text-sm text-muted-foreground">Freelance</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="text-sm text-muted-foreground mb-1">2022 - 2023</p>
                  <p className="font-medium">Design Intern</p>
                  <p className="text-sm text-muted-foreground">Tech Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
