import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tech: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'HCL Technologies',
      role: 'Senior Full Stack Developer',
      period: 'May 2024 – Present',
      location: 'United States',
      bullets: [
        'Built Angular dashboards integrated with Spring Boot microservices',
        'Designed REST APIs using Spring MVC + JPA/Hibernate',
        'Implemented Kafka-based async processing using Spring Kafka',
        'Deployed services on AWS EC2/EKS using Docker and Kubernetes',
        'Automated CI/CD pipelines with Jenkins + Maven',
        'Integrated Azure OpenAI and AWS Bedrock features with safe prompts and PII masking',
        'Monitored production using CloudWatch and structured logging',
      ],
      tech: [
        'Java',
        'Spring Boot',
        'Angular',
        'Kafka',
        'AWS',
        'Azure',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'PostgreSQL',
        'JUnit',
        'Mockito',
        'Swagger',
      ],
    },
    {
      company: 'UnitedHealth Group (Optum)',
      role: 'Software Developer',
      period: 'Sep 2022 – Dec 2023',
      location: 'United States',
      bullets: [
        'Angular UI for healthcare dashboards and claims workflows',
        'Secure routing and interceptors aligned with Spring Security',
        'Spring Boot REST APIs with Swagger',
        'Kafka messaging for background processing',
        'Azure App Services + Docker deployments',
        'Jenkins and Azure DevOps CI/CD',
        'Azure Key Vault + Azure Monitor',
      ],
      tech: [
        'Angular',
        'Spring Boot',
        'Spring Security',
        'Kafka',
        'Azure',
        'Docker',
        'Jenkins',
        'Azure DevOps',
        'PostgreSQL',
      ],
    },
    {
      company: 'Glacier Bancorp',
      role: 'Software Developer',
      period: 'Jan 2021 – Aug 2022',
      location: 'United States',
      bullets: [
        'React UI for digital banking features',
        'REST APIs with Spring Boot and Hibernate',
        'Spring Batch jobs for data migration',
        'REST/SOAP integrations',
        'AWS EC2 + Docker deployments',
        'Jenkins pipelines',
        'CloudWatch monitoring',
      ],
      tech: [
        'React',
        'Spring Boot',
        'Hibernate',
        'AWS',
        'Docker',
        'Jenkins',
        'MySQL',
        'Oracle',
      ],
    },
    {
      company: 'Coupon Dunia',
      role: 'Software Developer',
      period: 'Oct 2018 – Dec 2020',
      location: 'India',
      bullets: [
        'Angular UI for coupons and search',
        'Spring Boot REST APIs',
        'Redis caching for performance',
        'Elasticsearch search indexing',
        'AWS EC2 + S3',
        'Jenkins CI/CD',
        'Production optimization',
      ],
      tech: [
        'Angular',
        'Spring Boot',
        'Redis',
        'Elasticsearch',
        'AWS',
        'Jenkins',
        'MySQL',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Professional journey</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block md:w-1/2"></div>
              
              <div className="relative z-10 w-full md:w-1/2">
                <motion.div 
                  className="absolute left-4 md:left-0 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 transform md:-translate-x-1/2"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                />
                
                <motion.div 
                  className="glass-card p-6 md:p-8 ml-12 md:ml-0"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {exp.role}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Briefcase className="w-6 h-6 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span>{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
