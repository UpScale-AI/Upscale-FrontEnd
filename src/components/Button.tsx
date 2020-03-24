import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
export class CustomButton extends PureComponent {
    render() {
        return (
            <Button variant="contained" color="secondary">
                Testing Button
            </Button>
        );
    }
}

export default Button;
