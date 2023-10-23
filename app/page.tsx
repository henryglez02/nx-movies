import { getPopularMovies } from "@/api/get-popular-movies";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await getPopularMovies();

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"",}}
    >
      <Stack
        direction="column"
        alignItems="center"
        p={4}
        maxWidth="lg"
        sx={{ width: "100%" }}
      >
        <Typography sx={{fontFamily:"console"}}variant="h3">Popular movies</Typography>
        <Grid2
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", mt: 1 }}
        >
          {data.map((i) => (
            <Grid2 key={i.id}>
              <Link href={`/movies/${i.id}`} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    width: 250,
                    boxShadow: 0,
                    ":hover": {
                      boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Image
                    width="250"
                    height="375"
                    alt="aa"
                    src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}
                  />
                  <CardContent  sx={{display: "flex" , justifyContent:"center"}}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {i.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </main>
  );
}
