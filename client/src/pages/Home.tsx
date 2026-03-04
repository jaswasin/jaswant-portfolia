import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { 
  ArrowRight, Cloud, Database, Cpu, Lock, 
  Layers, Github, Linkedin, Mail, ExternalLink, 
  Server, ShieldCheck, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { api, type MessageInput } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const form = useForm<MessageInput>({
    resolver: zodResolver(api.messages.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const createMessage = useCreateMessage();

  const onSubmit = (data: MessageInput) => {
    createMessage.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 bg-grid-white pointer-events-none z-0"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight text-gradient">
                Jaswant Singh
              </motion.h1>
              
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-display font-medium text-gradient-primary">
                AI & Cloud Platform Architect
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                18+ years designing large-scale distributed systems, multi-tenant SaaS architectures, and enterprise AI platforms across AWS and Azure.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base font-semibold shadow-[0_0_40px_-10px_rgba(0,229,255,0.5)]"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <div className="flex items-center gap-3 ml-4">
                  <a href="https://www.linkedin.com/in/jaswant-singh-3045ba17/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://medium.com/@jaswant.vision" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-white font-display font-bold text-xl">
                    M
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-8">Executive Profile</motion.h3>
              <motion.div variants={fadeInUp} className="glass-panel p-8 md:p-12 rounded-3xl text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  I am an AI & Cloud Platform Architect with over 18 years of experience designing large-scale distributed systems and intelligent cloud-native platforms across AWS and Azure.
                </p>
                <p>
                  My proven expertise lies in building multi-tenant SaaS architectures, event-driven microservices, AI-powered data platforms, and enterprise marketplace ecosystems serving global customers.
                </p>
                <p>
                  I possess a strong foundation in system design, scalability engineering, API platform strategy, DevOps automation, and pioneering AI-driven search systems.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section id="expertise" className="py-24 px-6 md:px-12 bg-black/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Core Competencies</h3>
                <p className="text-muted-foreground text-lg max-w-2xl">A comprehensive architectural skillset balancing infrastructure, distributed software design, and modern AI integration.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Layers, title: "Distributed Systems", desc: "Microservices architecture and event-driven design (EDA) for high throughput." },
                  { icon: Cloud, title: "Cloud-Native & SaaS", desc: "Multi-tenant SaaS platform design across AWS & Azure ecosystems." },
                  { icon: Zap, title: "AI-Augmented Data", desc: "Semantic search, vector databases, and LangChain integration." },
                  { icon: Server, title: "Container Orchestration", desc: "Kubernetes, Docker, and scalable infrastructure management." },
                  { icon: Lock, title: "DevSecOps & IaC", desc: "CI/CD automation, Terraform, and rigorous security governance." },
                  { icon: ShieldCheck, title: "Reliability Engineering", desc: "Observability, caching strategies, and performance optimization." },
                ].map((skill, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <Card className="glass-panel border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                          <skill.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-display font-semibold mb-3 text-white">{skill.title}</h4>
                        <p className="text-muted-foreground">{skill.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-32 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold mb-16">Professional Journey</motion.h3>
              
              <div className="space-y-12">
                {[
                  {
                    role: "Solution Architect",
                    company: "Nagarro",
                    period: "2021 – Present",
                    highlights: [
                      "Architected AWS-based distributed microservices platform using .NET Core, Docker, Kubernetes, and Terraform.",
                      "Designed multi-tenant onboarding, order orchestration, and billing systems with high scalability.",
                      "Defined secure enterprise integration patterns across ERP, payment gateways, and logistics.",
                      "Led DevOps automation and container orchestration initiatives."
                    ]
                  },
                  {
                    role: "Principal Engineer / Solution Architect",
                    company: "UnitedHealth Group",
                    period: "2017 – 2021",
                    highlights: [
                      "Led transformation of legacy monolithic healthcare analytics system into event-driven distributed microservices.",
                      "Designed secure API gateway architecture and automated infrastructure provisioning using Terraform and Jenkins.",
                      "Implemented scalable data processing using AWS Lambda."
                    ]
                  },
                  {
                    role: "Technical Architect",
                    company: "Tesco",
                    period: "2014 – 2017",
                    highlights: [
                      "Architected enterprise-scale REST services managing 300M+ customer profiles.",
                      "Optimized performance through caching, throttling, and Oracle Exadata data strategies."
                    ]
                  }
                ].map((job, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-white/10">
                      <div className="absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                    </div>
                    
                    <div className="md:grid md:grid-cols-[130px_1fr] gap-12">
                      <div className="text-sm font-medium text-primary mb-2 md:mb-0 md:text-right pt-1">
                        {job.period}
                      </div>
                      <div className="glass-panel p-8 rounded-2xl relative">
                        {/* Mobile timeline dot */}
                        <div className="md:hidden absolute top-10 -left-10 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                        
                        <h4 className="text-2xl font-display font-bold text-white mb-1">{job.role}</h4>
                        <h5 className="text-lg text-muted-foreground mb-6 font-medium">{job.company}</h5>
                        <ul className="space-y-3">
                          {job.highlights.map((h, j) => (
                            <li key={j} className="text-muted-foreground flex gap-3">
                              <span className="text-primary mt-1.5 opacity-50">▹</span>
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-12 bg-black/40 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's build something extraordinary.</h3>
                <p className="text-muted-foreground text-lg mb-10">
                  Open for technical leadership roles, architectural consulting, or collaborative tech discussions. Drop a message and I'll get back to you.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:jaswant.vision@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg">jaswant.vision@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-lg">Bangalore, India</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-panel p-8 rounded-3xl relative">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="bg-black/50 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 h-12 rounded-xl" 
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
                          <FormLabel className="text-white/70">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="john@company.com" 
                              className="bg-black/50 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 h-12 rounded-xl" 
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
                          <FormLabel className="text-white/70">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we collaborate?" 
                              className="bg-black/50 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 min-h-[120px] rounded-xl resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full h-12 rounded-xl bg-white text-black hover:bg-gray-200 font-semibold text-base transition-all"
                      disabled={createMessage.isPending}
                    >
                      {createMessage.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="py-8 px-6 border-t border-white/5 text-center text-muted-foreground relative z-10 bg-background">
        <p>© {new Date().getFullYear()} Jaswant Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}
