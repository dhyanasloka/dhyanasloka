import React from 'react';
import { homeObjectFour,homeObjectone, homeObjectTwo, homeObjectThree } from './Data';
import { ArticleSection } from '../../components';

function Articles() {
    return (
        <>
            <ArticleSection {...homeObjectFour} />
            <ArticleSection {...homeObjectone} />
            <ArticleSection {...homeObjectTwo} />
            <ArticleSection {...homeObjectThree} />

        </>
    );
}

export default Articles;