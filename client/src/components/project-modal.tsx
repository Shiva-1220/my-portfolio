import { X, Clock, Calendar, Layers, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  duration?: string;
  year?: string;
  role?: string;
  tools?: string[];
  challenge?: string;
  solution?: string;
  outcome?: string;
  screens?: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted"
          data-testid="button-close-modal"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag-subtle">
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-muted/50 rounded-xl">
            {project.duration && (
              <div className="text-center">
                <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-medium text-sm">{project.duration}</p>
              </div>
            )}
            {project.year && (
              <div className="text-center">
                <Calendar className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Year</p>
                <p className="font-medium text-sm">{project.year}</p>
              </div>
            )}
            {project.role && (
              <div className="text-center">
                <Target className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Role</p>
                <p className="font-medium text-sm">{project.role}</p>
              </div>
            )}
            {project.tools && (
              <div className="text-center">
                <Layers className="h-5 w-5 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground mb-1">Tools</p>
                <p className="font-medium text-sm">{project.tools.join(", ")}</p>
              </div>
            )}
          </div>
          
          {project.challenge && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                The Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-3">
                {project.challenge}
              </p>
            </div>
          )}
          
          {project.solution && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                The Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-3">
                {project.solution}
              </p>
            </div>
          )}
          
          {project.outcome && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Outcome
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {project.outcome}
              </p>
            </div>
          )}
          
          {project.screens && project.screens.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">More Screens</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screens.map((screen, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-border">
                    <img
                      src={screen}
                      alt={`${project.title} screen ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
