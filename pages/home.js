import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

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

      <Button variant="contained" onClick={() => {}}>
        Search
      </Button>
    </>
  );
}