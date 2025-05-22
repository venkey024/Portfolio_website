import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Contact } from '../types';

interface ContactSectionProps {
  contact: Contact;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const [state, handleSubmit] = useForm("mbloedne"); // Formspree form ID

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">{contact.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faLocationDot} className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">{contact.location}</p>
              </div>
            </div>

            <div className="flex space-x-6 mt-8">
              {contact.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-sky-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon 
                    icon={link.name.toLowerCase() === 'github' ? faGithub : faLinkedin} 
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="mt-2 text-red-600 text-sm"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
