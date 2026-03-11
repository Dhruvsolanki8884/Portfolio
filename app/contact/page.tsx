'use client'

import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        console.error('Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'solankidhruvahir18@gmail.com',
      href: 'mailto:solankidhruvahir18@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7575898884',
      href: 'tel:+917575898884',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      href: 'https://maps.google.com',
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-slate-800 dark:hover:text-white',
    },
    {
      name: 'WhatsApp',
      icon: Send,
      href: 'https://wa.me/917575898884',
      color: 'hover:text-green-600 dark:hover:text-green-400',
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        <div className="min-h-screen px-4 py-20">
          <div className="w-full max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                I'd love to hear from you! Whether you have a question, a project proposal, or just want to connect, feel free to reach out.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-blue-500 group"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Icon size={24} className="text-blue-600 dark:text-blue-400 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {info.label}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 break-all">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="p-8 bg-white dark:bg-slate-800 rounded-lg shadow border border-slate-200 dark:border-slate-700 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Send Me a Message
              </h2>

              {submitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 rounded-lg">
                  ✓ Thank you for your message! I'll get back to you as soon as possible.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-900 dark:text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Connect With Me
              </h2>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-all duration-200 text-slate-700 dark:text-slate-300 ${social.color}`}
                      title={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Resume Download */}
            <div className="flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-900">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Download My Resume
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Get a complete overview of my skills, experience, and projects
              </p>
              <a
                href="/resume/Dhruv-Solanki-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Quick Response Promise */}
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-900 text-center">
              <p className="text-slate-900 dark:text-white font-medium">
                ⚡ I typically respond within 24 hours
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
