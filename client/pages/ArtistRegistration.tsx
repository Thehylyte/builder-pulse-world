import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  MapPin,
  Music,
  Users,
  Star,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function ArtistRegistration() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const festivals = [
    {
      name: "Lollapalooza",
      location: "Chicago, IL",
      dates: "July 31 - August 3, 2025",
      status: "available",
    },
    {
      name: "Riot Fest",
      location: "Chicago, IL",
      dates: "September 19-21, 2025",
      status: "available",
    },
    {
      name: "Sea.Hear.Now",
      location: "Asbury Park, NJ",
      dates: "September 13-14, 2025",
      status: "available",
    },
    {
      name: "Country Calling",
      location: "Ocean City, MD",
      dates: "October 3-5, 2025",
      status: "limited",
    },
  ];

  const perks = [
    {
      icon: Crown,
      title: "Priority Access",
      description:
        "Skip the lines with dedicated artist entrances and fast-track services",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description:
        "Exclusive access to newest brands and limited-edition items",
    },
    {
      icon: Users,
      title: "Dedicated Concierge",
      description:
        "Personal hospitality coordinator for all your festival needs",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-tent-blue/5">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                alt="The Tent Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
                THE TENT
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="/events"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Events
              </a>
              <a
                href="/founders"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Founders
              </a>
              <a
                href="/services"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button
                className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90"
                asChild
              >
                <a href="/artist-login">Artist Login</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-tent-blue/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/50">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="/"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/events"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </a>
                <a
                  href="/founders"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Founders
                </a>
                <a
                  href="/services"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button
                  className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 mt-2 mx-2"
                  asChild
                >
                  <a
                    href="/artist-login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Artist Login
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-tent-orange/10 to-tent-pink/10 text-tent-purple border-tent-purple/20 hover:from-tent-orange/20 hover:to-tent-pink/20">
              <Star className="w-4 h-4 mr-2" />
              Exclusive Artist Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
              Artist
              <br />
              Registration
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join The Tent's exclusive artist program and secure your
              hospitality services at the festivals where you're performing.
              Priority access, premium amenities, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Artist Perks */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              Why Artists Choose The Tent
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <perk.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{perk.title}</h3>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-pink to-tent-orange bg-clip-text text-transparent">
                Register as an Artist
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Complete your registration to access The Tent at your upcoming
                festival performances
              </p>
              <p className="text-sm text-muted-foreground">
                Already registered?{" "}
                <a
                  href="/artist-login"
                  className="text-tent-purple hover:text-tent-pink transition-colors font-medium"
                >
                  Sign in to your dashboard
                </a>
              </p>
            </div>

            <Card className="border-tent-purple/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-center">
                  Artist Information
                </h3>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                    Personal Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Artist/Stage Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        placeholder="Your stage or artist name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Legal Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        placeholder="Your legal name"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Management Information */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                    Management Contact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Manager/Agent Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        placeholder="Manager or agent name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Management Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        placeholder="management@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Information */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                    Performance Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Genre *
                      </label>
                      <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent">
                        <option value="">Select your genre</option>
                        <option value="rock">Rock</option>
                        <option value="pop">Pop</option>
                        <option value="hip-hop">Hip Hop</option>
                        <option value="electronic">Electronic</option>
                        <option value="country">Country</option>
                        <option value="folk">Folk</option>
                        <option value="jazz">Jazz</option>
                        <option value="classical">Classical</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Years Active *
                      </label>
                      <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent">
                        <option value="">Select experience level</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Festival Selection */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                    Festival Reservations
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select the festivals where you're performing and would like
                    to reserve The Tent services:
                  </p>
                  <div className="space-y-4">
                    {festivals.map((festival, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <input
                                type="checkbox"
                                id={`festival-${index}`}
                                className="w-5 h-5 text-tent-purple border-border rounded focus:ring-tent-purple"
                              />
                              <div>
                                <h5 className="font-semibold">
                                  {festival.name}
                                </h5>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {festival.location}
                                  </div>
                                  <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {festival.dates}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge
                              className={
                                festival.status === "available"
                                  ? "bg-green-500/20 text-green-700 border-green-300"
                                  : "bg-yellow-500/20 text-yellow-700 border-yellow-300"
                              }
                            >
                              {festival.status === "available"
                                ? "Available"
                                : "Limited"}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                    Additional Information
                  </h4>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Requirements or Requests
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent resize-none"
                      placeholder="Any special dietary requirements, accessibility needs, or specific services you'd like to request..."
                    ></textarea>
                  </div>
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 text-tent-purple border-border rounded focus:ring-tent-purple mt-1"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to The Tent's terms and conditions and understand
                    that registration is subject to verification of artist
                    credentials and festival performance confirmation. I
                    authorize The Tent to contact festival organizers to verify
                    my scheduled performances.
                  </label>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg py-6"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Submit Artist Registration
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Registration is subject to verification. You will receive
                    confirmation within 48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
              What Happens Next?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-tent-blue/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Verification</h3>
                <p className="text-muted-foreground">
                  We verify your artist credentials and festival performance
                  schedule within 48 hours.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-tent-purple/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tent-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Confirmation</h3>
                <p className="text-muted-foreground">
                  Receive your artist access confirmation and detailed
                  information about The Tent services.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-tent-pink/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tent-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <p className="text-muted-foreground">
                  Enjoy premium hospitality services at your festival
                  performances with dedicated support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
            Questions About Registration?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our artist relations team is here to help with your registration and
            answer any questions about The Tent services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tent-blue to-tent-purple hover:from-tent-blue/90 hover:to-tent-purple/90 text-lg px-8 py-6"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Artist Relations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-tent-pink/30 hover:bg-tent-pink/10"
            >
              <Music className="w-5 h-5 mr-2" />
              View Festival Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                alt="The Tent Logo"
                className="w-6 h-6"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
                THE TENT
              </span>
            </div>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
              <a
                href="/events"
                className="hover:text-foreground transition-colors"
              >
                Events
              </a>
              <a
                href="/artist-registration"
                className="hover:text-foreground transition-colors"
              >
                Artists
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 The Tent. Elevating festival experiences worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
