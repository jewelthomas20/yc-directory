import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query || '';

const posts = [
  {
    _createdAt: new Date(),
    views: 123,
    author: { _id: 1, name: "John Doe" },
    _id: 1,
    description: "This is a description",
    title: "We Robots",
    category: "Robots",
    image: "https://images.unsplash.com/photo-1581092580491-6c2a9f54f2c8?w=400&h=400&fit=crop",
  },
  {
    _createdAt: "today",
    views: 98,
    author: { _id: 2, name: "Jane Smith" },
    _id: 2,
    description: "Innovative AI-powered platform for education.",
    title: "EduAI",
    category: "Education",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
  },
  {
    _createdAt: "last week",
    views: 210,
    author: { _id: 3, name: "Alice Johnson" },
    _id: 3,
    description: "Marketplace for eco-friendly products.",
    title: "GreenMart",
    category: "Marketplace",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&h=400&fit=crop",
  },
  {
    _createdAt: "2 days ago",
    views: 75,
    author: { _id: 4, name: "Bob Brown" },
    _id: 4,
    description: "Social network for pet lovers.",
    title: "PetConnect",
    category: "Social",
    image: "https://images.unsplash.com/photo-1601979031441-0098a59766a1?w=400&h=400&fit=crop",
  },
  {
    _createdAt: "this month",
    views: 180,
    author: { _id: 5, name: "Charlie Davis" },
    _id: 5,
    description: "Remote job board for tech professionals.",
    title: "RemoteTech",
    category: "Jobs",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
  },
  {
    _createdAt: "3 days ago",
    views: 60,
    author: { _id: 6, name: "Diana Evans" },
    _id: 6,
    description: "Fitness app with personalized workout plans.",
    title: "FitBuddy",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613578-2b193e7d88f4?w=400&h=400&fit=crop",
  },
];

  return (
   <>
   <section className="pink_container pattern">
   <h1 className="heading">
    Pitch Your Startup, <br/>
    Connect with Entrepreneurs <br/>
   </h1>

   <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
   <SearchForm query={query}/>
   </section>

   <section className="section_container">
    <p className="text-30-semibold">
      {
        query ? `Showing results for "${query}"` : 'All Startups'
      }
    </p>
    <ul className="mt-7 card_grid">
      {
        posts?.length > 0 ? posts.map((post:StartupCardType) => (
          <StartupCard key={post?._id} post={post} />
        )) :<p className="no-results">No Startups found</p>
      }
    </ul>
   </section>
   </>
  );
}
