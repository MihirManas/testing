import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Zap, ShieldCheck, Users, LayoutDashboard, Quote } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants/reviews';

const HomeView = () => {
  const navigate = useNavigate();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroContent = [
    {
      text: <span key="0">Stop Sending <span className="text-[#E6C875]">Resumes.</span> Start Proving Competence.</span>,
      buttonText: "Build Your Proof",
      route: "/courses"
    },
    {
      text: <span key="1">Stop applying randomly. <span className="text-[#E6C875]">Find out exactly</span> why you are not getting interview calls.</span>,
      buttonText: "Analyse Your Resume",
      route: "/analyse"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroContent.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 ease-out">
      <div className="relative min-h-screen flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={100}>
              <div>
                <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#E6C875] animate-pulse shadow-[0_0_10px_#E6C875]"></span>
                  <span className="text-xs font-bold text-gray-700 dark:text-white/80 uppercase tracking-[0.25em]">Admissions Open 2026</span>
                </div>

                <div className="grid relative mb-8">
                  {heroContent.map((item, idx) => (
                    <h1 
                      key={idx}
                      className={`col-start-1 row-start-1 w-full text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white tracking-tighter leading-[1.05] transition-all duration-1000 ease-in-out ${idx === heroIndex ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}`}
                    >
                      {item.text}
                    </h1>
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-white/60 mb-12 font-light leading-relaxed tracking-wide max-w-xl">
                  Degrees are poor signals. We help engineering students build cryptographically verifiable project portfolios that tech recruiters actually trust.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <button
                    onClick={() => navigate(heroContent[heroIndex].route)}
                    className="bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center space-x-3 hover:bg-[#E6C875] dark:hover:bg-[#E6C875] hover:scale-105 transition-all duration-500 ease-out shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  >
                    <span className="transition-all duration-500">{heroContent[heroIndex].buttonText}</span>
                    <ArrowRight size={20} />
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-500 ease-out"
                  >
                    Recruiter Visibility
                  </button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-bold text-gray-900 dark:text-white/80">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[#E6C875]">⭐ 4.6</span> <span>Google</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[#E6C875]">⭐ 4.89</span> <span>Course Report</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[#E6C875]">⭐ 4.97</span> <span>Switchup</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[#E6C875]">⭐ 4.7</span> <span>Career Karma</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[3rem] border border-gray-200 dark:border-white/5 flex items-center justify-center group overflow-hidden bg-gradient-to-br from-black/[0.02] dark:from-white/[0.03] to-transparent backdrop-blur-3xl shadow-2xl dark:shadow-[0_0_100px_rgba(230,200,117,0.05)]">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E6C875]/10 rounded-full blur-[80px] group-hover:bg-[#E6C875]/20 group-hover:scale-110 transition-all duration-1000"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-200/50 dark:bg-white/5 rounded-full blur-[100px] group-hover:bg-gray-300/50 dark:group-hover:bg-white/10 group-hover:scale-110 transition-all duration-1000"></div>

                <div className="relative z-10 grid grid-cols-2 gap-6 p-8 w-full max-w-[320px] sm:max-w-[450px]">
                  <div className="bg-white/50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 p-8 rounded-[2rem] backdrop-blur-xl transform translate-y-8 animate-float shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-gray-300 dark:hover:border-white/20 transition-colors duration-500">
                    <Code className="text-[#E6C875] w-10 h-10 mb-6" strokeWidth={1.5} />
                    <h4 className="text-gray-900 dark:text-white font-medium text-lg">Portfolio Engine</h4>
                    <p className="text-gray-600 dark:text-white/50 text-sm mt-3 font-light leading-relaxed">Systems built for immense, unbounded scale.</p>
                  </div>
                  <div className="bg-white/50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 p-8 rounded-[2rem] backdrop-blur-xl transform -translate-y-8 animate-float-delayed shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-gray-300 dark:hover:border-white/20 transition-colors duration-500">
                    <Zap className="text-gray-900 dark:text-white w-10 h-10 mb-6" strokeWidth={1.5} />
                    <h4 className="text-gray-900 dark:text-white font-medium text-lg">Hiring Visibility</h4>
                    <p className="text-gray-600 dark:text-white/50 text-sm mt-3 font-light leading-relaxed">Direct exposure to technical recruiters globally.</p>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-[#E6C875]/10 to-transparent border border-[#E6C875]/30 p-8 rounded-[2rem] backdrop-blur-xl animate-float shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#E6C875]/50 transition-colors duration-500">
                    <ShieldCheck className="text-[#E6C875] w-10 h-10 mb-6" strokeWidth={1.5} />
                    <h4 className="text-gray-900 dark:text-white font-medium text-lg">Cryptographic Proof</h4>
                    <p className="text-[#D4AF37] dark:text-[#E6C875]/70 text-sm mt-3 font-light leading-relaxed">Unforgeable achievements backed by Wipro DICE ID.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="py-40 relative z-10 border-t border-gray-200 dark:border-white/5 bg-gradient-to-b from-gray-50 dark:from-black to-white dark:to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-8">Designed for Employability.</h2>
              <p className="text-gray-600 dark:text-white/60 text-2xl max-w-3xl mx-auto font-light leading-relaxed">We stripped away academic theory. Our verifiable project infrastructure is engineered specifically to help you bypass technical screening rounds.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 auto-rows-[280px] sm:auto-rows-[350px]">
            <ScrollReveal delay={100}>
              <div className="h-full md:col-span-2 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] rounded-[3rem] p-8 sm:p-12 md:p-16 relative overflow-hidden group backdrop-blur-2xl transition-all duration-700 hover:shadow-xl dark:hover:bg-white/[0.04] dark:hover:border-white/10">
                <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-110 duration-1000 ease-out text-gray-900 dark:text-white">
                  <Users size={400} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E6C875]/20 to-transparent text-[#E6C875] rounded-full flex items-center justify-center backdrop-blur-xl border border-[#E6C875]/20 shadow-[0_0_30px_rgba(230,200,117,0.1)]">
                    <Users size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">Recruiter Visibility Protocol.</h3>
                    <p className="text-gray-600 dark:text-white/60 max-w-xl font-light text-xl leading-relaxed">Stop applying in the dark. Your verified portfolio is automatically routed to active engineering managers at top multinationals who are aggressively hiring.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="h-full bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] rounded-[3rem] p-12 relative overflow-hidden group backdrop-blur-2xl transition-all duration-700 hover:shadow-xl dark:hover:bg-white/[0.04] dark:hover:border-white/10">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-110 duration-1000 ease-out text-gray-900 dark:text-white">
                  <LayoutDashboard size={300} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E6C875]/20 to-transparent text-[#E6C875] rounded-full flex items-center justify-center border border-[#E6C875]/20 shadow-[0_0_30px_rgba(230,200,117,0.1)]">
                    <LayoutDashboard size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">Portfolio Engine.</h3>
                    <p className="text-gray-600 dark:text-white/60 font-light text-lg leading-relaxed">A seamless, proprietary dashboard tracking your verifiable technical progress.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="h-full bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/[0.05] rounded-[3rem] p-12 relative overflow-hidden group backdrop-blur-2xl transition-all duration-700 hover:shadow-xl dark:hover:bg-white/[0.04] dark:hover:border-white/10">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-110 duration-1000 ease-out text-gray-900 dark:text-white">
                  <Zap size={300} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E6C875]/20 to-transparent text-[#E6C875] rounded-full flex items-center justify-center border border-[#E6C875]/20 shadow-[0_0_30px_rgba(230,200,117,0.1)]">
                    <Zap size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">ATS Evasion.</h3>
                    <p className="text-gray-600 dark:text-white/60 font-light text-lg leading-relaxed">Our cryptographic skill-proofs bypass legacy Applicant Tracking Systems effortlessly.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="h-full md:col-span-2 bg-[#E6C875]/[0.05] dark:bg-[#E6C875]/[0.03] border border-[#E6C875]/30 dark:border-[#E6C875]/10 rounded-[3rem] p-8 sm:p-12 md:p-16 relative overflow-hidden group transition-all duration-700 hover:shadow-xl dark:hover:bg-[#E6C875]/[0.05] dark:hover:border-[#E6C875]/20 backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6C875]/10 dark:from-[#E6C875]/5 to-transparent"></div>
                <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-110 duration-1000 ease-out text-[#E6C875]">
                  <ShieldCheck size={400} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="w-20 h-20 bg-white dark:bg-[#E6C875]/10 text-[#E6C875] rounded-full flex items-center justify-center border border-[#E6C875]/30 dark:border-[#E6C875]/20 shadow-[0_0_40px_rgba(230,200,117,0.15)]">
                    <ShieldCheck size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-6">Cryptographic Identity.</h3>
                    <p className="text-[#B8860B] dark:text-[#E6C875]/80 max-w-xl font-light text-xl leading-relaxed">Verified via DICE ID blockchain. Universally trusted by global tech recruiters as undeniable proof of engineering competence.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="py-40 relative z-10 border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 dark:text-white mb-8">Proven Trajectories.</h2>
                <p className="text-gray-600 dark:text-white/60 text-2xl font-light leading-relaxed">Our candidates don't just find jobs; their verified portfolios allow them to dictate terms and bypass standard technical screening entirely.</p>
              </div>
              <div className="mt-12 lg:mt-0 flex space-x-6 sm:space-x-12 text-[#E6C875]">
                <div className="text-right">
                  <p className="text-4xl sm:text-6xl font-medium tracking-tighter">1.2K</p>
                  <p className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-[0.2em] mt-3 font-semibold">Verified Portfolios</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl sm:text-6xl font-medium tracking-tighter">85+</p>
                  <p className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-[0.2em] mt-3 font-semibold">Recruiting Partners</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {reviews.slice(0, showAllReviews ? 4 : 2).map((review, idx) => (
              <ReviewCard key={idx} review={review} delay={(idx % 2 + 1) * 100} />
            ))}
          </div>

          {!showAllReviews && (
            <div className="mt-16 text-center mb-24">
              <button
                onClick={() => setShowAllReviews(true)}
                className="bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-500 ease-out"
              >
                Read More Reviews
              </button>
            </div>
          )}

          {/* AI SEO Semantic Content Block */}
          <div className="mt-20 pt-20 border-t border-gray-200 dark:border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">Program Overview & Career Outcomes</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none text-gray-500 dark:text-white/40 font-light columns-1 md:columns-2 lg:columns-3 gap-12">
              <p className="mb-4">
                <strong className="text-gray-700 dark:text-white/60">Who this program is for:</strong> Ved Upskilling is designed for engineering students, recent graduates, and working professionals who want to transition into elite tech roles. It is ideal for individuals seeking to bypass traditional resume screening and prove their competence directly.
              </p>
              <p className="mb-4">
                <strong className="text-gray-700 dark:text-white/60">Career outcomes:</strong> Graduates of our technical programs secure roles as Software Engineers, Data Scientists, VLSI Engineers, and Full Stack Developers at top multinational corporations. We focus exclusively on high-paying, high-growth career trajectories.
              </p>
              <p className="mb-4">
                <strong className="text-gray-700 dark:text-white/60">Required skills & Tools covered:</strong> Programs range from beginner to advanced. Depending on your domain, you will master tools like React, Node.js, Python, TensorFlow, Django, MongoDB, Verilog, and embedded C.
              </p>
              <p className="mb-4">
                <strong className="text-gray-700 dark:text-white/60">Industry demand & Expected salary ranges:</strong> The demand for cryptographically verified engineers is at an all-time high. Our alumni typically see starting salaries significantly above the industry average, directly reflecting the enterprise-level skills they acquire.
              </p>
              <p className="mb-4">
                <strong className="text-gray-700 dark:text-white/60">Placement & Internship support:</strong> Every candidate on the Placement Track receives intensive interview preparation, resume building, and direct visibility to our 85+ recruiting partners. The Internship Track provides real-world production environment experience.
              </p>
              <p>
                <strong className="text-gray-700 dark:text-white/60">Target companies:</strong> Our recruitment network spans FAANG-tier companies, hyper-growth startups, and global enterprise leaders actively seeking verified talent.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeView;
