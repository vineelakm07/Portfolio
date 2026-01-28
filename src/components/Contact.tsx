import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import RippleButton from './RippleButton'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:vineelakm07@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vineelakm07@gmail.com',
      href: 'mailto:vineelakm07@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (940) 536-3384',
      href: 'tel:+19405363384',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vineelakm',
      href: 'https://linkedin.com/in/vineelakm',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/vineelakm',
      href: 'https://github.com/vineelakm',
    },
  ]

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's connect</p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="glass-card p-8"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h3>
          
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="glass-card p-8"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: 'name', label: 'Name', type: 'text' },
              { id: 'email', label: 'Email', type: 'email' },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                  onFocus={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none transition-all"
                onFocus={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <RippleButton
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </RippleButton>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
