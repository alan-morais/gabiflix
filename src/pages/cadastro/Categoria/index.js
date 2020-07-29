import React from 'react';
import PageDefault from '../../../componets/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Página de Cadastro Categoria!</h1>

            
            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    );
};

export default CadastroCategoria;