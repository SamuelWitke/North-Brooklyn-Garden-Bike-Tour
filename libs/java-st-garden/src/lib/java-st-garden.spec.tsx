import { render } from '@testing-library/react';

import JavaStGarden from './java-st-garden';

describe('JavaStGarden', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JavaStGarden />);
    expect(baseElement).toBeTruthy();
  });
});
