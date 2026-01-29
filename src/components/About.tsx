import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import RippleButton from './RippleButton'

const About = () => {
  const highlights = [
    '7+ years building enterprise applications across FinTech, Healthcare, Banking, E-commerce',
    'Expert in Java, Spring Boot microservices & REST APIs',
    'Strong UI development using Angular & React',
    'Event-driven systems using Kafka & RabbitMQ',
    'Cloud-native deployments on AWS & Azure with Docker & Kubernetes',
  ]

  const frontendBullets = [
    'Angular & React enterprise dashboards and workflow UIs',
    'Reusable components, state management, routing & role-based access',
    'REST API integration using HttpClient, RxJS, Axios',
    'Reactive forms, validations, and performance tuning',
    'Secure UI flows aligned with Spring Security roles',
  ]

  const backendBullets = [
    'Java 8/17 Spring Boot microservices with REST APIs',
    'Kafka & RabbitMQ for async event-driven workflows',
    'OAuth2, JWT, RBAC, secure API authentication',
    'PostgreSQL, MySQL, Oracle, MongoDB with JPA/Hibernate',
    'AWS & Azure deployments with Docker, Kubernetes & CI/CD',
  ]

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">Professional overview</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="glass-card p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        >
          {/* Title & Location */}
          <div className="text-center mb-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1"
            >
              Senior Full Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-sm text-gray-500 dark:text-gray-400 mb-3"
            >
              (7+ Years)
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Fort Worth, TX</span>
            </motion.div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <RippleButton
              onClick={() => window.open('https://github.com/vineelakm', '_blank')}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </RippleButton>
            <RippleButton
              onClick={() => window.open('https://www.linkedin.com/in/vineela-kandunuru-muni-062a95326', '_blank')}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </RippleButton>
            <RippleButton
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vineelakm07@gmail.com', '_blank')}
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              whileHover={{ y: -2, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </RippleButton>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Two Stacked Cards */}
        <div className="space-y-6">
          {/* Frontend Development Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="glass-card p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h4>
            <ul className="space-y-2">
              {frontendBullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Development & Cloud Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100 }}
            className="glass-card p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Backend Development & Cloud
            </h4>
            <ul className="space-y-2">
              {backendBullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mt-1.5 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
