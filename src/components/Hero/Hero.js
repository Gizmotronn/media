import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        I am <br />
        Liam Arbuckle
      </SectionTitle>
      <SectionText>
        I am LA7
      </SectionText>
      <Button onClick={() => window.location = 'https://la7.skinetics.tech'}>My resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
