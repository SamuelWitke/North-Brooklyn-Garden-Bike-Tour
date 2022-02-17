import { render } from '@testing-library/react';

import ElPuente from './el-puente';

describe('ElPuente', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ElPuente />);
    expect(baseElement).toBeTruthy();
  });
});
