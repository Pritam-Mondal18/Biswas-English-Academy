import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgAbout from '../assets/bg-about.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("kXx-F1fn8qUueTUfn");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const formData = {
        from_name: form.current.name.value,
        from_email: form.current.email.value,
        subject: form.current.subject.value,
        message: form.current.message.value,
        to_name: 'Himanshu'
      };

      const result = await emailjs.send(
        '########', service id yaha daal lena
        '########', template id yaha
        formData,
        '#########' public api key yaha
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        form.current.reset();
      } else {
        throw new Error('Unexpected response from EmailJS');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white w-full min-h-screen"
      style={{
        backgroundImage: `url(${bgAbout})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '2rem'
      }}
    >
      <div className="absolute inset-0 bg-white/90 z-[20]"></div>
      <div className="container relative mx-auto px-4 py-16 pt-4 z-[25]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#4ADE80] text-sm font-semibold tracking-wider uppercase">
            CONTACT ME
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
            Let's Start A New Project
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Location</h3>
                <p className="text-sm text-gray-600">Kolkata, West Bengal, India</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600">+91 7070464508</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">himanshu7554@gmail.com</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 text-sm bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4ADE80]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-3 py-2 text-sm bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4ADE80]"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-3 py-2 text-sm bg-white/80 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4ADE80]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full px-3 py-2 text-sm bg-white/80 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-[#4ADE80]"
              ></textarea>
              
              {submitStatus.message && (
                <div className={`text-sm ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#4ADE80] text-white text-sm py-2.5 rounded-lg font-medium hover:bg-[#3dbb6d] transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT NOW'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;