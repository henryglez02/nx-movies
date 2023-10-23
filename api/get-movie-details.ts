import {IMovie} from '@/Models/movie'

export const getMovieDetails=async (id:String): Promise<IMovie> => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}language=en-US`,
        {
          headers: {
            accept: "aplication/json",
            Authorization: `Bearer ${process.env.THEMOVIEAPI_KEY}`,
          },
          next: { revalidate: 3600 },
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const resData = await res.json();
  
      return resData;
}