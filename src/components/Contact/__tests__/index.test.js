import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact Component', () => {
    it('renders', () => {
        render(<Contact/>)
    });

    it('matches snapshop', () => {
        const {asFragment} = render(<Contact/>)
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('match components', () => {
    it('displays proper header', () => {
        const {getByTestId} = render(<Contact/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})