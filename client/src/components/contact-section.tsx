import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitContact.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shivanshchaurasiya@gmail.com",
      href: "mailto:shivanshchaurasiya@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7007317605",
      href: "tel:+917007317605"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-background transition-colors duration-200 group"
                  data-testid={`contact-${item.label.toLowerCase()}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">Follow</p>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/mrshivanshchaurasiya"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-linkedin"
                >
                  <span className="text-xs font-semibold">in</span>
                </a>
                <a
                  href="https://www.behance.net/chaurasiyashivansh"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-behance"
                >
                  <span className="text-xs font-semibold">Be</span>
                </a>
                <a
                  href="https://github.com/Shiva-1220"
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-github"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="premium-card p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="input-premium h-11"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="input-premium h-11"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="input-premium resize-none"
                            rows={4}
                            data-testid="input-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full h-11 bg-primary hover:bg-primary/90 rounded-xl btn-premium"
                    disabled={submitContact.isPending}
                    data-testid="button-submit-contact"
                  >
                    {submitContact.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
