import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to scale your Amazon business? Let's discuss how I can help 
              you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-background border-border/50 focus:border-primary h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="bg-background border-border/50 focus:border-primary h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-background border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="bg-background rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Connect With Me
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:alex@example.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <span>alex@example.com</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Linkedin className="text-primary" size={20} />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Github className="text-primary" size={20} />
                    </div>
                    <span>GitHub Profile</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-muted-foreground text-sm">
                    Based in <span className="text-foreground">New York, USA</span>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Available for <span className="text-primary">remote work worldwide</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
