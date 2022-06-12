import React from 'react';
import { render, waitFor, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('render persons list', async () => {
    render(<App />);

    await waitFor(() => {
        const linkElement = screen.getByText(/Smith Sarah/i);
        expect(linkElement).toBeInTheDocument();
    })
});

test('renders error message', async () => {

    const setApiResponse = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation(() => [[], setApiResponse]);
    render(<App />);

    await act(() => {
        const linkElement = screen.getByText(/No data./i);
        expect(linkElement).toBeInTheDocument();
    });
});
