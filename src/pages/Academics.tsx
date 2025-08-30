import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "University of Porto",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: "Sep 2010 - Jun 2016",
      location: "Porto, Portugal",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Certified ScrumMaster (CSM)",
      date: "2016",
    },
    {
      id: 2,
      name: "Google Cloud Digital Leader •",
      date: "2023",
    },
  ];

  const courseHighlights = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "Software Engineering",
    "Cloud Computing",
    "Blockchain Technology",
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.1)",
            }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Courses
            </h2>

            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-teal-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(155, 135, 245, 0.2)",
                      color: "#9b87f5",
                    }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-teal-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  name={cert.name}
                  date={cert.date}
                  description={cert.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
