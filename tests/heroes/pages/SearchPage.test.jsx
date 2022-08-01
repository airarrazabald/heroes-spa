import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNAvigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNAvigate

} ));

describe('Pruebas en <SearchPage/>', () => { 

    beforeEach(() => jest.clearAllMocks() );

    test('debe de mostrarse correctamente con valores por defecto ', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot();
    });


    test('debe de mostrar a Batman y el input con el valor del query string', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect( input.value  ).toBe('batman');

        const image = screen.getByRole('img');
        expect( image.src  ).toContain('./assets/heroes/dc-batman.jpg');

        const divMessage = screen.getByLabelText('divWarning')
        expect(divMessage.style.display).toBe('none');


    });

    test('debe de mostrar un error si no se encuentra el hero', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=megaman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value  ).toBe('megaman');

        const divMessage = screen.getByLabelText('divWarning')
        expect(divMessage.style.display).toBe('');

    });

    test('debe de llamar el navigate a la pantalla nueva', () => { 

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue }} );

        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

        expect( mockedUseNAvigate ).toHaveBeenCalledWith(`?q=${inputValue}`);


    });
})