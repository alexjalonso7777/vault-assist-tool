import { Animation } from '../../components/Animation';
import { Button } from '../../components/Button';
import { H3 } from '../../components/Typography/H3';
import { Header } from '../../layouts';
import { Mixed } from '../../components/Mixed';
import { Paragraph } from '../../components/Typography/Paragraph';
import { ScrollableSection } from '../../components/ScrollableSection';
import { SectionStickyFooter } from '../../components/SectionStickyFooter';
import { Semibold } from '../../components/Typography/Semibold';
import { Svg } from '../../components/Svg';
import { colors } from '../../lib/styles';
import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Center = styled(Mixed.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  justify-items: center;
  grid-area: content;
  @media (min-height: 600px) {
    @media (min-width: 884px) {
      padding: 40px 24px;
    }
  }
`;

export const Section = styled(ScrollableSection)`
  grid-area: content;
`;

export const Failure = ({ onFinish }) => {
  const { t } = useTranslation();
  const [animating, setAnimating] = useState(true);

  return animating ? (
    <Center>
      <Animation
        animation="failedOperation"
        animationOptions={{ loop: false }}
        color={colors.red30}
        isActive
        layoutMaxWidth="100px"
        onComplete={() => setAnimating(false)}
        paddingVertical="sp03"
      />
    </Center>
  ) : (
    <Section>
      <Center>
        <Mixed.div paddingVertical="sp03">
          <Svg color={colors.red30} height={100} name="failed" width={100} />
        </Mixed.div>
        <Header alignItems="center">
          <H3 marginBottom="sp02">
            <Semibold>{t('transaction.failure.header')}</Semibold>
          </H3>
        </Header>
        <Paragraph textAlign="center">{t('transaction.failure.description')}</Paragraph>
      </Center>
      <SectionStickyFooter>
        <Button onPress={onFinish}>{t('actions.close')}</Button>
      </SectionStickyFooter>
    </Section>
  );
};

Failure.propTypes = {
  onFinish: PropTypes.func.isRequired,
};
