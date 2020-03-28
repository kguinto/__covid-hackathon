import React, { useEffect } from 'react';
import axios from 'axios';
import { css } from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import Page from 'components/Page';
import Button from 'components/Button';
import Hero from 'components/Hero';

const LandingPage = ({ className }) => {
  useEffect(() => {
    axios.get(`/api/mock-endpoint`).then((res) => console.log(res));
  }, []);

  const history = useHistory();

  return (
    <Page className={className}>
      <div
        css={css`
          display: grid;
        `}
      >
        <Hero />
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-top: 5rem;
          `}
        >
          <Button
            onClick={() => history.push('/donate')}
            primary
            css={css`
              font-size: 1.8rem;
            `}
            className={className}
          >
            {'I want to help!'}
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default LandingPage;
