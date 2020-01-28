import React from 'react';
import { render, fireEvent, wait, cleanup } from '@testing-library/react';
import { getData as mockGetData } from '../api';
import StarWarsCharacters from './StarWarsCharacters';

// afterEach(cleanup);



test('Renders StarWarsCharacters\' previous/next buttons', () => {
    // AAA Arrange, Act, Assert
    const { getByText } = render(<StarWarsCharacters />);
    const previousButton = getByText(/Previous/i);
    const nextButton = getByText(/Next/i);

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);

    // expect(mockGetData).toHaveBeenCalledTimes(1);
    // wait(() => expect(mockGetData).toHaveBeenCalledTimes(1));
})
jest.mock('../api');

const fakeData = {
    next: "https://swapi.co/api/people/?page=2", 
    previous: null, 
    results: [
        { name: 'Bob', url: '1'},
        { name: '2', url: '2'}
    ]
}

mockGetData.mockResolvedValue(fakeData);
test('api works', async () => {
    const { getByText } = render(<StarWarsCharacters />);
    // const previousButton = await getByText(/Previous/i);
    // const nextButton = await getByText(/Next/i);

    // fireEvent.click(previousButton);
    // fireEvent.click(nextButton);

    await wait(() => expect(getByText(/bob/i)));
    getByText(/Bob/i);

    expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');
})