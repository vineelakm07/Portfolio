import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Master's in Business Analytics",
      institution: 'University of North Texas',
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'R.M.D Engineering College',
    },
  ]

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100
            }}
            className="glass-card p-8 text-center"
            whileHover={{ 
              scale: 1.05,
              y: -8,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
