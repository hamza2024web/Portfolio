"use client"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.about.title}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">{t.about.description1}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">{t.about.description2}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium italic">{t.about.description3}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.about.keyExpertise}</h3>
                <ul className="space-y-2">
                  {t.about.expertise.map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.experience.title}</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{job.company}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{job.period}</p>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.projects.title}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.status && (
                        <Badge
                          variant="outline"
                          className={
                            project.status.includes("Production") || project.status.includes("production")
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-300"
                          }
                        >
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full relative overflow-hidden group bg-transparent"
                      asChild={
                        project.title === "Clinique Digitale" || project.title === "Digital Clinic"
                          ? true
                          : project.title === "Club Video Games"
                            ? true
                            : false
                      }
                      disabled={
                        project.title !== "Clinique Digitale" &&
                        project.title !== "Digital Clinic" &&
                        project.title !== "Club Video Games"
                      }
                    >
                      {project.title === "Clinique Digitale" || project.title === "Digital Clinic" ? (
                        <Link href="https://github.com/hamza2024web/clinique-digitale" target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          <span className="relative z-10">GitHub</span>
                          <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                        </Link>
                      ) : project.title === "Club Video Games" ? (
                        <Link href="https://github.com/hamza2024web/club-video-games" target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          <span className="relative z-10">GitHub</span>
                          <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                        </Link>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          <span className="relative z-10">Private</span>
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.skills.title}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">BE</span>
                    </span>
                    {t.skills.backend}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Java
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Spring Boot
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Java EE
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      PHP / Laravel
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      REST API
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Microservices
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Maven
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      JPA / Hibernate
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">FE</span>
                    </span>
                    {t.skills.frontend}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Angular
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Vue.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Tailwind CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Bootstrap
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Responsive Design
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">DB</span>
                    </span>
                    {t.skills.database}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      MySQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      SQL Optimization
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Database Design
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      JPA / Hibernate
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">OPS</span>
                    </span>
                    {t.skills.devops}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Git / GitHub
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      CI/CD
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      WildFly / Tomcat
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Postman
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      JUnit
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">{t.skills.additionalTech}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                >
                  Agile / Scrum
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  UML / Merise
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  Design Patterns
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                >
                  MVC Architecture
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  OAuth 2.0
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                >
                  Inertia.js
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                >
                  GitFlow
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                >
                  i18n / RTL
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.learning.title}</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.learning.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🚀</span>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t.education.title}</h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 hidden md:block"></div>

            <div className="space-y-8">
              {t.education.items.map((item, index) => (
                <AnimatedSection key={index} direction="left" delay={0.2 + index * 0.1}>
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300 md:ml-16">
                    {/* Timeline dot */}
                    <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{item.degree}</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">{item.school}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{item.period}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center">{t.contact.title}</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">{t.contact.message}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">{t.contact.info}</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:hamzaakroubi1528@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      hamzaakroubi1528@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="tel:+212679745889"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      +212 679 74 58 89
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/hamzaakroubi"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://github.com/hamza2024web"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <span className="text-2xl mr-2">⏰</span>
                    {t.contact.responseTime}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-xl font-bold">{t.footer.title}</h2>
              <p className="text-gray-400">{t.footer.subtitle}</p>
              <p className="text-sm text-gray-500">{t.footer.location}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/hamzaakroubi"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/hamza2024web"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hamzaakroubi1528@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+212679745889"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} {t.footer.title}. {t.footer.builtWith}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
