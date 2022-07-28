import { authReducer , types } from '../../../src/auth/';

describe('Pruebas en authReducer', () => {
    const initialState = {
        logged: false
    }

    test('debe de retornar el estado por defecto', () => {
        const state =  authReducer(initialState,{});
        expect( state ).toBe( initialState );
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const newUser = { id: 'ABC', name: 'Abelardo' };

        const action ={ type: types.login , payload: newUser }

        const { user, logged } =  authReducer(initialState,action);

        expect( user ).toBe( newUser );
        expect( logged ).toBeTruthy();


    });
    test('debe de (logout borrar el name del usuario y logged en false)', () => {
        const state = {
            logged: true,
            user: { id: 'ABC', name: 'Abelardo' }
        }
        const action ={ type: types.logout  }

        const { logged } =  authReducer(state,action);
        
        expect( logged ).toBeFalsy();
    });
});