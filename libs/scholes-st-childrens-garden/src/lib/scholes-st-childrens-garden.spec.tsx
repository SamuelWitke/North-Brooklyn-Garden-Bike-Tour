import { render } from '@testing-library/react';

import ScholesStChildrensGarden from './scholes-st-childrens-garden';

describe('ScholesStChildrensGarden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScholesStChildrensGarden />);
    expect(baseElement).toBeTruthy();
  });
});
