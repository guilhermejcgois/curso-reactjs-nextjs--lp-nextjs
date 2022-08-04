import React from 'react';

import { Home } from './Home';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Home />);
    expect(container).toMatchSnapshot();
  });
});
