import { render, screen } from '@testing-library/react';
import { CheckList } from './Checklist';
import exp from 'constants';

test('renders CheckList with data', () => {
    render(
        <CheckList 
        data={[{ id: '1', primary: 'Item 1', secondary: 'Manager'}]}   
        id = 'id'
        primary = 'primary'
        secondary = 'secondary'
        />
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Manager')).toBeInTheDocument()
});

test('should render correct list item', () => {
    render(
        <CheckList 
        data={[{ id: '1', primary: 'Item 1', secondary: 'Manager'}]}   
        id = 'id'
        primary = 'primary'
        secondary = 'secondary'
        renderItem={(item) => (
            <li key={item.id}>
                {item.primary} -- {item.secondary}
            </li>
        )}
        />
    )
    expect(screen.getByText('Item 1 -- Manager')).toBeInTheDocument()
});
