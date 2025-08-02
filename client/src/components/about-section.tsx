import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "UI/UX Design", level: 95, color: "from-indigo-600 to-purple-600" },
  { name: "Prototyping", level: 90, color: "from-cyan-500 to-emerald-500" },
  { name: "User Research", level: 85, color: "from-orange-500 to-red-500" },
  { name: "Frontend Development", level: 75, color: "from-green-500 to-teal-500" }
];

const tools = [
  { name: "Figma", icon: "🎨", color: "text-orange-500" },
  { name: "Sketch", icon: "✏️", color: "text-yellow-500" },
  { name: "Adobe", icon: "🎭", color: "text-purple-500" },
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "HTML/CSS", icon: "💻", color: "text-green-500" },
  { name: "JavaScript", icon: "📜", color: "text-yellow-400" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate UI/UX Designer focused on creating intuitive and meaningful digital experiences. With a strong foundation in interface design and a curiosity for user behavior, I craft solutions that are not just beautiful but also functional.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I've worked on smart wearable interfaces and mobile apps, blending usability with visual impact. Always eager to learn, collaborate, and push creative boundaries.
            </p>
            
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative glass-morphism rounded-2xl p-8 animate-float">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
                alt="Designer workspace with creative tools"
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {/* Tools & Technologies */}
              <div className="absolute -bottom-6 -right-6 glass-morphism rounded-xl p-4 bg-background/80 backdrop-blur-sm">
                <h4 className="font-semibold mb-3">Tools I Use</h4>
                <div className="grid grid-cols-3 gap-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl mb-1 ${tool.color}`}>
                        {tool.icon}
                      </div>
                      <p className="text-xs">{tool.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
