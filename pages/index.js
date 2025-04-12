import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Cevher Dogan | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Cevher Dogan, Cloud Platform Engineer and Automation Strategist."
        />
        <meta property="og:title" content="Cevher Dogan | Portfolio" />
        <meta
          property="og:description"
          content="Automation, cloud infrastructure, and DevSecOps expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cevherdogan-com.vercel.app" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <section className="flex flex-col items-center justify-center text-center px-6 py-24">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQFuQDL79zIj-Q/profile-displayphoto-shrink_400_400/0/1516174295676?e=1718236800&v=beta&t=4ckbS-TmfGqzRxFq8IpYxQz0XYPVxSbe1GZ19GzT9tE"
            alt="Cevher Dogan"
            className="rounded-full w-36 h-36 mb-6 shadow-lg border-2 border-gray-300 dark:border-gray-700"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Cevher Dogan
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Cloud Platform Engineer | Builder | Investor
          </p>
          <p className="max-w-2xl mb-6">
            With deep roots in automation, infrastructure, and cloud computing,
            I’m building resilient platforms and next-gen solutions across
            sectors. Passionate about tech, nature, and future-forward thinking.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="mailto:cevherd@gmail.com">
              <Button>Email Me</Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Download Resume</Button>
            </a>
            <a
              href="https://www.linkedin.com/in/cevherdogan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">LinkedIn</Button>
            </a>
            <a
              href="https://github.com/cevherdogan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">GitHub</Button>
            </a>
            <a
              href="https://calendly.com/cevherdogan/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Book a Chat</Button>
            </a>
            <a
              href="https://medium.com/@cevherd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Medium</Button>
            </a>
            <a
              href="https://cevherdogan-com.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Portfolio</Button>
            </a>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            I’m an experienced Cloud Platform Engineer based in Pennsylvania.
            I've built scalable platforms and optimized DevOps at organizations
            like Comcast, Boeing, CME Group, and more. Whether it's full-stack
            architecture or AI-backed automation, my goal is to make tech serve
            people better.
          </p>
          <p>
            I'm currently exploring ideas that span GPT tools, startup
            workflows, privacy innovation, and remote-friendly development
            systems. I love solving problems and helping teams achieve better
            outcomes with less effort.
          </p>
          <p className="mt-4">
            <strong>Specialties include:</strong> Website modernization, system
            migration, ETL pipelines, service and stack migration, multi-cloud
            and hybrid-cloud deployments, Infrastructure as Code (IaC)
            automation, DevSecOps, Stripe, Shopify, Vercel, and Asana
            automation. Deep experience with RDBMS, NoSQL, EMR, Kafka, MongoDB,
            Redis, ElasticCache, ELK Stack, CIG Stack, Grafana, Prometheus,
            Kubernetes, InfluxDB, OWASP, OPA, vulnerability scanning,
            performance engineering, capacity planning, and real-time website
            analysis.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <ul className="space-y-4">
            <li>
              <strong>ClaimGuard</strong> – An automation suite for ethical use
              cases in state benefit systems.{" "}
              <a
                href="https://github.com/cevherdogan/claimguard"
                className="underline"
                target="_blank"
              >
                View Repo
              </a>
            </li>
            <li>
              <strong>Health Tourism AI</strong> – Simplifies the patient
              journey with AI-led approval workflows.{" "}
              <a
                href="https://github.com/cevherdogan/health-tourism-ai"
                className="underline"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <form
            action="https://formspree.io/f/xnqkzaye"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              <strong>Email Signature:</strong>
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-xs">
              Cevher Dogan Cloud Platform Engineer | Automation Strategist 📧
              cevherd@gmail.com 🌐 Portfolio | LinkedIn | GitHub | Calendly
            </pre>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-12">
          © {new Date().getFullYear()} Cevher Dogan. All rights reserved.
        </footer>
      </main>
    </>
  );
}
