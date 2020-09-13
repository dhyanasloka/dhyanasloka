import React from 'react';
import { homeObjectone, homeObjectTwo, homeObjectThree } from './Data';
import { InfoSection } from '../../components';

function Home() {
    return (
        <>
            <InfoSection {...homeObjectone} />
            <InfoSection {...homeObjectTwo} />
            <InfoSection {...homeObjectThree} />

        </>
    );
}

export default Home;