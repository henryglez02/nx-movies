"use client";

import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Stack>
      <Link href="/">
        <Typography
          variant="h2"
          sx={{ display: "grid", textDecoration: "none" }}
        >
          Error Detected. Try again
        </Typography>
      </Link>
    </Stack>
  );
}
