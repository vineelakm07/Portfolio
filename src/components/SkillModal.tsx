import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface SkillModalProps {
  isOpen: boolean
  onClose: () => void
  skillName: string
  usedIn: string[]
}

const SkillModal = ({ isOpen, onClose, skillName, usedIn }: SkillModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-md w-full relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {skillName}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Used in:</p>
              <ul className="space-y-2">
                {usedIn.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SkillModal
