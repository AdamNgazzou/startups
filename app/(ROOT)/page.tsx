import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views:55,
    author: {id:1,name:'John Smith'},
    _id:1,
    description:'This is a description.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcM_NnUtKjax_pOsKlthZGaj66_dsZ3Da5g&s',
    category:'Robots',
    title:"we Robots",
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br />Connect With 
        Entrepreneurs </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for: ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length >0 ? (
            posts.map((post: StartupCardType,index:number)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ): (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
