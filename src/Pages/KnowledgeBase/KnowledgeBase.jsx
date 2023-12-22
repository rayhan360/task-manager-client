

const KnowledgeBase = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Knowledge Base</h2>
          <p className="text-gray-700 mb-6">
            Welcome to our Knowledge Base. Here, you can find helpful resources to guide you through using our task management platform efficiently.
          </p>
          {/* Add specific sections for documentation, tutorials, FAQs, etc. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-700">
                Explore our comprehensive documentation for in-depth information on features, settings, and best practices.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tutorials</h3>
              <p className="text-gray-700">
                Step-by-step tutorials to help you get started, manage tasks, and make the most of our task management system.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">FAQs</h3>
              <p className="text-gray-700">
                Find answers to commonly asked questions about account management, troubleshooting, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
