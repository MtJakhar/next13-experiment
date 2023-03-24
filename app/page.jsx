import Movie from "./Movie"

// What is a page
// is a next component that is a component which creates a route associated with its file/folder name, seems to take precedence, if pages is in root folder, it becomes the home page

// every page by default is a server component, server side rendered you can not use onClick or use effect on pages when its serverside rendered.If you want to useState you have to make this page into a client component via "use client". When fetching data it is better to use the default server component.

// How to fetch? in previous versions of next, you had to create another function called getStaticProps, but now you can just make a fetch request.

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

  const res = await data.json()
  console.log(res)
  const movies = res.results.map((movie) => {
    return (
      <Movie 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
      />
    )
  })

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies}
      </div>
    </main>
  )
}
