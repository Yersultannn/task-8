// src/AdList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdList from './AdList';

test('renders AdList component', () => {
    render(
        <Provider store={store}>
            <AdList />
        </Provider>
    );
    expect(screen.getByText('Ad Board')).toBeInTheDocument();
});

test('deletes ad on button click', () => {
    render(
        <Provider store={store}>
            <AdList />
        </Provider>
    );
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Test Ad')).not.toBeInTheDocument();
});
