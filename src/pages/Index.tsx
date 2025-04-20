import { Button } from "@/components/ui/button";
import { MessageSquare, Gift, ChartBar, Calendar, Users } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
      {/* Hero Section with enhanced styling */}
      <section className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative">
          <Badge 
            variant="secondary" 
            className="mb-6 text-purple-700 bg-purple-100 hover:bg-purple-200 relative
              before:content-[''] before:absolute before:inset-0 
              before:bg-purple-400/20 before:animate-pulse before:rounded-full before:blur-xl"
          >
            The Future of Salon Booking
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 animate-fade-in font-[Libre Baskerville]">
            BookMyCut
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-4 font-medium font-[Libre Baskerville]">
            Your next cut is just a message away.
          </p>
          <p className="text-slate-600 mb-12 text-lg font-[Libre Baskerville]">
            A WhatsApp-based salon booking automation system that transforms how you schedule your salon visits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 gap-2">
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Users className="w-5 h-5" />
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Active Salons", value: "500+" },
            { label: "Monthly Bookings", value: "10k+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Time Saved", value: "85%" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section with enhanced styling */}
      <section className="container px-4 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent pointer-events-none" />
        <div className="text-center mb-12">
          <Badge 
            variant="outline" 
            className="mb-4 relative overflow-hidden
              before:content-[''] before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-purple-400/0 before:via-purple-400/50 before:to-purple-400/0 
              before:animate-[shine_2s_ease-in-out_infinite]"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Streamline your salon experience with our innovative booking system
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard 
            icon={MessageSquare}
            title="Instant Booking via WhatsApp"
            description="Book your next salon appointment with a simple WhatsApp message. No app downloads required."
            className="hover:translate-y-[-4px] transition-transform"
          />
          <FeatureCard 
            icon={Gift}
            title="Loyalty Points for Every Visit"
            description="Earn rewards automatically with each salon visit. Track points and redeem them easily."
            className="hover:translate-y-[-4px] transition-transform"
          />
          <FeatureCard 
            icon={ChartBar}
            title="Smart Dashboard for Salons"
            description="Manage appointments and customer relationships effortlessly with our intuitive dashboard."
            className="hover:translate-y-[-4px] transition-transform"
          />
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Simple Steps</Badge>
            <h2 className="text-3xl font-bold mb-4">How it Works</h2>
            <p className="text-slate-600">Get started in minutes with these easy steps</p>
          </div>
          <div className="space-y-12">
            <StepCard
              step={1}
              title="Scan QR or say Hi on WhatsApp"
              description="Start by scanning the salon's unique QR code or sending a message to begin your booking journey."
            />
            <StepCard
              step={2}
              title="Choose your service and time"
              description="Browse available services and pick your preferred time slot with real-time availability."
            />
            <StepCard
              step={3}
              title="Show up. Get rewarded."
              description="Visit the salon at your scheduled time and automatically earn loyalty points for your next visit."
            />
          </div>
        </div>
      </section>

      {/* For Salons Section */}
      <section className="container px-4 py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 border-0">For Business</Badge>
          <h2 className="text-3xl font-bold mb-4">Transform Your Salon Business</h2>
          <p className="text-slate-600 mb-6 text-lg">
            Automate your booking process and build customer loyalty with our WhatsApp-powered system. Reduce no-shows and increase repeat visits with smart reminders and loyalty programs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-500">
            <Badge variant="outline" className="bg-white px-4 py-2">
              Powered by WhatsApp Business API
            </Badge>
            <Badge variant="outline" className="bg-white px-4 py-2">
              24/7 Support
            </Badge>
            <Badge variant="outline" className="bg-white px-4 py-2">
              Real-time Analytics
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">Get Started</Badge>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
            <p className="text-slate-600">Drop us a message and we'll get back to you shortly</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
