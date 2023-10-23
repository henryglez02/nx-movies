import { getMovieDetails } from "@/api/get-movie-details";
import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const MoviePage = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getMovieDetails(id);

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack
        direction="column"
        alignItems="center"
        p={4}
        maxWidth="lg"
        sx={{ width: "100%" }}
        spacing={4}
      >
        <Link href="/" style={{ display: "flex", alignSelf: "start" }}>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Image
          width="360"
          height="540"
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          quality={100}
          alt={"movie poster"}
          style={{ borderRadius: "24px" }}
        />
        <Typography variant="h3">{movie.title}</Typography>
        <Typography variant="subtitle2">{movie.release_date}</Typography>
        <Typography variant="body1">{movie.overview}</Typography>
      </Stack>
    </main>
  );
};

export default MoviePage;
