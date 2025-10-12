import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, Code2, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Feature-Based Architecture",
    description: "Organized by features with clear separation of concerns"
  },
  {
    icon: Palette,
    title: "shadcn/ui Components", 
    description: "Beautiful, accessible components built on Radix UI"
  },
  {
    icon: Zap,
    title: "React Router v7",
    description: "File-based routing with modern patterns"
  }
];

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="mb-4">
            React Starter Template
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Modern React
            <span className="text-primary"> Starter</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A minimal, production-ready starter template with feature-based architecture, 
            shadcn/ui components, and React Router v7
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <Icon className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Perfect for Starters</CardTitle>
            <CardDescription>
              Everything you need to build scalable React applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Architecture</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Feature-based organization</li>
                  <li>• Shared components library</li>
                  <li>• Clear folder structure</li>
                  <li>• Unidirectional dependencies</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Developer Experience</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• TypeScript throughout</li>
                  <li>• Hot reload with Vite</li>
                  <li>• All shadcn/ui components</li>
                  <li>• Ready to customize</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
