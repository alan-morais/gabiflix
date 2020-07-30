import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componets/PageDefault';
import FormField from '../../../componets/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);



    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    };

    function handleChange(evento) {
        const { getAttribute, value } = evento.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro Categoria: {values.nome}</h1>
            <form onSubmit={
                function handleSubmit(evento) {
                    evento.preventDefault()
                    setCategorias([
                        ...categorias,
                        values
                    ]);
                    setValues([valoresIniciais]);
                }}>

                <FormField
                label = "Nome da Categoria"
                type = "text"
                name = "nome"
                value = {values.nome}
                onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                
                <FormField
                label = "Cor"
                type = "color"
                name = "cor"
                value = {values.cor}
                onChange={handleChange}
                />

                <button>
                    Cadastrar
    </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    );
};

export default CadastroCategoria;