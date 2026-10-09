
import { useState } from 'react'

const menuItems = [
  'Home',
  'About Me',
  'Projects',
  'Resume / CV',
  'Contact',
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Problem Solving',
  'Database Fundamentals',
]

function App() {
  const [activePage, setActivePage] = useState('Home')

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3EDE3] text-[#49382D] md:flex">
      {/* Sidebar */}
      <aside className="relative bg-[#E4D5C3] p-6 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:p-7">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#765744] text-xl font-bold text-white">
            A
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Aaron's Portfolio
            </h1>
            <p className="text-xs text-[#766657]">
              Student · BSIT
            </p>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#766657]">
            Main Menu
          </p>
        </div>

        <nav className="flex flex-wrap gap-2 md:flex-col">
          {menuItems.map((item, index) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              aria-current={activePage === item ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition duration-200 ${
                activePage === item
                  ? 'bg-[#765744] font-semibold text-white shadow-sm'
                  : 'text-[#49382D] hover:bg-[#F3EDE3]'
              }`}
            >
              <span className="w-5 text-center text-xs">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-[#C9B7A4] p-4 md:absolute md:bottom-7 md:left-7 md:right-7">
          <p className="text-sm font-semibold">Learning every day.</p>
          <p className="mt-1 text-xs leading-5 text-[#766657]">
            Building skills, exploring ideas, and growing through technology.
          </p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#D3C1AD]">
            <div className="h-full w-3/4 rounded-full bg-[#A8B4A0]" />
          </div>
          <p className="mt-2 text-xs text-[#766657]">
            My learning journey
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-12">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#765744]">
              Student E-Portfolio
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              {activePage === 'Home' ? 'Welcome, Aaron Clint!' : activePage}
            </h2>
            <p className="mt-2 text-sm text-[#766657]">
              Bachelor of Science in Information Technology
            </p>
          </div>
          <div className="rounded-full border border-[#D3C1AD] bg-[#FAF7F1] px-4 py-2 text-xs font-medium text-[#765744]">
            Cavite State University · Tanza
          </div>
        </header>

        {activePage === 'Home' && (
          <HomeSection setActivePage={setActivePage} />
        )}

        {activePage === 'About Me' && <AboutSection />}

        {activePage === 'Projects' && <ProjectsSection />}

        {activePage === 'Resume / CV' && <ResumeSection />}

        {activePage === 'Contact' && <ContactSection />}

        <footer className="mt-12 border-t border-[#D3C1AD] pt-6 text-center text-xs text-[#766657]">
          © 2026 Aaron Clint Benemerito · Designed with purpose.
        </footer>
      </main>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#765744]">
      {children}
    </p>
  )
}

function HomeSection({ setActivePage }) {
  return (
    <section>
      {/* Hero */}
      <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-[#765744] p-7 text-[#FAF7F1] shadow-sm sm:p-10 lg:p-12">
        <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border-[28px] border-[#A8B4A0]/30" />
        <div className="absolute -bottom-20 right-28 h-40 w-40 rounded-full bg-[#A8B4A0]/20" />

        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E4D5C3]">
            Hello, welcome to my space
          </p>
          <h3 className="text-3xl font-bold leading-tight sm:text-5xl">
            Learning today,
            <br />
            creating for tomorrow.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#F3EDE3]/90 sm:text-base">
            I am Aaron Clint Benemerito, a BS Information Technology student
            who enjoys exploring programming, learning new technologies, and
            developing ideas into useful applications.
          </p>
          <button
            onClick={() => setActivePage('About Me')}
            className="mt-7 rounded-xl bg-[#F3EDE3] px-5 py-3 text-sm font-semibold text-[#765744] transition hover:bg-white"
          >
            Get to know me <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Overview cards */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <OverviewCard
          number="01"
          title="Education"
          description="BS Information Technology"
          detail="Cavite State University · Tanza Campus"
          accent="sage"
        />
        <OverviewCard
          number="02"
          title="Main Interest"
          description="Programming"
          detail="Web and application development"
          accent="beige"
        />
        <OverviewCard
          number="03"
          title="What I Value"
          description="Growth and responsibility"
          detail="Learning through practice and experience"
          accent="cream"
        />
      </div>

      {/* Intro and highlights */}
      <div className="mb-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-[#E4D5C3] bg-[#FAF7F1] p-6 sm:p-8">
          <SectionLabel>A little about me</SectionLabel>
          <h3 className="text-2xl font-bold">Curious mind, practical goals.</h3>
          <p className="mt-4 text-sm leading-7 text-[#766657]">
            My journey in IT is about improving my skills, understanding how
            technology works, and applying what I learn to academic projects.
            This portfolio brings together my background, interests, and work
            as a student.
          </p>
          <button
            onClick={() => setActivePage('Projects')}
            className="mt-5 text-sm font-bold text-[#765744] hover:underline"
          >
            Explore my projects →
          </button>
        </div>

        <div className="rounded-3xl bg-[#A8B4A0] p-6 sm:p-8">
          <SectionLabel>My direction</SectionLabel>
          <h3 className="text-2xl font-bold">Small steps matter.</h3>
          <p className="mt-4 text-sm leading-7 text-[#344332]">
            I aim to finish my studies, gain practical experience, and keep
            developing the knowledge needed to build meaningful solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Learn', 'Build', 'Improve'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#66745F]/40 px-3 py-1.5 text-xs font-semibold text-[#344332]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CvSU Vision and Mission */}
      <SectionLabel>My university</SectionLabel>
      <h3 className="mb-5 text-2xl font-bold">CvSU Vision & Mission</h3>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-[#D3C1AD] bg-[#E4D5C3] p-6 sm:p-8">
          <span className="mb-5 inline-flex rounded-full bg-[#765744] px-3 py-1.5 text-xs font-semibold text-white">
            THE VISION
          </span>
          <h4 className="text-xl font-bold">CvSU Vision</h4>
          <p className="mt-4 text-sm leading-7 text-[#49382D]">
            The premier university in historic Cavite globally recognized
            for excellence in character development, academics, research,
            innovation and sustainable community engagement.
          </p>
        </article>

        <article className="rounded-3xl border border-[#C4CCBE] bg-[#E7EBE3] p-6 sm:p-8">
          <span className="mb-5 inline-flex rounded-full bg-[#A8B4A0] px-3 py-1.5 text-xs font-semibold text-[#344332]">
            THE MISSION
          </span>
          <h4 className="text-xl font-bold">CvSU Mission</h4>
          <p className="mt-4 text-sm leading-7 text-[#49382D]">
            Cavite State University shall provide excellent, equitable,
            and relevant educational opportunities in the arts, sciences,
            and technology through quality instruction and responsive
            research and development activities. It shall produce
            professional, skilled, and morally upright individuals for
            global competitiveness.
          </p>
        </article>
      </div>
    </section>
  )
}

function OverviewCard({ number, title, description, detail, accent }) {
  const colors = {
    sage: 'bg-[#E7EBE3]',
    beige: 'bg-[#E4D5C3]',
    cream: 'bg-[#FAF7F1]',
  }

  return (
    <article
      className={`rounded-3xl border border-[#E4D5C3] p-6 ${colors[accent]}`}
    >
      <p className="text-xs font-bold tracking-[0.15em] text-[#765744]">
        {number}
      </p>
      <p className="mt-5 text-sm text-[#766657]">{title}</p>
      <h3 className="mt-1 text-xl font-bold">{description}</h3>
      <p className="mt-2 text-xs leading-5 text-[#766657]">{detail}</p>
    </article>
  )
}

function AboutSection() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-[#E4D5C3] bg-[#FAF7F1] p-7 sm:p-9">
        <SectionLabel>Get to know me</SectionLabel>
        <h3 className="text-2xl font-bold">About Me</h3>
        <p className="mt-5 text-sm leading-8 text-[#766657]">
          I am Aaron Clint Benemerito, a Bachelor of Science in Information
          Technology student at Cavite State University, Tanza Campus. I am
          interested in programming, technology, and creating applications
          that can help solve problems.
        </p>
        <p className="mt-4 text-sm leading-8 text-[#766657]">
          As I continue my studies, I want to strengthen my technical
          knowledge, improve my problem-solving skills, and gain more
          experience through projects and hands-on learning.
        </p>
      </div>

      <div className="rounded-3xl bg-[#E4D5C3] p-7 sm:p-9">
        <SectionLabel>What I am learning</SectionLabel>
        <h3 className="text-2xl font-bold">Skills & Interests</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#C9B7A4] bg-[#F3EDE3] px-4 py-2 text-sm font-medium text-[#765744]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[#A8B4A0] p-5">
          <p className="font-bold">My goal</p>
          <p className="mt-2 text-sm leading-6 text-[#344332]">
            To keep learning, complete my degree, and use my skills to create
            useful and meaningful technology solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      number: '01',
      title: 'React Calculator',
      category: 'WEB DEVELOPMENT',
      description:
        'A calculator project that demonstrates React components, state management, and event handling.',
      details:
        'The project uses interactive buttons and dynamically updates the displayed calculation. It also applies responsive styling for a clear and usable interface.',
      tags: ['ReactJS', 'Tailwind CSS', 'State'],
    },
    {
      number: '02',
      title: 'Pet Street System Prototype',
      category: 'SYSTEM PROPOSAL',
      description:
        'A proposed veterinary clinic monitoring system for organizing sales information.',
      details:
        'The concept focuses on sales monitoring, reports, customer feedback, and supporting clinic decisions. Its purpose is to help organize information and identify possible ways to improve business performance.',
      tags: ['UI/UX', 'Monitoring', 'Reports'],
    },
  ]

  return (
    <section>
      <SectionLabel>Selected work</SectionLabel>
      <h3 className="mb-2 text-2xl font-bold">Projects & Work Samples</h3>
      <p className="mb-7 max-w-2xl text-sm leading-7 text-[#766657]">
        A collection of academic work and ideas that reflect my learning
        experience in information technology.
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => {
          const expanded = expandedProject === project.title

          return (
            <article
              key={project.title}
              className="rounded-3xl border border-[#E4D5C3] bg-[#FAF7F1] p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <span className="rounded-full bg-[#E7EBE3] px-3 py-1.5 text-xs font-bold tracking-wide text-[#4B5B45]">
                  {project.category}
                </span>
                <span className="text-sm font-bold text-[#A8B4A0]">
                  {project.number}
                </span>
              </div>

              <h4 className="text-xl font-bold">{project.title}</h4>
              <p className="mt-3 text-sm leading-7 text-[#766657]">
                {project.description}
              </p>

              {expanded && (
                <div className="mt-4 rounded-2xl bg-[#E4D5C3]/60 p-4">
                  <p className="text-sm leading-7 text-[#49382D]">
                    {project.details}
                  </p>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D3C1AD] px-3 py-1 text-xs text-[#765744]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  setExpandedProject(expanded ? null : project.title)
                }
                aria-expanded={expanded}
                className="mt-6 text-sm font-bold text-[#765744] hover:underline"
              >
                {expanded ? 'Show less ↑' : 'View project details →'}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ResumeSection() {
  return (
    <section className="max-w-3xl rounded-3xl border border-[#E4D5C3] bg-[#FAF7F1] p-7 sm:p-10">
      <SectionLabel>Background & qualifications</SectionLabel>
      <h3 className="text-2xl font-bold">Resume / CV</h3>
      <p className="mt-3 text-sm leading-7 text-[#766657]">
        A summary of my educational background and technical skills as an
        Information Technology student.
      </p>

      <div className="mt-8 border-l-2 border-[#A8B4A0] pl-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#765744]">
          Education
        </p>
        <h4 className="mt-2 text-lg font-bold">
          Bachelor of Science in Information Technology
        </h4>
        <p className="mt-1 text-sm text-[#766657]">
          Cavite State University – Tanza Campus
        </p>
      </div>

      <div className="mt-8 border-l-2 border-[#A8B4A0] pl-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#765744]">
          Technical Skills
        </p>
        <p className="mt-2 text-sm leading-7 text-[#766657]">
          HTML, CSS, JavaScript, ReactJS, Tailwind CSS, and database
          fundamentals.
        </p>
      </div>

      <div className="mt-8 rounded-2xl bg-[#E7EBE3] p-5">
        <p className="text-sm leading-6 text-[#344332]">
          My goal is to continue developing my technical skills through
          academic projects, practice, and hands-on experience.
        </p>
      </div>

      <a
        href="/cv.txt"
        download="Aaron_Clint_Benemerito_CV.txt"
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#765744] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5E4333]"
      >
        Download My CV <span aria-hidden="true">↓</span>
      </a>
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
  const [isSuccess, setIsSuccess] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSuccess(false)

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback('Please complete all fields.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setFeedback('Please enter a valid email address.')
      return
    }

    setIsSuccess(true)
    setFeedback(
      'Form validated successfully! This demo does not send emails.'
    )
  }

  const inputStyle =
    'w-full rounded-xl border border-[#D3C1AD] bg-[#FAF7F1] px-4 py-3 text-sm text-[#49382D] outline-none transition placeholder:text-[#A09284] focus:border-[#765744] focus:ring-2 focus:ring-[#A8B4A0]/50'

  return (
    <section className="grid max-w-5xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="rounded-3xl bg-[#765744] p-7 text-[#FAF7F1] sm:p-9">
        <SectionLabel>Let's connect</SectionLabel>
        <h3 className="text-3xl font-bold">Have a message?</h3>
        <p className="mt-4 text-sm leading-7 text-[#F3EDE3]/90">
          Use the contact form to try the form validation feature. All fields
          are required for this demonstration.
        </p>
        <div className="mt-8 rounded-2xl border border-white/20 p-4">
          <p className="text-xs uppercase tracking-wider text-[#E4D5C3]">
            Student
          </p>
          <p className="mt-2 font-semibold">Aaron Clint Benemerito</p>
          <p className="mt-1 text-sm text-[#F3EDE3]/80">
            BS Information Technology
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-[#E4D5C3] bg-[#FAF7F1] p-7 sm:p-9">
        <h4 className="text-xl font-bold">Contact Form</h4>
        <p className="mt-2 text-sm text-[#766657]">
          Complete the fields below to test the form.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(event) => {
                setForm({ ...form, name: event.target.value })
                setFeedback('')
              }}
              className={inputStyle}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => {
                setForm({ ...form, email: event.target.value })
                setFeedback('')
              }}
              className={inputStyle}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={(event) => {
                setForm({ ...form, message: event.target.value })
                setFeedback('')
              }}
              className={inputStyle}
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#765744] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5E4333] sm:w-auto"
          >
            Validate Form →
          </button>

          {feedback && (
            <p
              role="status"
              className={`rounded-xl p-3 text-sm leading-6 ${
                isSuccess
                  ? 'bg-[#E7EBE3] text-[#344332]'
                  : 'bg-[#F3E1D8] text-[#7A382B]'
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default App