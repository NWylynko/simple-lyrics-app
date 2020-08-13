import React, { useState } from 'react'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Redirect } from "react-router-dom";

export default function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect push to={`/${artist}/${song}`} />
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Song"
        variant="outlined"
        value={song}
        onChange={event => setSong(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Artist"
        variant="outlined"
        value={artist}
        onChange={event => setArtist(event.target.value)}
      />

      <Button variant="contained" onClick={() => setRedirect(true)}>
        Search
      </Button>
    </>
  );
}