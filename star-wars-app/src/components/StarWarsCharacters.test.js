import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';

test('Renders StarWarsCharacters\' previous/next buttons', () => {
    // AAA Arrange, Act, Assert
    const { getByText } = render(<StarWarsCharacters />);
    const previousButton = getByText(/Previous/i);
    const nextButton = getByText(/Next/i);

    fireEvent.change(previousButton);
    fireEvent.change(nextButton);
})

// test('Previous & Next buttons fire the new call of characters from the API', () => {
//     render(<StarWarsCharacters />);
//     fireEvent.change()
// })