import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

test('Renders StarWarsCharacters\' previous/next buttons', () => {
    // AAA Arrange, Act, Assert
    const { getByText } = render(<StarWarsCharacters />);
    const previousButton = getByText(/Previous/i);
    const nextButton = getByText(/Next/i);

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);

    expect(mockGetData).toHaveBeenCalledTimes(1);
})
