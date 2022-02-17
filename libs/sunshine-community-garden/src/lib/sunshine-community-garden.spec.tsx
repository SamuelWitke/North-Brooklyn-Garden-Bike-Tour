import { render } from '@testing-library/react';

import SunshineCommunityGarden from './sunshine-community-garden';

describe('SunshineCommunityGarden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SunshineCommunityGarden />);
    expect(baseElement).toBeTruthy();
  });
});
