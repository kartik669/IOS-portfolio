import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { Download } from 'lucide-react'

const Resume = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div id='window-header' className="shrink-0">
        <WindowControls target='resume' />
        <h2>Kartik_Sakharkar_Resume.pdf</h2>

        <button
          className='cursor-pointer'
          title='Download Feature Coming Soon'
          onClick={() => alert("Download feature is coming soon!")}
        >
          <Download className='icon' />
        </button>
      </div>

      <div className="bg-gray-100 flex-1 overflow-y-auto p-2 sm:p-4 flex justify-center text-black min-h-0">
        <div className="bg-white shadow-lg w-full max-w-[700px] p-6 sm:p-8 text-xs sm:text-sm leading-snug h-fit">
          
          {/* Header */}
          <header className="text-center border-b border-gray-300 pb-4 mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Kartik Sakharkar</h1>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-600 text-[10px] sm:text-xs">
              <span>📞 9209087505</span>
              <span>|</span>
              <span>✉️ kartiksakharkar037@gmail.com</span>
              <span>|</span>
              <a href="https://github.com/kartik669" target="_blank" rel="noreferrer" className="hover:text-blue-600">github.com/kartik669</a>
              <span>|</span>
              <a href="https://linkedin.com/in/kartiksakharkar" target="_blank" rel="noreferrer" className="hover:text-blue-600">linkedin.com/in/kartiksakharkar</a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1 border-b border-gray-200 pb-1">Professional Summary</h2>
            <p className="text-gray-700 text-justify">
              Detail-oriented Full-Stack Developer and final-year Computer Science Engineering student with a strong foundation in Full Stack Development, React.js, Next.js, Tailwind CSS, Node.js, and Cybersecurity. Experienced in building scalable web applications, integrating AI-powered features, and automating workflows. Skilled in problem-solving, cross-functional collaboration, and developing production-ready software with a focus on performance, scalability, and user experience.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1 border-b border-gray-200 pb-1">Technical Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Frontend:</strong> HTML, CSS, React.js, Next.js, Tailwind CSS, UI/UX Design</li>
              <li><strong>AI & Data:</strong> AI Integrations, Prompt Engineering, Image Processing, OpenCV</li>
              <li><strong>Tools:</strong> Git, GitHub, VS Code, Figma, Google Antigravity</li>
            </ul>
          </section>

          {/* Experience */}
          <section className="mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1 border-b border-gray-200 pb-1">Experience</h2>
            <div className="mb-2">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Cluematrix Technologies Pvt. Ltd.</span>
                <span className="text-gray-500 font-normal">July 2024</span>
              </div>
              <div className="italic text-gray-600 mb-1">UI/UX Design Intern</div>
              <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1">
                <li>Designed user-friendly web interfaces and wireframes using Figma based on project requirements.</li>
                <li>Created interactive prototypes to visualize user flows and improve the overall user experience.</li>
              </ul>
            </div>
          </section>

          {/* Training */}
          <section className="mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1 border-b border-gray-200 pb-1">Training</h2>
            <div className="mb-2">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Sheryians Coding School</span>
                <span className="text-gray-500 font-normal">2026 – Present</span>
              </div>
              <div className="italic text-gray-600 mb-1 flex justify-between">
                <span>Job Ready AI Powered Cohort 3.0 – Full Stack Development</span>
                <span>Online</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1">
                <li>Currently learning Full Stack Web Development through a project-based curriculum covering React.js, Next.js, Node.js, Express.js, and MongoDB.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1 border-b border-gray-200 pb-1">Projects</h2>
            
            <div className="mb-2">
              <div className="font-bold text-gray-800">The Mango Tree Cafe – Contactless Smart Ordering System</div>
              <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1 mt-1">
                <li>Developing a full-stack QR-based Smart Ordering System that enables customers to scan a QR code, browse the digital menu, and place orders directly from their table.</li>
              </ul>
            </div>

            <div className="mb-2">
              <div className="font-bold text-gray-800">GenZ AI – AI-Powered Web App Generator & Code Fixer</div>
              <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1 mt-1">
                <li>Developed a full-stack AI application that generates responsive HTML, CSS, and JavaScript web applications from natural language prompts using the Google Gemini API.</li>
                <li>Built an intelligent code-fixing system with automatic programming language detection, AI-powered debugging, and a robust fallback mechanism.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-sm sm:text-base font-bold text-gray-800 uppercase mb-1 border-b border-gray-200 pb-1">Education</h2>
            <div>
              <div className="flex justify-between font-bold text-gray-800">
                <span>Rajiv Gandhi College of Engineering, Research and Technology</span>
                <span className="text-gray-500 font-normal">2023 – 2027</span>
              </div>
              <div className="italic text-gray-600 flex justify-between">
                <span>B.Tech in Computer Science and Engineering</span>
                <span>CGPA: 6.03/10</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow
