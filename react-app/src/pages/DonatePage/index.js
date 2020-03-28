import React, { useState } from 'react';
import { css } from 'styled-components/macro';

import { useSelection } from 'hooks';

import Page from 'components/Page';
import Hero from 'components/Hero';
import Stepper from 'components/Stepper';

import DonationResults from './DonationResults';
import ItemSelect from './ItemSelect';
import UnitSubform from './UnitSubform';
import ZipCodeInput from './ZipCodeInput';

const DonatePage = ({ className }) => {
  const [step, setStep] = useState(1);

  const [selectedItems, { handleSelect }] = useSelection();

  return (
    <Page className={className}>
      <Hero />

      {/* Just for testing */}
      {/* TODO: Remove below */}
      <div>
        <button
          disabled={step >= 4}
          onClick={(e) => (step < 4 ? setStep(step + 1) : null)}
        >
          {'step++'}
        </button>
      </div>
      {/* TODO: Remove above */}

      <Stepper
        step={step}
        css={css`
          margin-top: 2rem;
        `}
      >
        {[
          <ItemSelect
            key="item-select"
            items={[
              'Money',
              'Masks',
              'Hand Sanitizer',
              'Face Shields',
              'Disinfecting Wipes',
              'Other',
            ]}
            handleSelect={handleSelect}
            selectedItems={selectedItems}
          />,
          <UnitSubform key="unit-subform" />,
          <ZipCodeInput key="zip-code-input" />,
          <DonationResults key="donation-results" />,
        ]}
      </Stepper>
    </Page>
  );
};

export default DonatePage;
