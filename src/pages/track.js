import React from "react";
import Layout from "../components/layout";
import { QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

function Track({ trackId }) {
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout>
      <QueryResult data={data} loading={loading} error={error}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
}

export default Track;
