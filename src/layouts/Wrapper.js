import { Mixed } from '../components/Mixed';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseWrapper = styled(Mixed.div)`
  @media (min-height: 600px) {
    @media (min-width: 884px) {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CenterWrapper = styled(Mixed.div)`
  padding: 0px 0px;
  @media (min-height: 600px) {
    @media (min-width: 884px) {
      height: 624px;
      border-radius: 25px;
      width: 432px;
    }
  }
`;

const Layout = styled(Mixed.div)`
  display: grid;
  grid-template-areas:
    'navigation'
    'content';
  grid-template-rows: min-content 1fr;
`;

export const Wrapper = ({ children, ...props }) => (
  <BaseWrapper {...props}>
    <CenterWrapper {...props}>
      <Layout>{children}</Layout>
    </CenterWrapper>
  </BaseWrapper>
);

Wrapper.defaultProps = {
  backgroundColor: 'n01',
  boxSizing: 'border-box',
  display: 'grid',
  layoutHeight: '100%',
  layoutPosition: 'relative',
  overflow: 'hidden',
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
