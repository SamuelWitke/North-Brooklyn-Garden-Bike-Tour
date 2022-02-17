import { render } from '@testing-library/react';

import KeapFourth from './keap-fourth';

describe('KeapFourth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KeapFourth />);
    expect(baseElement).toBeTruthy();
  });
});
