import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { ProjectModal } from "./project-modal";
import getFitImage from "@assets/Screenshot_2025-12-15_152508_1765792591955.png";
import getFitScreen2 from "@assets/Screenshot_2025-12-15_152548_1765792591957.png";
import getFitScreen3 from "@assets/Screenshot_2025-12-15_152602_1765792591958.png";

const projects = [
  {
    id: 1,
    title: "GetFit - Fitness App",
    description: "A comprehensive fitness application designed to help users achieve their health goals through personalized workout plans, progress tracking, and an intuitive user experience. The app features a sleek dark theme with lime green accents that energize and motivate users.",
    image: getFitImage,
    category: "mobile",
    tags: ["Mobile Design", "UI/UX", "Figma"],
    duration: "1 Week",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Photoshop"],
    challenge: "Users often struggle to maintain consistency with fitness apps due to complex interfaces and lack of personalization. The challenge was to create an engaging, easy-to-navigate app that keeps users motivated while providing personalized workout experiences based on their fitness level and goals.",
    solution: "Designed a clean, dark-themed interface with high contrast lime green accents that reduce eye strain during workouts. Implemented a streamlined onboarding flow that captures user preferences (gender, fitness level) to deliver personalized content. Created intuitive navigation with clear visual hierarchy and motivational elements throughout the user journey.",
    outcome: "The design received positive feedback for its modern aesthetic and user-friendly flow. The personalized onboarding increased user engagement, and the dark theme with vibrant accents created a premium, gym-ready feel that resonates with fitness enthusiasts.",
    screens: [getFitScreen2, getFitScreen3]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern shopping experience with intuitive navigation and seamless checkout process. Focused on conversion optimization and reducing cart abandonment through strategic UX improvements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    category: "web",
    tags: ["UI Design", "User Research"],
    duration: "2 Weeks",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Adobe XD"],
    challenge: "High cart abandonment rates and complex navigation were hurting conversions. Users found it difficult to find products and complete purchases efficiently.",
    solution: "Redesigned the product discovery flow with smart filters and visual search. Simplified the checkout to a 3-step process with progress indicators and trust signals.",
    outcome: "Improved user flow clarity and reduced cognitive load during the shopping experience. The streamlined checkout design aims to significantly reduce cart abandonment."
  },
  {
    id: 3,
    title: "LaundryGo - Laundry App",
    description: "On-demand laundry service app that connects users with nearby laundromats and dry cleaners. Features easy scheduling, real-time tracking, and secure payments for a seamless laundry experience.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "mobile",
    tags: ["Mobile Design", "UI/UX", "Figma"],
    duration: "1.5 Weeks",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Illustrator"],
    challenge: "Traditional laundry services lack convenience and transparency. Users struggle with scheduling pickups, tracking orders, and understanding pricing. The goal was to create a simple, trustworthy app that makes laundry effortless.",
    solution: "Designed a clean, minimal interface with a calming blue color palette that evokes freshness and cleanliness. Created a 3-step booking flow: select services, choose time slot, confirm pickup. Added real-time order tracking with status updates and push notifications. Implemented transparent pricing with itemized cost breakdown.",
    outcome: "The intuitive design reduced booking time to under 60 seconds. The trust-building elements like driver photos, ratings, and live tracking increased user confidence. The fresh, professional aesthetic positioned the app as a premium yet accessible service."
  },
  {
    id: 4,
    title: "Tech Startup Branding",
    description: "Complete brand identity for an innovative technology company. From logo design to brand guidelines, created a cohesive visual language that communicates innovation and trust.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "branding",
    tags: ["Brand Identity", "Logo Design"],
    duration: "2 Weeks",
    year: "2024",
    role: "Brand Designer",
    tools: ["Illustrator", "Photoshop"],
    challenge: "The startup needed a professional identity that could compete with established players while communicating their innovative approach and youthful energy.",
    solution: "Developed a modern, geometric logo mark with a custom wordmark. Created a versatile color palette and typography system that works across digital and print.",
    outcome: "Delivered comprehensive brand guidelines including logo usage, color specifications, typography hierarchy, and application examples for various touchpoints."
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
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
                onClick={() => setSelectedProject(project)}
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
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
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
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}
