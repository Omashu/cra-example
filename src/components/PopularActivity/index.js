import React from "react";
import Wrapper, {
  Title,
  Overlay,
  Meta,
  MetaActivities,
  PullRight
} from "./styles";

export default function PopularActivity({ item }) {
  return (
    <Wrapper image={item.wallpaper}>
      <Overlay />
      <Title>{item.title}</Title>
      <Meta>
        <MetaActivities>{item.activities} Activities</MetaActivities>
        <PullRight>from ${item.from}</PullRight>
      </Meta>
    </Wrapper>
  );
}
