import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern shopping experience with intuitive navigation and seamless checkout process",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "web",
    tags: ["UI Design", "User Research"]
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Comprehensive fitness solution with workout tracking and progress analytics",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "mobile",
    tags: ["Mobile Design", "Prototyping"]
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence and reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "web",
    tags: ["Data Viz", "UX Strategy"]
  },
  {
    id: 4,
    title: "Tech Startup Branding",
    description: "Complete brand identity for innovative technology company",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "branding",
    tags: ["Brand Identity", "Logo Design"]
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "branding", label: "Branding" }
];

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A curated collection of projects showcasing my approach to design
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium filter-btn ${
                activeFilter === category.id ? "active" : "text-muted-foreground"
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="premium-card overflow-hidden group cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-[4/3] img-hover-zoom">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
