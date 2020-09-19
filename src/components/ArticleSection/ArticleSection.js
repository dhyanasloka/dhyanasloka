import React from 'react';
import {Container,Button} from '../../globalStyles'
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,ImgWrapper,Img, Articlepoint, Articlebody} from './ArticleSection.elements';


function ArticleSection({
    primary,
    lightBg,
    topLine,
    lightText,
    lightTopLine,
    lightTextDesc,
    headline,
    description1,
    description2,
    buttonLabel,
    img,
    alt,
    imgStart,
    start

}){
    return(
      <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Articlebody>
                                <Articlepoint lightText={lightText}>
                                    {description1}
                                </Articlepoint>
                                <Articlepoint lightText={lightText}>
                                    {description2}
                                </Articlepoint>
                            </Articlebody>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>

      </>  
    );
}

export default ArticleSection;