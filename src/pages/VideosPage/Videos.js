import React from 'react';
import { VideoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Videos() {
    return (
        <>
            <VideoSection {...homeObjFour} />
            <VideoSection {...homeObjOne} />
            <VideoSection {...homeObjTwo} />
            <VideoSection {...homeObjThree} />

        </>
    )
}

export default Videos;