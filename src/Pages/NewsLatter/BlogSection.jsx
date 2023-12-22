import BlogPost from "./BlogPost";

const BlogSection = () => {
    const blogPosts = [
      {
        id: 1,
        title: 'How Task Management Boosts Productivity',
        date: 'January 15, 2023',
        image: 'https://source.unsplash.com/800x400/?productivity',
        content: 'Discover the impact of effective task management on overall productivity and success. Learn strategies to enhance your workflow and accomplish more in less time.',
        slug: 'how-task-management-boosts-productivity',
      },
      {
        id: 2,
        title: 'The Art of Prioritizing Tasks',
        date: 'February 1, 2023',
        image: 'https://source.unsplash.com/800x400/?prioritization',
        content: 'Master the skill of prioritization and understand its crucial role in achieving your goals. Find practical tips on how to prioritize tasks effectively.',
        slug: 'the-art-of-prioritizing-tasks',
      },
      {
        id: 3,
        title: 'Effective Time Management Techniques',
        date: 'March 10, 2023',
        image: 'https://source.unsplash.com/800x400/?timemanagement',
        content: 'Explore various time management techniques to make the most out of your day. From the Pomodoro Technique to time blocking, find what works best for you.',
        slug: 'effective-time-management-techniques',
      },
      {
        id: 4,
        title: 'Balancing Work and Personal Life',
        date: 'April 5, 2023',
        image: 'https://source.unsplash.com/800x400/?worklifebalance',
        content: 'Maintain a healthy work-life balance by implementing practical strategies. Discover the importance of setting boundaries and taking time for self-care.',
        slug: 'balancing-work-and-personal-life',
      },
      {
        id: 5,
        title: 'Overcoming Procrastination',
        date: 'May 20, 2023',
        image: 'https://source.unsplash.com/800x400/?procrastination',
        content: 'Learn how to overcome procrastination and boost your productivity. Find motivation and techniques to tackle tasks head-on.',
        slug: 'overcoming-procrastination',
      },
      {
        id: 6,
        title: 'Tips for Collaborative Task Management',
        date: 'June 8, 2023',
        image: 'https://source.unsplash.com/800x400/?collaboration',
        content: 'Enhance teamwork and collaboration within your projects. Discover tools and strategies for effective collaborative task management.',
        slug: 'collaborative-task-management-tips',
      },
      {
        id: 7,
        title: 'Setting SMART Goals for Task Achievement',
        date: 'July 15, 2023',
        image: 'https://source.unsplash.com/800x400/?smartgoals',
        content: 'Implement SMART goal-setting techniques to increase task achievement. Learn how to set specific, measurable, achievable, relevant, and time-bound goals.',
        slug: 'setting-smart-goals-for-task-achievement',
      },
      {
        id: 8,
        title: 'Utilizing Technology for Task Management',
        date: 'August 3, 2023',
        image: 'https://source.unsplash.com/800x400/?technology',
        content: 'Explore the latest technological tools for efficient task management. From project management apps to collaboration platforms, find what suits your workflow.',
        slug: 'utilizing-technology-for-task-management',
      },
      {
        id: 9,
        title: 'Mindfulness in Task Execution',
        date: 'September 12, 2023',
        image: 'https://source.unsplash.com/800x400/?mindfulness',
        content: 'Incorporate mindfulness techniques into your daily tasks. Discover how staying present and focused can improve the quality of your work.',
        slug: 'mindfulness-in-task-execution',
      },
      {
        id: 10,
        title: 'Adapting to Change in Task Management',
        date: 'October 7, 2023',
        image: 'https://source.unsplash.com/800x400/?change',
        content: 'Navigate and adapt to changes in your task management approach. Learn strategies to handle unexpected challenges and uncertainties.',
        slug: 'adapting-to-change-in-task-management',
      },
    ];
  
    return (
      <section className=" py-12 max-w-7xl mx-auto">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;