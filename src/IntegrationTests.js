// src/IntegrationTests.js
import React from 'react';
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

test('adds and deletes ad', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const inputElement = getByPlaceholderText('Enter ad text');
    fireEvent.change(inputElement, { target: { value: 'Test Ad' } });
    fireEvent.submit(getByText('Add Ad'));

    expect(getByText('Test Ad')).toBeInTheDocument();

    fireEvent.click(getByText('Delete'));
    await waitForElementToBeRemoved(() => queryByText('Test Ad'));
});
