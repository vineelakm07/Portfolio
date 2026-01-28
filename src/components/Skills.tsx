import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Cloud,
  Container,
  Workflow,
  Globe,
  MessageSquare,
  Brain,
  GitBranch,
  FileCode,
} from 'lucide-react'

interface Skill {
  name: string
  icon: React.ReactNode
  category: string
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML', icon: <FileCode className="w-6 h-6" />, category: 'frontend' },
    { name: 'CSS', icon: <FileCode className="w-6 h-6" />, category: 'frontend' },
    { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, category: 'frontend' },
    { name: 'TypeScript', icon: <Code2 className="w-6 h-6" />, category: 'frontend' },
    { name: 'Angular', icon: <Globe className="w-6 h-6" />, category: 'frontend' },
    { name: 'React', icon: <Globe className="w-6 h-6" />, category: 'frontend' },
    
    // Backend
    { name: 'Java', icon: <Code2 className="w-6 h-6" />, category: 'backend' },
    { name: 'Spring Boot', icon: <Code2 className="w-6 h-6" />, category: 'backend' },
    
    // Databases
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'database' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, category: 'database' },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" />, category: 'database' },
    { name: 'Redis', icon: <Database className="w-6 h-6" />, category: 'database' },
    
    // Messaging
    { name: 'Kafka', icon: <MessageSquare className="w-6 h-6" />, category: 'messaging' },
    { name: 'RabbitMQ', icon: <MessageSquare className="w-6 h-6" />, category: 'messaging' },
    
    // Cloud/DevOps
    { name: 'AWS', icon: <Cloud className="w-6 h-6" />, category: 'cloud' },
    { name: 'Azure', icon: <Cloud className="w-6 h-6" />, category: 'cloud' },
    { name: 'Docker', icon: <Container className="w-6 h-6" />, category: 'devops' },
    { name: 'Kubernetes', icon: <Container className="w-6 h-6" />, category: 'devops' },
    { name: 'Jenkins', icon: <Workflow className="w-6 h-6" />, category: 'devops' },
    
    // Tools
    { name: 'Git', icon: <GitBranch className="w-6 h-6" />, category: 'tools' },
    { name: 'Postman', icon: <FileCode className="w-6 h-6" />, category: 'tools' },
    
    // GenAI
    { name: 'Azure OpenAI', icon: <Brain className="w-6 h-6" />, category: 'genai' },
    { name: 'AWS Bedrock', icon: <Brain className="w-6 h-6" />, category: 'genai' },
  ]

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Core technologies & tools</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.03,
              type: 'spring',
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.96 }}
            className="glass-card p-4 flex flex-col items-center justify-center text-center cursor-pointer group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <motion.div
              className="text-blue-600 dark:text-blue-400 mb-2"
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
            <motion.div
              className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              initial={false}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
