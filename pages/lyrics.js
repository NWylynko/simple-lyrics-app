import React from 'react';
import useFetch from '../hooks/useFetch';
import Typography from '@material-ui/core/Typography'

import { useParams } from "react-router-dom";

export default function LyricPage() {

  let { song, artist } = useParams();

  return <Lyrics song={song} artist={artist} />

}

function Lyrics({song, artist}) {


  let api = `https://api.lyrics.ovh/v1/${artist}/${song}`;

  const { data, loading, error } = useFetch(api);

  if (loading) {
    return <Typography variant="h5">loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h5">{error}</Typography>;
  }

  return (
    <>
      <Typography variant="h3">
        {song} by {artist} lyrics
      </Typography>
      <Typography variant="body1">{data}</Typography>
    </>
  );
}