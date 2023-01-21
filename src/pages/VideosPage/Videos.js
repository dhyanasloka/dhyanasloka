import React from "react";
import { VideoSection } from "../../components";
import { homeObjOne, homeObjThree, homeObjFour, homeObjlatest } from "./Data";

function Videos() {
  return (
    <>
      <VideoSection {...homeObjOne} />
      <VideoSection {...homeObjlatest} />
      <VideoSection {...homeObjThree} />
      {/* <VideoSection {...homeObjTwo} /> */}
      <VideoSection {...homeObjFour} />
    </>
  );
}

export default Videos;
