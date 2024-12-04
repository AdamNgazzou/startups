import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current)] | order(_createdAt desc) {
  id,
  title,
  slug,
  _createdAt,
  author -> {
    id,
    name,
    image,
    bio
  },
  views,
  description,
  category,
  image
}`);
// if you want to implement an algorithm where you can sort how the startups are displayed in a rating/unique way where it is sorted by score on how much views / challanges he made
//in the website , like gamification making people stay longer use the website longer idk badges or whatever this is the right place just modify the oder =(_createdAt desc ) and create
//another variable adding it to sanity ect ect  hehehehehe