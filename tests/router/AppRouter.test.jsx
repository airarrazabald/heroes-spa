import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }
        

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                 <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
           
        )

        expect( screen.getByText('Login') ).toBeTruthy();
    })

    test('debe de mostrar el componente de marvel si esta utenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id:'ABC',
                name: 'Abelardo'
            }   
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                 <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
           
        )
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
    })

});