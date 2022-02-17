import { render } from '@testing-library/react';

import BerryStreetGarden from './berry-street-garden';

describe('BerryStreetGarden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BerryStreetGarden />);
    expect(baseElement).toBeTruthy();
  });
});
