import React from 'react';
import { homeObjectone, homeObjectTwo, homeObjectThree } from './Data';
import { InfoSection } from '../../components';

function Articles() {
    return (
        <>
            <InfoSection {...homeObjectone} />
            <InfoSection {...homeObjectTwo} />
            <InfoSection {...homeObjectThree} />

        </>
    );
}

export default Articles;