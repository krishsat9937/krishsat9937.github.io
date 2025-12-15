import { Github, ExternalLink, Folder, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Project {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  type: "git" | "non-git";
  featured?: boolean;
}

const projects: Project[] = [
//   {
//     title: "AI-Powered Financial Platform",
//     description: "A comprehensive financial platform integrating OpenAI for document parsing and automated accounting workflows. Built with Django and Next.js.",
//     tags: ["Django", "Next.js", "OpenAI", "Stripe", "AWS"],
//     type: "non-git",
//     featured: true,
//     demoUrl: "https://justpaid.io",
//     images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"]
//   },
  {
    title: "VoiceMedi AI",
    description: "Offline voice-to-symptom intake system using Raspberry Pi, Vosk ASR, and LLaMA models for privacy-preserving healthcare triage.",
    tags: ["Python", "Edge AI", "LLaMA", "Raspberry Pi", "Healthcare"],
    type: "git",
    githubUrl: "https://github.com/krishsat9937/voice_chatbot",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      "https://github.com/user-attachments/assets/9aafa0b3-c621-46a5-af5a-f8e802af7128",
      "https://github.com/user-attachments/assets/2dbc8da7-8242-4092-ae9e-648ec7838a45"
    ]
  },
  {
    title: "Smart Travel Budgeting Application",
    description: "Full-stack travel budgeting platform with secure authentication, real-time travel suggestions via Amadeus API, and Google Maps integration.",
    tags: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS", "Docker"],
    type: "git",
    githubUrl: "https://github.com/krishsat9937/smart-travel-budgeting",
    featured: true,
    images: [
      "https://github.com/user-attachments/assets/9d36d8ad-467b-40e8-8f99-55881f0a6656",
      "https://github.com/user-attachments/assets/9f7ff3f8-6303-4aae-bb99-8947d5ad39a1",
      "https://github.com/user-attachments/assets/2e90b034-47d8-4926-90b1-60997f3fb0c4"
    ]
  },
//   {
//     title: "Data Enrichment Pipeline",
//     description: "Scalable microservices architecture for processing LinkedIn and Crunchbase data to score startup founders.",
//     tags: ["Python", "Kafka", "Redis", "AWS Lambda"],
//     type: "non-git",
//     images: ["https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop"]
//   },
//   {
//     title: "Portfolio Website",
//     description: "Modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.",
//     tags: ["React", "TypeScript", "Tailwind CSS"],
//     type: "git",
//     githubUrl: "https://github.com/krishsat9937/krishsat9937.github.io",
//     demoUrl: "https://krishsat9937.github.io",
//     images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"]
//   }
];

const ImageLightbox = ({ 
  images, 
  initialIndex, 
  isOpen, 
  onClose 
}: { 
  images: string[], 
  initialIndex: number, 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrentIndex(prev => (prev + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, images.length]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-4">
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-4 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`Preview ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(prev => (prev + 1) % images.length);
            }}
            className="absolute right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const hasMultipleImages = project.images && project.images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images && project.images.length > 0) {
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-muted group/image">
          {project.images && project.images.length > 0 ? (
            <>
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                onClick={openLightbox}
              />
              
              {/* Zoom Hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Image Navigation */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-20"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                    {project.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          idx === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/50">
              <Folder className="w-12 h-12 text-muted-foreground/50" />
            </div>
          )}
          
          {/* Overlay with links - Only visible when hovering the bottom part or specific area to avoid conflict with image click */}
          <div className="absolute top-2 left-2 flex gap-2 z-20">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:text-primary transition-colors shadow-sm"
                title="View Code"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:text-primary transition-colors shadow-sm"
                title="View Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Type Badge */}
          <div className="absolute top-3 right-3 z-20">
            <span className={`px-2 py-1 rounded text-xs font-mono font-medium backdrop-blur-md border ${
              project.type === "git" 
                ? "bg-blue-500/10 border-blue-500/20 text-blue-500" 
                : "bg-purple-500/10 border-purple-500/20 text-purple-500"
            }`}>
              {project.type === "git" ? "Open Source" : "Pro"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.images && (
        <ImageLightbox
          images={project.images}
          initialIndex={currentImageIndex}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "git" | "non-git">("all");

  const filteredProjects = projects.filter(p => filter === "all" || p.type === filter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2 text-sm">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of my open-source contributions and professional work.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {(["all", "git", "non-git"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tab
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab === "all" ? "All Projects" : tab === "git" ? "Open Source" : "Professional"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
