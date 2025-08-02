import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
    image: "https://pixabay.com/get/g7bbd924eef1fe1abb8b87f746b570d4ffc990b3d904bb7058a1173c37374ca367b7e92372ad845a08825516e378ab4e791e0f3d7de2079c211fef69025c42812_1280.jpg",
    category: "branding",
    tags: ["Brand Identity", "Logo Design"]
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Design" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "branding", label: "Branding" }
];

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my approach to solving complex design challenges
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeFilter === category.id
                  ? "filter-btn active"
                  : "glass-morphism hover:bg-white/20 dark:hover:bg-black/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
            >
              <div className="glass-morphism rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
