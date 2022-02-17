import { render } from '@testing-library/react';

import RedShedGarden from './red-shed-garden';

describe('RedShedGarden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RedShedGarden />);
    expect(baseElement).toBeTruthy();
  });
});
