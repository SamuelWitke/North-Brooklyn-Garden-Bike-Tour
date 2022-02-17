import { render } from '@testing-library/react';

import LentolGarden from './lentol-garden';

describe('LentolGarden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LentolGarden />);
    expect(baseElement).toBeTruthy();
  });
});
