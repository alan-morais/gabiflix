import React from 'react';
import PageDefault from '../../../componets/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Página de Cadastro Categoria!</h1>
            <form>
                <label>
                    <input
                        type="text" />
                </label>
                <button>
                    Cadastrar
    </button>
            </form>


            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    );
};

export default CadastroCategoria;