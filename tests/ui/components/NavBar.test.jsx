import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockedUseNAvigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNAvigate

} ));

describe('Pruebas en <NavBar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Abelardo'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar el nombre del usuario', () => {
        render(  
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
           
        );

        
        expect( screen.getByText('Abelardo')).toBeTruthy()

    });

    test('debe de llamar el logout y navigare cuano hace click el boton', () => {
        render(  
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
           
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );


        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNAvigate ).toHaveBeenCalledWith("/login", {"replace": true});

    });

})