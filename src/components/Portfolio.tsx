import React, { useState, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import TypewriterEffect from './TypewriterEffect';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const experienceTimeline = [
  {
    year: "2024-25",
    title: "Marketing Research Assistant",
    company: "Kelley School of Business",
    location: "Bloomington, IN",
    dates: "Aug 2024 – Present",
    type: "Part-Time",
    description:
      "Built PySpark and T-SQL ETL pipelines for over 10,000 ad records. Conducted causal inference to evaluate eBay ad performance and boosted ROI by 20% through data-driven strategy shifts."
  },
  {
    year: "2024",
    title: "Graduate Teaching Assistant",
    company: "Luddy School of Informatics",
    location: "Bloomington, IN",
    dates: "Aug 2024 – Jan 2025",
    type: "Part-Time",
    description:
      "Led 10+ lab sessions for 50+ students on Python data structures like RMQ and SkipLists. Supported 30+ students with Wavelet and Graph Theories and assessed over 15 assignments for mastery."
  },
  {
    year: "2024",
    title: "Data Analyst Intern",
    company: "Medha Servo Drives",
    location: "Hyderabad, India",
    dates: "May 2024 – Jul 2024",
    type: "Internship",
    description:
      "Analyzed locomotive fault data to forecast failures. Applied ML models to historical data, improving maintenance predictions and reducing downtime."
  },
  {
    year: "2022",
    title: "Senior Analyst",
    company: "Capgemini",
    location: "Kolkata, India",
    dates: "Feb 2022 – Aug 2022",
    type: "Full-Time",
    description:
      "Streamlined CRM processes using PEGA and improved operational accuracy by 25%. Developed KPIs and performance benchmarks that lifted productivity by 15%."
  },
  {
    year: "2021",
    title: "Business Intelligence Analyst",
    company: "MAQ Software",
    location: "Hyderabad, India",
    dates: "Oct 2021 – Feb 2022",
    type: "Internship",
    description:
      "Built dashboards using Power BI and SQL Server. Automated Azure data pipelines and standardized metric definitions for client analytics delivery."
  }
];

const projects = [
  {
    title: "Causal Inference for Advertisement Engagement",
    description: "Implemented causal inference techniques (ATE, HTE, OLS) on synthetic ad click data to determine the impact of banner placement on user engagement. Visualized differences between treated and control groups using statistical plots and interpreted marketing implications.",
    link: "https://github.com/suhruthkrishna/Causal_Inference-for-Engagement-Assessment",
    image: "/causal_inference.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Election Trends Using RDD",
    description: "Used Regression Discontinuity Design to analyze close election races and estimate the effect of winning on subsequent voter turnout. Implemented bandwidth selection, local linear regression, and covariate balance checks to validate assumptions.",
    link: "https://github.com/suhruthkrishna/Election-trends-using-RDD",
    image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "COVID-19 Data Analysis on GCP",
    description: "Processed and analyzed large-scale CDC data related to COVID-19, RSV, and flu trends using BigQuery and Google Cloud Storage. Created visualizations of mortality trends by region, age, and time using Python and Tableau.",
    link: "https://github.com/suhruthkrishna/COVID19_DataAnalysis",
    image: "gcp_covid19.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "New Hire Matching",
    description: "Developed a fuzzy logic algorithm enhanced by ConceptNet semantic relationships to match 18,000 new hires to onboarding buddies, reducing HR time by over 40%. Engineered data flows using Excel and Python-based parsing for dynamic assignment.",
    link: "https://github.com/suhruthkrishna/Buddy_Matching",
    image: "hire.webp"
  }
];

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_email: 'suhruthkrishna@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_jsltq2b',
        'template_odlmo6n',
        templateParams,
        'USe3cYluJ5aIZFIHy'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="w-full bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="py-16 flex items-center justify-center gap-12 flex-wrap container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Profile Image */}
        <motion.div 
          className="relative"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="w-64 h-64 rounded-full border-4 border-emerald-500 overflow-hidden">
            <img src="/git_prof.jpg" alt="Profile" className="w-full h-full object-cover" />
            <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              Profile Photo
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="flex-1 min-w-[300px] max-w-[600px] space-y-6 text-center"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Suhruth Krishna Yalamanchili
          </h1>
          <p className="text-xl text-gray-700">
            <TypewriterEffect 
              words={["Analyst", "Scientist", "Engineer"]} 
            />
          </p>
          <motion.div 
            className="flex justify-center gap-6"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="mailto:suhruthkrishna@gmail.com" 
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors duration-300"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/suhruthkrishna" 
              target="_blank" 
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/suhruthkrishna" 
              target="_blank" 
              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-500 transition-colors duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Timeline */}
      <section className="py-16 container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
          
          {experienceTimeline.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div className="relative mb-16 last:mb-0" key={index}>
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-600 z-10 border-4 border-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />
                
                {/* Year label - positioned on opposite side of card */}
                <motion.div 
                  className={`absolute top-0 ${isLeft ? 'left-[52%]' : 'right-[52%]'} ${isLeft ? 'md:text-left' : 'md:text-right'}`}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-1 px-4 rounded-full text-sm">
                    {exp.year}
                  </span>
                </motion.div>
                
                {/* Card */}
                <motion.div 
                  className={`relative ${isLeft ? 'md:ml-0 md:mr-[50%] md:pr-8' : 'md:mr-0 md:ml-[50%] md:pl-8'} px-4`}
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-white backdrop-blur-sm bg-opacity-80 shadow-lg border-l-4 border-l-emerald-500">
                      <CardContent className="p-5 text-left">
                        <h3 className="text-xl font-bold text-emerald-700">{exp.title}</h3>
                        <p className="text-sm text-gray-600">{exp.company} · {exp.location}</p>
                        <p className="text-xs text-gray-500 italic">{exp.dates} · {exp.type}</p>
                        <p className="mt-2 text-gray-700">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <motion.section 
        className="py-16 container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-12"
          variants={fadeInUp}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full bg-white backdrop-blur-sm bg-opacity-90 hover:shadow-xl transition-all duration-300 border-t-4 border-t-teal-500 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-teal-700">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  {project.link && (
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-500 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span>View on GitHub</span>
                      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </motion.a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        className="py-16 container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-12"
          variants={fadeInUp}
        >
          Certifications & Publications
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12"
          variants={fadeInUp}
        >
          <ul className="space-y-6">
            {[
              "Google Data Analytics Professional Certificate",
              "Data Analysis in Python – IBM",
              "Crash Course in Causality – University of Pennsylvania",
              {
                text: "Springer publication: Exploring Scheduling Techniques for RTOS",
                link: "https://link.springer.com/chapter/10.1007/978-981-19-5331-6_2"
              }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-emerald-500 mr-4 text-2xl">•</span>
                {typeof item === 'string' ? (
                  <span className="text-gray-800">{item}</span>
                ) : (
                  <span className="text-gray-800">
                    {item.text.split(': ')[0]}: <a 
                      href={item.link} 
                      target="_blank" 
                      className="text-emerald-600 hover:text-emerald-500 hover:underline transition-colors duration-300"
                    >
                      {item.text.split(': ')[1]}
                    </a>
                  </span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        className="py-16 container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl font-semibold text-center mb-12"
          variants={fadeInUp}
        >
          Get In Touch
        </motion.h2>
        
        <motion.form 
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="Your message..."
              disabled={isSubmitting}
            />
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 px-6 rounded-md hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 font-medium disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
          )}
        </motion.form>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 text-center text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Suhruth Krishna Yalamanchili. All rights reserved.</p>
      </motion.footer>
    </main>
  );
};

export default Portfolio;