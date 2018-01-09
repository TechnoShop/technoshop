import React, { Component } from 'react';
import { ContainerFluid, Container } from 'Src/theme/grid';
import { RevealP, Image, HeroImage } from './Home.style';
import WhenInView from 'Src/components/WhenInView/WhenInView';



class Home extends Component {

    render() {
        return (
            <ContainerFluid>
                <HeroImage>
                    <h1>Techno Shop</h1>
                    <h2>En yeni teknolojik ürünleri bulabileceğiniz en iyi sayfa</h2>
                </HeroImage>
                <Container>
                    <h1>Hello</h1>
                    {/* <Image src={require('../../assets/street-cropped.gif')} alt="street gif" /> */}
                    <WhenInView> 
                        {({isInView}) =>
                            <RevealP hide={!isInView} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum exercitationem est consequatur animi cum quis impedit praesentium sunt dolores in autem velit voluptate fuga consectetur, repellendus itaque dolorum eos quidem?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quos at fugiat cum a error odit ab aliquid nisi.
                            </RevealP>
                        }
                    </WhenInView>
                    <WhenInView> 
                        {({isInView}) =>
                            <RevealP hide={!isInView} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum exercitationem est consequatur animi cum quis impedit praesentium sunt dolores in autem velit voluptate fuga consectetur, repellendus itaque dolorum eos quidem?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quos at fugiat cum a error odit ab aliquid nisi.
                            </RevealP>
                        }
                    </WhenInView>
                    <WhenInView> 
                        {({isInView}) =>
                            <RevealP hide={!isInView} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum exercitationem est consequatur animi cum quis impedit praesentium sunt dolores in autem velit voluptate fuga consectetur, repellendus itaque dolorum eos quidem?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum quos at fugiat cum a error odit ab aliquid nisi.
                            </RevealP>
                        }
                    </WhenInView>
                </Container>
            </ContainerFluid>
        );
    }
}

export default Home;