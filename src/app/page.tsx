'use client';

import Image from "next/image";
import Link from "next/link";
import AnimatedText from '@/components/AnimatedText'
import AnimatedCard from '@/components/AnimatedCard'
import { motion } from 'framer-motion'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'
import FloatingIcons from '@/components/FloatingIcons'
import { FormEvent, useState } from 'react';

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link 
    href={href}
    target="_blank"
    rel="noopener noreferrer" 
    className="glass-card p-4 hover-scale flex items-center gap-3 text-purple-800 dark:text-black"
  >
    {icon}
    <span className="text-lg font-medium">{label}</span>
  </Link>
);

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const projects = [
    {
        name: 'DevLinks',
        des: 'A link sharing app with firebass AUTH',
        link: 'https://youtu.be/iIQ8uDwZ5KU',
        img: '/devlink.png'
    },
    {
        name: 'Admin dashboard',
        des: 'Finacial admin dashboard',
        link: 'https://ewc-dj-eox7.vercel.app/',
        img: '/dash.png'
    },
 
    {
        name: 'EWC',
        des: 'Landing page for church ',
        link: 'https://ewc-dj-eox7.vercel.app/',
        img: '/ewc.png'

    },
   
    {
        name: 'URL shortener',
        des: 'Website to help shorten you URL',
        link: 'https://youtu.be/R8H0B6OiC1o',
        img: '/shortly.png'

    },
    {
        name: 'E-commerce site',
        des: 'Craft furniture where you can view products deyails, add to cart and checkout',
        link: 'https://hng-2-onlinestore.vercel.app/',
        img: '/fur.png'

    },
   

]
  return (
    <ThemeProvider>
      <main className="min-h-screen relative bg-gradient-to-br from-purple-50/50 to-white dark:from-gray-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-white/50 dark:bg-black/20" />
        <ThemeToggle />
        <FloatingIcons />
        
        {/* Content Container */}
        <div className="relative z-10 text-purple-800 dark:text-purple-200">
          {/* Hero Section */}
          <section className="h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="mb-8">
                <motion.div 
                  className="w-40 h-40 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-pink-300"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <Image
                    src="/my2.jpeg"
                    alt="Diveine"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <AnimatedText 
                  text="Divine-joy"
                  className="text-4xl font-semibold text-purple-800 dark:text-purple-200 mb-2 flex justify-center mx-auto"
                  delay={2}
                />
              </div>
              <AnimatedText 
                text="FullStack Developer"
                className="text-6xl md:text-7xl font-bold gradient-text flex justify-center mx-auto"
              />
              <AnimatedText 
                text="Crafting beautiful digital experiences with code and creativity"
                className="text-xl md:text-2xl text-purple-800/80 dark:text-purple-300/90"
                delay={5}
              />
              <motion.div 
                className="flex flex-col md:flex-row gap-6 justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* Social Links */}
                <SocialIcon 
                  href="https://github.com/deevinejoy"
                  icon={
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                  label="GitHub"
                />
                <SocialIcon 
                  href="https://linkedin.com/in/yourusername"
                  icon={
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  }
                  label="LinkedIn"
                />
                <SocialIcon 
                  href="mailto:your.akindivinejoy@gmail.com"
                  icon={
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                    </svg>
                  }
                  label="Email"
                />
                <Link 
                  href="/mycv.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="glass-card p-4 hover-scale flex items-center gap-3 text-purple-800 dark:text-black"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-lg font-medium">Download CV</span>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="py-20 px-4  from-pink-50/50 to-purple-50/50">
            <div className="max-w-6xl mx-auto">
              <AnimatedText 
                text="About Me"
                className="text-5xl md:text-6xl font-bold gradient-text mb-16 text-center"
              />
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedCard className="p-8">
                  <div className="prose prose-lg">
                    <p className="text-xl md:text-2xl text-purple-800/80 dark:text-purple-300/90 leading-relaxed">
                      Hello! I&apos;m a passionate developer who loves creating beautiful and functional web experiences. 
                      With a keen eye for design and a love for clean code, I bring creativity and technical expertise 
                      to every project I work on.
                    </p>
                    <p className="text-xl md:text-2xl text-purple-800/80 dark:text-purple-300/90 leading-relaxed mt-6">
                    My commitment to continuous learning and problem solving skills makes me a valuable asset to any Tech team and my drive to deliver high quality results set me apart as a hardworking developer ready to take on new challenges.
                    </p>
                  </div>
                </AnimatedCard>
                <AnimatedCard className="p-8" delay={3}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-purple-800 dark:text-purple-200 mb-3">Languages</h3>
                      <p className="text-xl md:text-2xl text-purple-800/70 dark:text-purple-300/90">English (Native), Spanish(Intermediate)</p>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-purple-800 dark:text-purple-200 mb-3">Education</h3>
                      <p className="text-xl md:text-2xl text-purple-800/70 dark:text-purple-300/90">Bsc. in Chemistry</p>
                      <p className="text-xl md:text-2xl text-purple-800/70 dark:text-purple-300/90">Obafemi awolow University</p>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-purple-800 dark:text-purple-200 mb-3">Interests</h3>
                      <p className="text-xl md:text-2xl text-purple-800/70 dark:text-purple-300/90">Web Development, UI/UX Design, AI, Blockchain</p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedText 
                text="Professional Experience"
                className="text-5xl md:text-6xl font-bold gradient-text mb-16 text-center"
              />
              <div className="space-y-12">
                {[
                  {
                    period: "2024 - Present",
                    role: "Senior Frontend Developer",
                    company: "Ajoo.me",
                    description: "Led the development of modern web applications using React and Next.js. Implemented responsive designs and improved performance metrics."
                  },
                  {
                    period: "2023 - 2024",
                    role: "App developer",
                    company: "Codeplay",
                    description: "Developed and maintained full-stack applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions."
                  },
                  {
                    period: "2018 - 2020",
                    role: "Junior Developer",
                    company: "Kitarific agency",
                    description: "Started my journey in web development and web design, working on various client projects and learning modern development practices."
                  },
                  {
                    period: "2018 - 2020",
                    role: "Frontend intern",
                    company: "HNG",
                    description: "Started my journey in web development and web design, working on various client projects and learning modern development practices."
                  }
                ].map((experience, index) => (
                  <AnimatedCard key={index} delay={index * 2} className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="md:w-1/4">
                        <p className="text-xl text-pink-600 dark:text-pink-300 font-semibold">{experience.period}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-purple-800 dark:text-purple-200">{experience.role}</h3>
                        <p className="text-xl md:text-2xl text-purple-800/70 dark:text-purple-300/90">{experience.company}</p>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-xl md:text-2xl text-purple-800/80 dark:text-purple-300/90 leading-relaxed">{experience.description}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedText 
                text="Featured Projects"
                className="text-5xl md:text-6xl font-bold gradient-text mb-16 text-center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer">
                    <AnimatedCard delay={index * 2} className="p-6 hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-white/50 dark:bg-dark-card/50">
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-6 border-2 border-purple-200 dark:border-purple-700">
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-purple-300">{project.name}</h3>
                      <p className="text-purple-800/70 dark:text-purple-400">{project.des}</p>
                    </AnimatedCard>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-20 px-4  from-pink-50/50 to-purple-50/50">
            <div className="max-w-6xl mx-auto">
              <AnimatedText 
                text="Skills & Expertise"
                className="text-5xl md:text-6xl font-bold gradient-text mb-16 text-center"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['React', 'Next.js', 'React Native', 'MongoDB','TypeScript', 'Expreejs', 'Tailwind CSS', 'Node.js', 'UI/UX Design', 'Animation', 'Responsive Design'].map((skill, index) => (
                  <AnimatedCard key={skill} delay={index} className="p-6 text-center">
                    <p className="text-xl md:text-2xl font-semibold text-purple-800 dark:text-purple-200">{skill}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedText 
                text="Let&apos;s Connect"
                className="text-5xl md:text-6xl font-bold gradient-text mb-16 text-center"
              />
              <AnimatedCard className="p-8 backdrop-blur-sm bg-white/50 dark:bg-dark-card/50">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label className="block text-2xl font-medium dark:text-purple-300">Name</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      className="w-full px-6 py-4 text-xl rounded-lg bg-white/50 dark:bg-dark-bg/50 border border-pink-200 dark:border-purple-700 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-2xl font-medium dark:text-purple-300">Email</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 text-xl rounded-lg bg-white/50 dark:bg-dark-bg/50 border border-pink-200 dark:border-purple-700 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-2xl font-medium dark:text-purple-300">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      className="w-full px-6 py-4 text-xl rounded-lg bg-white/50 dark:bg-dark-bg/50 border border-pink-200 dark:border-purple-700 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <motion.button 
                    type="submit"
                    disabled={formStatus === 'sending' || formStatus === 'sent'}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-semibold py-4 rounded-lg disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'sending' && 'Sending...'}
                    {formStatus === 'sent' && 'Message Sent!'}
                    {formStatus === 'error' && 'Error - Try Again'}
                  </motion.button>
                </form>
              </AnimatedCard>
            </div>
          </section>
        </div>
      </main>
    </ThemeProvider>
  );
}
