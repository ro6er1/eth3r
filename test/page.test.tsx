import React from 'react';
import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import { screen } from "shadow-dom-testing-library";
import "@testing-library/jest-dom";
import HomePage from '../src/app/page';
import Squares from '../src/app/squares'

test('Test home page', async () => {
    // A very small test, will write more when I get time
    // ARRANGE
    render(<HomePage />);
    const header = await screen.findByShadowRole("heading");
    const { container } = render(<Squares />)

    // ACT
    const headerText = 'I\'m Roger Taylor, I have been working in the web industry since 2002 as a designer and frontend developer.';

    // ASSERT
    expect(header).toHaveTextContent(headerText);
    expect(container.firstChild).toBeEmptyDOMElement();
})