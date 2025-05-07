import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'service_prsd73c',
        'template_pyt67th',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'NjLh2_eVe_KqFJj8L'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.div 
          className="w-20 h-1 bg-zen-purple mx-auto mb-10 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            
            <p className="text-gray-300 mb-8">
              Whether you have a project in mind, job opportunity, or just want to say hi, 
              feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>
            
            <div className="space-y-6">
              <motion.a 
                href="mailto:shivendra9570.mishra@gmail.com" 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-zen-purple/20 p-3 rounded-full group-hover:bg-zen-purple/30 transition-colors">
                  <Mail className="text-zen-purple-light" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">shivendra9570.mishra@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/shibendra-mishra" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-zen-purple/20 p-3 rounded-full group-hover:bg-zen-purple/30 transition-colors">
                  <Linkedin className="text-zen-purple-light" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-gray-200">Shibendra Mishra</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://github.com/shibendra-mishra" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-zen-purple/20 p-3 rounded-full group-hover:bg-zen-purple/30 transition-colors">
                  <Github className="text-zen-purple-light" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-gray-200">shibendra-mishra</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gradient-card rounded-xl p-6 backdrop-blur-md border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.type && (
                  <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="block w-full bg-zen-dark/80 border border-zen-purple/30 focus:border-zen-purple-light focus:ring focus:ring-zen-purple/20 rounded-md px-4 py-3 text-gray-200 placeholder-gray-500"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full bg-zen-dark/80 border border-zen-purple/30 focus:border-zen-purple-light focus:ring focus:ring-zen-purple/20 rounded-md px-4 py-3 text-gray-200 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="block w-full bg-zen-dark/80 border border-zen-purple/30 focus:border-zen-purple-light focus:ring focus:ring-zen-purple/20 rounded-md px-4 py-3 text-gray-200 placeholder-gray-500"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="block w-full bg-zen-dark/80 border border-zen-purple/30 focus:border-zen-purple-light focus:ring focus:ring-zen-purple/20 rounded-md px-4 py-3 text-gray-200 placeholder-gray-500 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow w-full flex items-center justify-center gap-2 rounded-md px-6 py-3 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
