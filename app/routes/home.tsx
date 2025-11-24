import type { Route } from "./+types/home";
import Navbar from "~/component/Navbar";
import {resumes} from "../../constants";
import resumeCard from "~/component/ResumeCard";
import ResumeCard from "~/component/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVGenius" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (<main className="bg-[url('./images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className='main-section'>
          <div className ="Page-hadding">
              
              <h1 >Track Your Application &  Resume Rating</h1>
              <h2>Review your submissions and check AI-powered feedback.</h2>
          </div>

      </section>
      {resumes.length > 0 && (
          <div className="resume-section">
              {resumes.map(resume => (
                      <ResumeCard key={resume.id} resume={resume} />
                  )


              )}
              </div>
      )}

      </main>)
}
