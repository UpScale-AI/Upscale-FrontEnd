import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from '../../components/Button';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
