"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/client-animations"
import { Zap } from "lucide-react"

export function LearningSection() {
  const learningTopics = ["Microservices Architecture", "Kubernetes & Cloud", "Testing Avancé (TDD)", "GraphQL"]

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center mb-8">
            <Zap className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold">En Cours d'Apprentissage</h3>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Engagement continu dans l'apprentissage et la veille technologique
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
