
import { useState } from 'react'

function App() {
  const [activePage, setActivePage] = useState('Home')

  const menuItems = [
    'Home',
    'About Me',
    'Projects',
    'Resume / CV',
    'Contact',
  ]

  return (
   <div className="min-h-screen bg-violet-50 md:flex overflow-x-hidden">

      {/* Sidebar */}
      <aside className="bg-violet-900 text-white p-6 md:w-64 md:min-h-screen">
        <h1 className="text-2xl font-bold mb-2">
          MyPortfolio
        </h1>

        <p className="text-violet-200 text-sm mb-8">
          Student Dashboard
        </p>

        <nav className="flex flex-wrap gap-2 md:flex-col">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`text-left p-3 rounded-lg transition ${
                activePage === item
                  ? 'bg-white text-violet-900 font-bold'
                  : 'hover:bg-violet-800'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-10">

        <header className="bg-white p-5 rounded-2xl shadow-sm mb-8">
          <p className="text-violet-600 text-sm font-semibold">
            STUDENT E-PORTFOLIO
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            {activePage === 'Home'
              ? 'Welcome, Aaron Clint!'
              : activePage}
          </h2>

          <p className="text-gray-500 mt-2">
            Bachelor of Science in Information Technology
          </p>
        </header>

        {activePage === 'Home' && (
          <section>
            <div className="bg-gradient-to-r from-violet-700 to-blue-600 text-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-3">
                Welcome to My Portfolio!
              </h3>

              <p className="leading-relaxed">
                Hello! I am Aaron Clint Benemerito, a BS Information
                Technology student. This website presents my background,
                technical skills, academic projects, and learning journey.
              </p>

              <button
                onClick={() => setActivePage('About Me')}
                className="mt-5 bg-white text-violet-800 px-5 py-3 rounded-lg font-semibold hover:bg-violet-100 transition"
              >
                About Me →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-gray-500">Education</p>
                <h3 className="text-xl font-bold text-violet-700 mt-2">
                  BSIT
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Cavite State University
                </p>
              </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {/* Keep your existing three dashboard cards here */}
</div>

{/* CvSU Vision and Mission */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-violet-600">
    <h3 className="text-xl font-bold text-violet-800 mb-4">
      CvSU Vision
    </h3>
    <p className="text-gray-600 leading-relaxed">
      The premier university in historic Cavite globally recognized
      for excellence in character development, academics, research,
      innovation and sustainable community engagement.
    </p>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-600">
    <h3 className="text-xl font-bold text-blue-800 mb-4">
      CvSU Mission
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Cavite State University shall provide excellent, equitable,
      and relevant educational opportunities in the arts, sciences,
      and technology through quality instruction and responsive
      research and development activities. It shall produce
      professional, skilled, and morally upright individuals for
      global competitiveness.
    </p>
  </div>
</div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-gray-500">Main Interest</p>
                <h3 className="text-xl font-bold text-violet-700 mt-2">
                  Programming
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Web and application development
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-gray-500">Portfolio Sections</p>
                <h3 className="text-xl font-bold text-violet-700 mt-2">
                  5 Sections
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Explore the menu to learn more
                </p>
              </div>
            </div>
          </section>
        )}

        {activePage === 'About Me' && (
          <section className="bg-white p-7 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-violet-800 mb-4">
              About Me
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I am Aaron Clint Benemerito, a Bachelor of Science in
              Information Technology student at Cavite State University,
              Tanza Campus. I am interested in programming, technology,
              and creating applications that can help solve problems.
            </p>

            <h4 className="font-bold mt-6 mb-3">Skills and Interests</h4>

            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Problem Solving']
                .map((skill) => (
                  <span
                    key={skill}
                    className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </section>
        )}

        {activePage === 'Projects' && (
          <ProjectsSection />
        )}

        {activePage === 'Resume / CV' && (
          <section className="bg-white p-7 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-violet-800 mb-5">
              Resume / CV
            </h3>

            <h4 className="font-bold">Education</h4>
            <p className="text-gray-600 mt-2">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-gray-600">
              Cavite State University – Tanza Campus
            </p>

            <h4 className="font-bold mt-6">Technical Skills</h4>
            <p className="text-gray-600 mt-2">
              HTML, CSS, JavaScript, ReactJS, and database fundamentals
            </p>

          
<a
  href="/cv.txt"
  download="Aaron_Clint_Benemerito_CV.txt"
  className="inline-block mt-6 bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-800 transition"
>
  Download My CV
</a>
          </section>
        )}

        {activePage === 'Contact' && (
          <ContactSection />
        )}

        <footer className="text-center text-gray-500 text-sm mt-10">
          © 2026 Aaron Clint Benemerito | Student E-Portfolio
        </footer>
      </main>
    </div>
  )
}

function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      title: 'React Calculator',
      description:
        'A calculator project that demonstrates React components, state management, and event handling.',
      details:
        'The project uses interactive buttons and dynamically updates the displayed calculation.',
    },
    {
      title: 'Pet Street System Prototype',
      description:
        'A proposed veterinary clinic monitoring system for organizing sales information.',
      details:
        'The concept focuses on sales monitoring, reports, customer feedback, and supporting clinic decisions.',
    },
  ]

  return (
    <section>
      <h3 className="text-xl font-bold text-violet-800 mb-5">
        Projects / Work Samples
      </h3>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <div className="bg-violet-100 rounded-xl p-5 mb-4 text-violet-800">
              <span className="text-sm font-semibold">
                ACADEMIC PROJECT
              </span>
              <h4 className="text-xl font-bold mt-2">
                {project.title}
              </h4>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {expandedProject === project.title && (
              <p className="text-gray-600 mt-3 leading-relaxed">
                {project.details}
              </p>
            )}

            <button
              onClick={() =>
                setExpandedProject(
                  expandedProject === project.title
                    ? null
                    : project.title
                )
              }
              className="mt-5 text-violet-700 font-semibold hover:underline"
            >
              {expandedProject === project.title
                ? 'View Less ↑'
                : 'View More →'}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback('Please complete all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFeedback('Please enter a valid email address.')
      return
    }

    setFeedback('Form validated successfully! This demo does not send emails.')
  }

  return (
    <section className="bg-white p-7 rounded-2xl shadow-sm max-w-2xl">
      <h3 className="text-xl font-bold text-violet-800 mb-3">
        Contact Me
      </h3>

      <p className="text-gray-600 mb-6">
        Fill out the form to test the contact form validation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            value={form.message}
            onChange={(event) =>
              setForm({ ...form, message: event.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Write your message"
          />
        </div>

        <button
          type="submit"
          className="bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition"
        >
          Validate Form
        </button>

        {feedback && (
          <p role="status" className="text-sm text-violet-700">
            {feedback}
          </p>
        )}
      </form>
    </section>
  )
}

export default App