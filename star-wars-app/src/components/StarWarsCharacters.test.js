import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

jest.mock('../api');

const fakeData = {
    next: "https://swapi.co/api/people/?page=2", 
    previous: null, 
    results: [
        { name: 'Bob', url: '1'},
        { name: '2', url: '2'}
    ]
}

// test('Renders StarWarsCharacters\' previous/next buttons', () => {
//     // AAA Arrange, Act, Assert
//     const { getByText } = render(<StarWarsCharacters />);
//     const previousButton = getByText(/Previous/i);
//     const nextButton = getByText(/Next/i);

//     fireEvent.click(previousButton);
//     fireEvent.click(nextButton);

//     // expect(mockGetData).toHaveBeenCalledTimes(1)
//     // wait(() => expect(mockGetData).toHaveBeenCalledTimes(1));
// })

test('api works', async () => {
    mockGetData.mockResolvedValue(fakeData);
    const { getByText } = render(<StarWarsCharacters />);

    await wait(() => expect(getByText(/bob/i)));
    getByText(/Bob/i);

    expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');
})