"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/client-animations"
import { Github } from "lucide-react"

export function GitHubStats() {
  return (
    <AnimatedSection delay={0.3}>
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Github className="w-5 h-5 mr-2 text-blue-600" />
            Activité GitHub
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Repos Publics</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
              <div className="text-2xl font-bold text-cyan-600">Java</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Principal</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-600">PHP</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Secondaire</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
              <div className="text-2xl font-bold text-cyan-600">TS</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Frontend</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50">
              hamza2024web
            </Badge>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}
