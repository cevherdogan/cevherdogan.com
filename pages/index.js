import React from "react";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFuQDL79zIj-Q/profile-displayphoto-shrink_400_400/0/1516174295676?e=1718236800&v=beta&t=4ckbS-TmfGqzRxFq8IpYxQz0XYPVxSbe1GZ19GzT9tE"
          alt="Cevher Dogan"
          className="rounded-full w-36 h-36 mb-6 shadow-lg border-2 border-gray-300 dark:border-gray-700"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Cevher Dogan</h1>
        <p className="text-xl md:text-2xl mb-6">Cloud Platform Engineer | Builder | Investor</p>
        <p className="max-w-2xl mb-6">
          With deep roots in automation, infrastructure, and cloud computing, I’m building resilient platforms and next-gen solutions across sectors. Passionate about tech, nature, and future-forward thinking.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="mailto:cevherd@gmail.com">
            <Button>Email Me</Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Download Resume</Button>
          </a>
          <a href="https://www.linkedin.com/in/cevherdogan/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">LinkedIn</Button>
          </a>
          <a href="https://github.com/cevherdogan" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
          <a href="https://calendly.com/cevherdogan/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Book a Chat</Button>
          </a>
          <a href="https://medium.com/@cevherd" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Medium</Button>
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-4">
          I’m an experienced Cloud Platform Engineer based in Pennsylvania. I've built scalable platforms and optimized DevOps at organizations like Comcast, Boeing, CME Group, and more. Whether it's full-stack architecture or AI-backed automation, my goal is to make tech serve people better.
        </p>
        <p>
          I'm currently exploring ideas that span GPT tools, startup workflows, privacy innovation, and remote-friendly development systems. I love solving problems and helping teams achieve better outcomes with less effort.
        </p>
        <p className="mt-4">
          <strong>Specialties include:</strong> Website modernization, system migration, ETL pipelines, service and stack migration, multi-cloud and hybrid-cloud deployments, Infrastructure as Code (IaC) automation, DevSecOps, Stripe, Shopify, Vercel, and Asana automation. Deep experience with RDBMS, NoSQL, EMR, Kafka, MongoDB, Redis, ElasticCache, ELK Stack, CIG Stack, Grafana, Prometheus, Kubernetes, InfluxDB, OWASP, OPA, vulnerability scanning, performance engineering, capacity planning, and real-time website analysis.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>ClaimGuard</strong> – An automation suite for ethical use cases in state benefit systems.
          </li>
          <li>
            <strong>Health Tourism AI</strong> – Simplifies the patient journey with AI-led approval workflows.
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 py-12">
        © {new Date().getFullYear()} Cevher Dogan. All rights reserved.
      </footer>
    </main>
  );
}

