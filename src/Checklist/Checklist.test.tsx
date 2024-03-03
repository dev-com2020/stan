import { render, screen } from '@testing-library/react';
import { CheckList } from './Checklist';

test('renders CheckList with data', () => {
    render(
        <CheckList 
        data={[{ id: '1', primary: 'Item 1', secondary: 'Description 1'}]}   
        id = 'id'
        primary = 'primary'
        secondary = 'secondary'
        />
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
});