import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
              <div className="h-6 w-6 rounded-full bg-white"></div>
            </div>
            <span className="text-3xl font-bold text-primary">Board.</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
            Dashboard Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience powerful analytics, seamless user management, and intuitive design 
            in our comprehensive dashboard solution.
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-gradient-primary hover:shadow-elevated transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-muted-foreground">Real-time insights with beautiful charts and metrics</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-muted-foreground">Comprehensive user profiles and permission controls</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10 mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-warning" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
            <p className="text-muted-foreground">Monitor growth and optimize your business metrics</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Ready to transform your data into insights?</p>
          <Link to="/auth">
            <Button variant="outline" size="lg" className="hover:shadow-card transition-all duration-300">
              Sign In to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
