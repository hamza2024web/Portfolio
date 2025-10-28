import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { LearningSection } from "@/components/learning-section"
import { GitHubStats } from "@/components/github-stats"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">À Propos</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Je suis un développeur Full Stack passionné par la création d'applications web robustes et modernes.
                  Actuellement en 2ème année à YouCode-UM6P en Science des Données, je me spécialise dans l'écosystème
                  Java/Spring Boot et Angular.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Mon approche allie la rigueur du backend (Java, Spring Boot, API REST, bases de données) à la
                  créativité du frontend (Angular, React, TypeScript, interfaces modernes). Je suis également intéressé
                  par les pratiques DevOps (Docker, CI/CD) et les méthodologies Agiles.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Je transforme des concepts complexes en solutions élégantes, performantes et évolutives.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Expertise Clé</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Développement Backend Java/Spring Boot</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Frontend Angular & React</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Architecture Microservices</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">DevOps & Docker</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Méthodologies Agiles & GitFlow</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LearningSection />

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Expérience Professionnelle</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Développeur Full Stack</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Commune Urbaine d'Agadir</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Mai - Juillet 2025</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 font-medium">Projet: Plateforme Agadir Events</p>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Développement full-stack d'une plateforme événementielle municipale</li>
                  <li>Stack: Laravel 12, Vue.js 3, Inertia.js, MySQL, Docker</li>
                  <li>Implémentation d'un système multilingue (FR/AR/EN) avec support RTL</li>
                  <li>Création d'un dashboard administrateur complet avec CRUD</li>
                  <li>Authentification OAuth 2.0 pour les employés municipaux</li>
                  <li>Méthodologies Agiles: GitFlow, ClickUp, Notion, Figma</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Projets Principaux</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Clinique Digitale</CardTitle>
                  <CardDescription>Application de gestion médicale</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/medical-clinic-dashboard.jpg" alt="Clinique Digitale" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Application complète de gestion médicale avec architecture modulaire Maven. Gestion des rendez-vous,
                    notes médicales sécurisées, et déploiement automatisé avec Docker.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      Java EE
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      WildFly
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" asChild>
                    <Link href="https://github.com/hamza2024web/clinique-digitale" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Voir sur GitHub</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Club Video Games</CardTitle>
                  <CardDescription>Plateforme de gestion de tournois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/gaming-tournament-platform.jpg" alt="Club Video Games" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Plateforme complète de gestion de club gaming avec système de tournois automatisé. Algorithme de
                    génération de matchs, interface gaming immersive et dashboard pour organisateurs.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      PHP OOP
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      MySQL
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      UX Design
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" asChild>
                    <Link href="https://github.com/hamza2024web/club-video-games" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Voir sur GitHub</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Agadir Events</CardTitle>
                  <CardDescription>Plateforme événementielle municipale</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/events-management-platform.jpg" alt="Agadir Events" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Plateforme web de gestion et promotion des événements locaux. Architecture MVC moderne avec
                    Inertia.js, système multilingue complet, dashboard administrateur et authentification OAuth 2.0.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      Laravel 12
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      Vue.js 3
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
                      i18n
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Projet Privé</span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Compétences Techniques</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">BE</span>
                    </span>
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Java
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Spring Boot
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Java EE
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      PHP/Laravel
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      REST API
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Microservices
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Maven
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      JPA/Hibernate
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mr-2">
                      <span className="text-cyan-600 dark:text-cyan-300 text-sm font-bold">FE</span>
                    </span>
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Angular
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      React
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Vue.js
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      TypeScript
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      HTML5/CSS3
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Responsive Design
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      UX/UI
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
                    Bases de Données
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      PostgreSQL
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      MySQL
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      MongoDB
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      SQL Optimization
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Database Design
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      JPA/ORM
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
                    DevOps & Outils
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-center py-2">
                      Docker
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Git/GitHub
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      CI/CD
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      GitFlow
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      Postman
                    </Badge>
                    <Badge variant="secondary" className="justify-center py-2">
                      JUnit Testing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="mt-12">
            <GitHubStats />
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Formation & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Formation</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">Développeur Full Stack Java Angular</h4>
                      <p className="text-blue-600 dark:text-blue-400">YouCode - UM6P</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2024 - 2025 (en cours)</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Spécialisation: Science des Données | Localisation: Safi, Maroc
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">Cycle Préparatoire</h4>
                      <p className="text-blue-600 dark:text-blue-400">Faculté des Sciences d'Agadir</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2022 - 2023</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Sciences Mathématiques et Informatiques</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">Baccalauréat</h4>
                      <p className="text-blue-600 dark:text-blue-400">Lycée Almassira Al Khadra</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2022</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Sciences Mathématiques Option A</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Travaillons Ensemble</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Informations de Contact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Vous avez un projet en tête ou une opportunité à discuter ? Je serais ravi d'échanger avec vous !
                </p>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="mailto:hamzaakroubi1528@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      hamzaakroubi1528@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="tel:+212679745889"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +212 679 74 58 89
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/hamzaakroubi"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-blue-600 mr-3" />
                    <a
                      href="https://github.com/hamza2024web"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">Je réponds généralement sous 24h.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
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
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Hamza Akroubi</h2>
              <p className="text-gray-400">Développeur Java Full Stack | Agadir, Maroc</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/hamzaakroubi"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/hamza2024web"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hamzaakroubi1528@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+212679745889"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Hamza Akroubi. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
