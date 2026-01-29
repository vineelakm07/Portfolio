import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vineelakm07@gmail.com',
      label: 'Email',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vineela-kandunuru-muni-062a95326',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/vineelakm',
      label: 'GitHub',
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Vineela Kandunuru Muni</h3>
            <p className="text-gray-400">
              Senior Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="block"
                    >
                      {item.label}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2026 Vineela Kandunuru Muni. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
