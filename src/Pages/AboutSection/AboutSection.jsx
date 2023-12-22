

const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#333]">Discover the Power of Our Task Management System</h2>
          <p className="text-gray-600 mb-8">
            Welcome to our task management platform crafted to simplify your work and supercharge productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#4daeef]">Effortless Task Organization</h3>
              <p className="text-gray-700">
                Create, organize, and manage tasks effortlessly. Our platform ensures you stay on top of your to-do list.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#4daeef]">Collaboration Made Easy</h3>
              <p className="text-gray-700">
                Foster collaboration within your team. Stay connected, share ideas, and achieve project milestones together.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#4daeef]">Smart Deadline Management</h3>
              <p className="text-gray-700">
                Set deadlines, receive timely reminders, and never miss an important task. Stay organized and meet your goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#4daeef]">Tailored for Every Professional</h3>
              <p className="text-gray-700">
                Whether you&apos;re a developer, project manager, business professional, or entrepreneur, our system is designed to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;