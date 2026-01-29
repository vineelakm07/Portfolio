import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github } from 'lucide-react'
import RippleButton from './RippleButton'

const Hero = () => {
  const handleDownload = () => {
    window.open('/resume/Vineela kandunuru muni.pdf.pdf', '_blank')
  }

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section-container min-h-screen flex items-center pt-20">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl bg-white relative z-10"
            >
              <img
                src="/profile.jpg"
                alt="Vineela Kandunuru Muni"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://via.placeholder.com/400?text=Vineela+Kandunuru+Muni'
                }}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            HELLO, I'M
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Vineela Kandunuru Muni
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
          >
            Senior Full Stack Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
          >
            Senior Full Stack Developer with 7+ years of experience building enterprise applications using Java, Spring Boot microservices, and Angular/React frontends. Experienced in Kafka-based event-driven systems, secure APIs with OAuth2/JWT, and cloud deployments on AWS and Azure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <RippleButton
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </RippleButton>
            
            <RippleButton
              onClick={handleContactClick}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold shadow-lg transition-colors"
            >
              Let's Talk
            </RippleButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="mailto:vineelakm07@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vineelakm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://github.com/vineelakm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
