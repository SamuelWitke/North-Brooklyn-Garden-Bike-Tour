import { render } from '@testing-library/react';

import Biketour2022 from './biketour2022';

describe('Biketour2022', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Biketour2022 />);
    expect(baseElement).toBeTruthy();
  });
});
