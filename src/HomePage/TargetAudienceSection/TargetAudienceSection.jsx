

const TargetAudienceSection = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Who Benefits from Our Task Management System?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Card for Developers */}
          <div className="p-6 bg-blue-500 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-200">
              Streamline your project management, collaborate effectively, and meet deadlines with ease.
            </p>
          </div>

          {/* Card for Project Managers */}
          <div className="p-6 bg-green-500 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">Project Managers</h3>
            <p className="text-gray-200">
              Simplify task delegation, track progress, and ensure project milestones are achieved on time.
            </p>
          </div>

          {/* Card for Business Professionals */}
          <div className="p-6 bg-indigo-500 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">Business Professionals</h3>
            <p className="text-gray-200">
              Stay organized, prioritize tasks, and increase overall efficiency in your daily operations.
            </p>
          </div>

          {/* Card for Entrepreneurs */}
          <div className="p-6 bg-yellow-500 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-4">Entrepreneurs</h3>
            <p className="text-gray-200">
              Manage your business tasks effectively, optimize workflows, and focus on strategic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
