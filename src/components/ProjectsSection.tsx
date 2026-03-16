import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  { image: project1, name: "The Verdant", location: "Bangalore" },
  { image: project2, name: "The Twins", location: "Hyderabad" },
  { image: project3, name: "SkyMarq", location: "Chennai" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-[20vh] px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="w-px h-12 sm:h-16 bg-gold mx-auto mb-6 sm:mb-8" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-display text-primary text-center mb-10 sm:mb-16"
        >
          FEATURED PROJECTS
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-elegant"
                />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-light tracking-display text-foreground">{project.name}</h3>
              <p className="font-body text-[12px] sm:text-[13px] tracking-caps text-muted-foreground uppercase">{project.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
