import React from 'react';
import { VideoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';

function Videos() {
    return (
        <>
            <VideoSection {...homeObjOne} />
            <VideoSection {...homeObjTwo} />
            <VideoSection {...homeObjThree} />

        </>
    )
}

export default Videos;