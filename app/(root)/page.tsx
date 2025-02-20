import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import { Suspense } from "react";
import './page.css';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = "", page = "1" } = await searchParams;
  const pageNumber = parseInt(page, 10) || 1;
  const limit = 3; // Items per page
  const start = (pageNumber - 1) * limit;
  const end = start + limit + 1; // Fetch one more than the limit

  const params = { search: query, start, end };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  const hasNextPage = posts.length > limit;
  const displayedPosts = hasNextPage ? posts.slice(0, limit) : posts;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {displayedPosts?.length > 0 ? (
            displayedPosts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>

        {/* Pagination Controls */}
        <div className="pagination">
          {pageNumber > 1 && (
            <a href={`?query=${query}&page=${pageNumber - 1}`} className="pagination-btn previous-btn">
              Previous
            </a>
          )}
          {hasNextPage && (
            <a href={`?query=${query}&page=${pageNumber + 1}`} className="pagination-btn next-btn">
              Next
            </a>
          )}
        </div>
      </section>

      <SanityLive />
    </>
  );
}
