import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles'
import {
    VideoSec, VideoRow, VideoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper
} from './VideoSection.element';
import ReactPlayer from 'react-player';

function VideoSection({
    primary,
    lightBg,
    topLine,
    lightText,
    lightTopLine,
    lightTextDesc,
    headline,
    description,
    videoUrl,
    imgStart,
    start

}) {
    return (
        <>
            <VideoSec lightBg={lightBg}>
                <Container>
                    <VideoRow imgStart={imgStart}>
                        <VideoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </VideoColumn>
                        <VideoColumn>
                            <ImgWrapper start={start}>
                                <ReactPlayer
                                    url={videoUrl}
                                />
                            </ImgWrapper>
                        </VideoColumn>

                    </VideoRow>
                </Container>
            </VideoSec>

        </>
    );
}

export default VideoSection;