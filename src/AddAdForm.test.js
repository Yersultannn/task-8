// src/AddAdForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddAdForm from './AddAdForm';

test('renders AddAdForm component', () => {
    render(
        <Provider store={store}>
            <AddAdForm />
        </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Enter ad text');
    expect(inputElement).toBeInTheDocument();
});

test('adds new ad on form submit', () => {
    render(
        <Provider store={store}>
            <AddAdForm />
        </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Enter ad text');
    fireEvent.change(inputElement, { target: { value: 'Test Ad' } });
    fireEvent.submit(screen.getByText('Add Ad'));
    expect(screen.getByText('Test Ad')).toBeInTheDocument();
});
