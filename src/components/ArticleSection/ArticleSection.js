import React from 'react';
import {Container} from '../../globalStyles'
import { InfoSec,InfoRow,InfoColumn,TextWrapper,Heading,ImgWrapper,Img, Articlepoint, Articlebody} from './ArticleSection.elements';


function ArticleSection({
    lightBg,
    lightText,
    headline,
    description1,
    description2,
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